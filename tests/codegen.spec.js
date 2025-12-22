import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin', { delay: 1000 });
  await page.getByRole('textbox', { name: 'Password' }).fill('adin123', { delay: 2000 });
  await page.getByRole('button', { name: 'Login' }).click();
  expect(page).toHaveURL(/dashboard/);
});