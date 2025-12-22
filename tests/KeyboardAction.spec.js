import { test, expect } from '@playwright/test';

test('Keyboard actions', async ({ page }) => {

    await page.goto('https://www.google.com/', { waitUntil: 'commit' });

    await page.locator('textarea[name="q"]').fill('Playwright Automation!');

    // await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.down('Shift');

    for (let k = 0; k < 'Automation'.length; k++) {

        await page.keyboard.press('ArrowLeft');

    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
});

test.only('Keyboard actions - seacrh and select options', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator('textarea[name="q"]').fill('Virat');

    await page.waitForSelector('//ul[@role="listbox"]');
    const elements = await page.locator('//ul[@role="listbox"]').all(); // to return al matching elements

    for (let k = 0; k < elements.length; k++) {

        let text = await elements[k].textContent();
        //console.log(text);
        if (text.includes('Kohli')) {

            await elements[k].click();
            break;

        }
    }
    await page.waitForTimeout(8000);


});