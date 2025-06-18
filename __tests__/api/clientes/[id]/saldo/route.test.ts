import axios from 'axios';
import { GET } from '@/app/api/clientes/[id]/saldo/route';
import { MockNextRequest, parseResponse, createTestContext } from '@/__tests__/helpers/api-test-helper';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Cliente Saldo API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get balance for client with ID 1149686590', async () => {
    // Mock successful response
    const mockBalanceData = {
      saldo: 50000,
      moneda: 'COP',
      estado: 'activo',
      fecha_corte: '2023-06-30'
    };

    // Setup axios mock
    mockedAxios.get.mockResolvedValue({
      data: mockBalanceData,
      status: 200
    });

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/clientes/1149686590/saldo');
    const context = createTestContext({ id: '1149686590' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual(mockBalanceData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('/clientes/1149686590/saldo'),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining('Api-Key'),
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      })
    );
  });

  it('should return 400 if client ID is missing', async () => {
    // Create mock request and context with undefined params
    const request = new MockNextRequest('http://localhost:3000/api/clientes/undefined/saldo');
    const context = createTestContext({ id: undefined as unknown as string });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: 'Se requiere el ID del cliente' });
    expect(mockedAxios.get).not.toHaveBeenCalled();
  });

  it('should handle API error', async () => {
    // Setup axios mock to throw error
    const errorResponse = {
      response: {
        status: 404,
        data: {
          message: 'Cliente no encontrado'
        }
      }
    };
    mockedAxios.get.mockRejectedValue(errorResponse);
    mockedAxios.isAxiosError.mockReturnValue(true);

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/clientes/1149686590/saldo');
    const context = createTestContext({ id: '1149686590' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(404);
    expect(data).toEqual({ error: expect.stringContaining('Cliente no encontrado') });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('/clientes/1149686590/saldo'),
      expect.any(Object)
    );
  });

  it('should handle non-axios error', async () => {
    // Setup axios mock to throw a generic error
    const genericError = new Error('Network error');
    mockedAxios.get.mockRejectedValue(genericError);
    mockedAxios.isAxiosError.mockReturnValue(false);

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/clientes/1149686590/saldo');
    const context = createTestContext({ id: '1149686590' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(500);
    expect(data).toEqual({ error: expect.stringContaining('Network error') });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('/clientes/1149686590/saldo'),
      expect.any(Object)
    );
  });
});
