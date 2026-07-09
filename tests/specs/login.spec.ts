import { test, expect } from '@fixtures/uiFixtures';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto('/login');
  });

  test('should successfully login with valid credentials', async ({ loginPage }) => {
    await loginPage.login('user@example.com', 'password123');
    await loginPage.page.waitForNavigation();
    expect(loginPage.page.url()).toContain('/dashboard');
  });

  test('should display error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid@example.com', 'wrongpassword');
    const isErrorVisible = await loginPage.isErrorVisible();
    expect(isErrorVisible).toBeTruthy();
  });

  test('should display error message text', async ({ loginPage }) => {
    await loginPage.login('invalid@example.com', 'wrongpassword');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid credentials');
  });
});
