import { test as base, Page } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { BasePage } from '@pages/basePage';

type UIFixtures = {
  loginPage: LoginPage;
  basePage: BasePage;
};

export const test = base.extend<UIFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export { expect } from '@playwright/test';
