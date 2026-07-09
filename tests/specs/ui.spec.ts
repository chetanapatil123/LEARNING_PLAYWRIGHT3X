import { test, expect } from '@fixtures/uiFixtures';

test.describe('UI Component Tests', () => {
  test('should check page title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should perform basic navigation', async ({ basePage, page }) => {
    await basePage.goto('/');
    expect(page.url()).toContain(page.context().baseURL);
  });

  test('should take screenshot', async ({ basePage }) => {
    await basePage.goto('/');
    await basePage.takeScreenshot('homepage');
  });
});
