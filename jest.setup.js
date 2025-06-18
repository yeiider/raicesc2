// Import testing-library utilities
import '@testing-library/jest-dom';

// Mock browser globals
global.Request = class Request {
  constructor(url, options = {}) {
    this.url = url;
    this.method = options.method || 'GET';
    this.body = options.body || null;
    this.headers = options.headers || {};
  }
};

global.Response = class Response {
  constructor(body, options = {}) {
    this.body = body;
    this.status = options.status || 200;
    this.statusText = options.statusText || '';
    this.headers = options.headers || {};
    this.ok = this.status >= 200 && this.status < 300;
  }

  json() {
    return Promise.resolve(JSON.parse(this.body));
  }

  text() {
    return Promise.resolve(this.body);
  }
};

global.Headers = class Headers {
  constructor(init = {}) {
    this.headers = { ...init };
  }

  get(name) {
    return this.headers[name.toLowerCase()];
  }

  set(name, value) {
    this.headers[name.toLowerCase()] = value;
  }
};

// Mock environment variables
process.env.SMTP_HOST = 'smtp.example.com';
process.env.SMTP_PORT = '587';
process.env.SMTP_SECURE = 'false';
process.env.SMTP_USER = 'test@example.com';
process.env.SMTP_PASS = 'password123';
process.env.NOTIFICATION_EMAIL = 'info@globalraices.com';
process.env.SECRET_WISPHUB_API_KEY = 'test-api-key';
process.env.SECRET_WISPHUB_API_BASE_URL = 'https://api.wisphub.example.com';
process.env.SECRET_WOMPI_API_BASE_URL = 'https://api.wompi.example.com';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' })
  })
}));

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(),
  isAxiosError: jest.fn().mockReturnValue(true)
}));

// Mock fetch
global.fetch = jest.fn();
