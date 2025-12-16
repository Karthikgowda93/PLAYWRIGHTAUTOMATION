//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('should search on Google', async ({ page }) => {
    // Navigate to Google
    await page.goto('https://www.orangehrm.com');

    // Fill in the search box
    await page.locator('#navbarNav').getByRole('button', { name: 'Contact Sales' }).click();

    // Wait for results and verify
    const test = page.getByRole('textbox', { name: 'Full Name' });
    await test.waitFor();
    const results = await page.getByRole('textbox', { name: 'Full Name' }).count();
    expect(results).toBeGreaterThan(0);
});