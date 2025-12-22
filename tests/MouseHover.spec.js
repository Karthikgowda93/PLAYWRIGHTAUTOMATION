import { test, expect } from '@playwright/test';

test('Mouse hover test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByPlaceholder('Enter Email').fill('admin@email.com');
    await page.getByPlaceholder('Enter Password').fill('admin@123');
    //  await page.locator("//button[contains(text(),'Sign in')]").click();
    // or
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator("//span[text() ='Manage']").hover();
    await page.getByAltText("manage category").click();
    await page.waitForTimeout(3000);

});