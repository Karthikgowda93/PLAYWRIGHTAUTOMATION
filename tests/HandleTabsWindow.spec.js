import { test, expect } from '@playwright/test';

test('Handle tabs and windows test', async ({ browser, context }) => {

    const page = await context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/login', { waitUntil: 'commit' });

    // Promise will return array of pages opened when a new page is opened
    const [newpage] = await Promise.all
        (
            [
                context.waitForEvent('page'), // waiting for new page to open
                page.locator('(//a[contains(@href,"facebook")])[1]').click() // no semicolon needed because of Promise.all

            ]
        );

    await newpage.locator('//form[@id="login_popup_cta_form"]//input[@name="email"]').fill('email@gmail.com');
    await page.waitForTimeout(3000);
    await newpage.close();
    await page.locator('//input[@id="email1"]').fill('admin@email.com');
    await page.waitForTimeout(3000);

});