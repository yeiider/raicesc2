import { GET } from '@/app/api/wompi/transactions/[id]/route';
import { MockNextRequest, parseResponse, createTestContext } from '@/__tests__/helpers/api-test-helper';

// Mock fetch
global.fetch = jest.fn();

describe('Wompi Transactions API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get transaction details by ID', async () => {
    // Mock successful response
    const mockTransactionData = {
      data: {
        id: 'test-transaction-id',
        amount_in_cents: 5000000,
        currency: 'COP',
        status: 'APPROVED',
        reference: 'payment-ref-123',
        payment_method_type: 'CARD',
        payment_method: {
          type: 'CARD',
          extra: {
            brand: 'VISA',
            last_four: '1234'
          }
        },
        customer_data: {
          full_name: 'Test User',
          email: 'test@example.com'
        }
      }
    };

    // Setup fetch mock
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockTransactionData),
      status: 200,
      statusText: 'OK'
    });

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/wompi/transactions/test-transaction-id');
    const context = createTestContext({ id: 'test-transaction-id' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(200);
    expect(data).toEqual(mockTransactionData);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/transactions/test-transaction-id'),
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }),
        cache: 'no-store'
      })
    );
  });

  it('should return 400 if transaction ID is missing', async () => {
    // Create mock request and context with undefined params
    const request = new MockNextRequest('http://localhost:3000/api/wompi/transactions/undefined');
    const context = createTestContext({ id: undefined as unknown as string });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(400);
    expect(data).toEqual({ error: 'Se requiere el ID de la transacción' });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('should handle API error', async () => {
    // Setup fetch mock to return error
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      text: jest.fn().mockResolvedValue('Transaction not found'),
      status: 404,
      statusText: 'Not Found'
    });

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/wompi/transactions/non-existent-id');
    const context = createTestContext({ id: 'non-existent-id' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(404);
    expect(data).toEqual({ error: expect.stringContaining('Not Found') });
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/transactions/non-existent-id'),
      expect.any(Object)
    );
  });

  it('should handle fetch error', async () => {
    // Setup fetch mock to throw error
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    // Create mock request and context
    const request = new MockNextRequest('http://localhost:3000/api/wompi/transactions/test-transaction-id');
    const context = createTestContext({ id: 'test-transaction-id' });

    // Call the API handler
    const response = await GET(request as any, context);
    const { status, data } = await parseResponse(response);

    // Assertions
    expect(status).toBe(500);
    expect(data).toEqual({ error: expect.stringContaining('Network error') });
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/transactions/test-transaction-id'),
      expect.any(Object)
    );
  });
});
