import { NextResponse } from 'next/server';

/**
 * This file contains helper functions for testing Next.js API routes.
 * It is not a test file itself.
 */

// Mock NextRequest for testing
export class MockNextRequest {
  private _url: URL;
  private _method: string;
  private _body: any;
  private _headers: Record<string, string>;

  constructor(url: string | URL, options: { method?: string; body?: any; headers?: Record<string, string> } = {}) {
    this._url = typeof url === 'string' ? new URL(url) : url;
    this._method = options.method || 'GET';
    this._body = options.body;
    this._headers = options.headers || {};
  }

  get url(): string {
    return this._url.toString();
  }

  get method(): string {
    return this._method;
  }

  get headers(): Headers {
    return new Headers(this._headers);
  }

  async json(): Promise<any> {
    return this._body;
  }

  async text(): Promise<string> {
    return typeof this._body === 'string' ? this._body : JSON.stringify(this._body);
  }

  get nextUrl() {
    return {
      searchParams: this._url.searchParams,
      pathname: this._url.pathname,
      href: this._url.href
    };
  }
}

// Helper function to parse response
export async function parseResponse(response: NextResponse): Promise<{ status: number; data: any }> {
  const status = response.status;

  // NextResponse in tests might not have a json method directly
  // We need to handle both cases
  let data;
  if (typeof response.json === 'function') {
    data = await response.json();
  } else {
    // For NextResponse objects that wrap a Response
    const responseBody = response as any;
    if (responseBody._body) {
      try {
        data = JSON.parse(responseBody._body);
      } catch (e) {
        data = responseBody._body;
      }
    } else {
      data = {}; // Default empty object if no body
    }
  }

  return { status, data };
}

// Helper function to create test context
export function createTestContext(params: Record<string, string> = {}) {
  return { params };
}
