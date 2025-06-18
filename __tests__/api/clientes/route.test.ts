import { GET } from '@/app/api/clientes/route';
import { ClienteService } from '@/services/clienteService';
import { MockNextRequest, parseResponse } from '@/__tests__/helpers/api-test-helper';

// Mock ClienteService
jest.mock('@/services/clienteService', () => ({
  ClienteService: {
    buscarPorCedula: jest.fn()
  }
}));

describe('Clientes API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should search for a client by cedula (1149686590) in general city', async () => {
    // Mock successful response
    const mockClientData = {
      id: '123',
      nombre: 'Cliente Prueba',
      cedula: '1149686590',
      ciudad: 'general',
      direccion: 'Dirección de prueba',
      telefono: '1234567890',
      email: 'cliente@example.com'
    };

    // Setup the mock to return success
    (ClienteService.buscarPorCedula as jest.Mock).mockResolvedValue({
      status: 200,
      data: mockClientData
    });

    // Create a mock request
    const request = new MockNextRequest('http://localhost:3000/api/clientes?cedula=1149686590');

    // Call the API handler
    const response = await GET(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual(mockClientData);
    expect(ClienteService.buscarPorCedula).toHaveBeenCalledWith('1149686590', 'general');
  });

  it('should search for a client by cedula (1149686590) in jamundi city', async () => {
    // Mock successful response
    const mockClientData = {
      id: '456',
      nombre: 'Cliente Jamundi',
      cedula: '1149686590',
      ciudad: 'jamundi',
      direccion: 'Dirección en Jamundi',
      telefono: '9876543210',
      email: 'cliente.jamundi@example.com'
    };

    // Setup the mock to return success
    (ClienteService.buscarPorCedula as jest.Mock).mockResolvedValue({
      status: 200,
      data: mockClientData
    });

    // Create a mock request
    const request = new MockNextRequest('http://localhost:3000/api/clientes?cedula=1149686590&ciudad=jamundi');

    // Call the API handler
    const response = await GET(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual(mockClientData);
    expect(ClienteService.buscarPorCedula).toHaveBeenCalledWith('1149686590', 'jamundi');
  });

  it('should return 400 if cedula is missing', async () => {
    // Create a mock request with missing cedula
    const request = new MockNextRequest('http://localhost:3000/api/clientes');

    // Call the API handler
    const response = await GET(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: "Se requiere el parámetro 'cedula'" });
    expect(ClienteService.buscarPorCedula).not.toHaveBeenCalled();
  });

  it('should handle client not found', async () => {
    // Setup the mock to return not found
    (ClienteService.buscarPorCedula as jest.Mock).mockResolvedValue({
      status: 404,
      data: { error: 'Cliente no encontrado' }
    });

    // Create a mock request
    const request = new MockNextRequest('http://localhost:3000/api/clientes?cedula=1149686590');

    // Call the API handler
    const response = await GET(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(404);
    expect(data).toEqual({ error: 'Cliente no encontrado' });
    expect(ClienteService.buscarPorCedula).toHaveBeenCalledWith('1149686590', 'general');
  });

  it('should handle service error', async () => {
    // Setup the mock to throw an error
    (ClienteService.buscarPorCedula as jest.Mock).mockRejectedValue({
      status: 500,
      message: 'Error en el servicio'
    });

    // Create a mock request
    const request = new MockNextRequest('http://localhost:3000/api/clientes?cedula=1149686590');

    // Call the API handler
    const response = await GET(request as any);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(500);
    expect(data).toEqual({ error: 'Error en el servicio' });
    expect(ClienteService.buscarPorCedula).toHaveBeenCalledWith('1149686590', 'general');
  });
});
