# Playwright Test Framework Setup

This repository contains a Playwright 3.x test automation framework with TypeScript support.

## Features

- Multi-browser testing (Chrome, Firefox, Safari)
- Mobile device testing (Chrome, Safari)
- Page Object Model pattern
- Custom fixtures for UI and API testing
- Comprehensive reporting (HTML, JSON, JUnit)
- ESLint and Prettier for code quality
- GitHub Actions CI/CD workflow

## Project Structure

```
playwright-3x/
├── tests/
│   ├── pages/          # Page Object Models
│   ├── fixtures/       # Custom test fixtures
│   └── specs/          # Test specifications
├── reports/            # Test reports and screenshots
├── .github/workflows/  # CI/CD configurations
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Usage

### Run all tests
```bash
npm run test
```

### Run tests with UI
```bash
npm run test:ui
```

### Debug tests
```bash
npm run test:debug
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Test specific browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Generate code for new tests
```bash
npm run codegen
```

### View test report
```bash
npm run report
```

### Linting and Formatting

Lint code:
```bash
npm run lint
```

Format code:
```bash
npm run format
```

## Environment Variables

Create a `.env` file in the root directory:

```
BASE_URL=http://localhost:3000
API_URL=http://localhost:3000/api
```

## Writing Tests

### Example: UI Test

```typescript
import { test, expect } from '@fixtures/uiFixtures';

test('login flow', async ({ loginPage }) => {
  await loginPage.goto('/login');
  await loginPage.login('user@example.com', 'password123');
  expect(loginPage.page.url()).toContain('/dashboard');
});
```

### Example: API Test

```typescript
import { test, expect } from '@playwright/test';

test('fetch users', async ({ request }) => {
  const response = await request.get('/api/users');
  expect(response.status()).toBe(200);
});
```

## Configuration

### playwright.config.ts

- Base URL configuration
- Browser and device settings
- Reporter options
- Retry and timeout settings

### tsconfig.json

- Path aliases (@pages, @fixtures, @utils)
- TypeScript compiler options

## CI/CD

Tests run automatically on:
- Push to main/develop branches
- Pull requests
- Daily schedule (midnight UTC)

Results are uploaded as artifacts for each Node.js version (18.x, 20.x).

## Troubleshooting

### Port already in use
If the base URL is not accessible, ensure your application is running on the configured port.

### Browser installation issues
```bash
npx playwright install --with-deps
```

### Clear Playwright cache
```bash
rm -rf ~/.cache/ms-playwright
```

## Contributing

1. Create a new branch for your feature
2. Write tests using the page object model pattern
3. Ensure all tests pass: `npm run test`
4. Lint and format: `npm run lint && npm run format`
5. Submit a pull request

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

MIT
