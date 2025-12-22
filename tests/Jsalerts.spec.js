import { test, expect } from '@playwright/test';

test('Js alerts handling', async ({ page }) => {

    await page.goto('https://testpages.herokuapp.com/pages/basics/alerts-javascript/', { waitUntil: 'commit' });


    // await page.waitForTimeout(3000);
    // this is to confirm the alert is present because playwright handles alert accept automatically 
    page.on('dialog', async dialog => {
        expect(dialog.type() === 'alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
        //await page.waitForTimeout(3000);

    });

    await page.locator('#alertexamples').click();
});

test('Js confirm handling', async ({ page }) => {

    await page.goto('https://testpages.herokuapp.com/pages/basics/alerts-javascript/', { waitUntil: 'commit' });


    // await page.waitForTimeout(3000);
    // this is to confirm the alert is present because playwright handles alert accept automatically 
    page.on('dialog', async dialog => {
        expect(dialog.type() === 'confirm');
        expect(dialog.message()).toContain('I am a confirm alert');
        await dialog.dismiss();
        //await page.waitForTimeout(3000);

    });
    await page.locator('#confirmexample').click();
});

test('Js prompt handling', async ({ page }) => {

    await page.goto('https://testpages.herokuapp.com/pages/basics/alerts-javascript/', { waitUntil: 'commit' });


    // await page.waitForTimeout(3000);
    // this is to confirm the alert is present because playwright handles alert accept automatically , has to implement before clicking

    page.on('dialog', async dialog => {
        expect(dialog.type() === 'prompt');
        expect(dialog.message()).toContain('I prompt you');
        await dialog.accept('Karthik');

    });
    await page.locator('#promptexample').click();

});