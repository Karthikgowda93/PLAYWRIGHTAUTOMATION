import { test, expect, chromium } from '@playwright/test';

test('Google title', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).toBe('Google');
});

test('Incognito example', async ({ }) => {

    // Run browser in incognito mode and have to remove 'page' inside async ialog above
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com');
    const url = page.url();
    // expect(url).toBe(url);
    const title = await page.title();
    console.log('The Title is ' + title);
    await expect(page).toHaveTitle('Google');



});