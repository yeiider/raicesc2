import nodemailer from 'nodemailer';
import { POST } from '@/app/api/send-email/route';
import { MockNextRequest, parseResponse } from '@/__tests__/helpers/api-test-helper';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' })
  })
}));

describe('Send Email API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send a promo email successfully', async () => {
    // Create mock request with promo data
    const request = new MockNextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: {
        type: 'promo',
        data: {
          name: 'Test User',
          phone: '1234567890',
          email: 'test@example.com'
        }
      }
    });

    // Call the API handler
    const response = await POST(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual({ message: 'Correo enviado exitosamente' });
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledTimes(1);
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: expect.any(String),
        to: expect.any(String),
        subject: expect.stringContaining('Promoción 30 Días Gratis'),
        html: expect.any(String)
      })
    );
  });

  it('should send a free-trial email successfully', async () => {
    // Create mock request
    const request = new MockNextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: {
        type: 'free-trial',
        data: {
          name: 'Test User',
          phone: '1234567890',
          email: 'test@example.com',
          area: 'Test Area',
          location: 'Test Location'
        }
      }
    });

    // Call the API handler
    const response = await POST(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual({ message: 'Correo enviado exitosamente' });
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledTimes(1);
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: expect.any(String),
        to: expect.any(String),
        subject: expect.stringContaining('Prueba Gratuita'),
        html: expect.any(String)
      })
    );
  });

  it('should return 400 if type is missing', async () => {
    // Create mock request with missing type
    const request = new MockNextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: {
        data: {
          name: 'Test User',
          phone: '1234567890',
          email: 'test@example.com'
        }
      }
    });

    // Call the API handler
    const response = await POST(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: 'Tipo y datos son requeridos' });
    expect(nodemailer.createTransport().sendMail).not.toHaveBeenCalled();
  });

  it('should return 400 if data is missing', async () => {
    // Create mock request with missing data
    const request = new MockNextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: {
        type: 'promo'
      }
    });

    // Call the API handler
    const response = await POST(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: 'Tipo y datos son requeridos' });
    expect(nodemailer.createTransport().sendMail).not.toHaveBeenCalled();
  });

  it('should return 400 if type is invalid', async () => {
    // Create mock request with invalid type
    const request = new MockNextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: {
        type: 'invalid-type',
        data: {
          name: 'Test User',
          phone: '1234567890',
          email: 'test@example.com'
        }
      }
    });

    // Call the API handler
    const response = await POST(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: 'Tipo de formulario no válido' });
    expect(nodemailer.createTransport().sendMail).not.toHaveBeenCalled();
  });
});
