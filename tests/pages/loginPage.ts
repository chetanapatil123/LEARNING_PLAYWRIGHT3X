import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly emailInput = () => this.page.locator('input[type="email"]');
  readonly passwordInput = () => this.page.locator('input[type="password"]');
  readonly submitButton = () => this.page.locator('button:has-text("Login")');
  readonly errorMessage = () => this.page.locator('[data-testid="error-message"]');

  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password: string) {
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.submitButton().click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage().textContent() || '';
  }

  async isErrorVisible(): Promise<boolean> {
    return await this.errorMessage().isVisible();
  }
}
