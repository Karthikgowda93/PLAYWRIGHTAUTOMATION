import { test, expect } from '@playwright/test';

test('Iframe handling test', async ({ page }) => {

    await page.goto('https://docs.oracle.com/javase/8/docs/api/');

    const framele = await page.frameLocator('//frame[@title="All Packages"]');
    await framele.locator('//a[text()="java.applet"]').click();

    await page.pause();

    const secondframe = await page.frameLocator('//frame[@name="packageFrame"]');
    await secondframe.locator('//span[text()="AppletStub"]').click();
    //await page.pause();
    const thirdframe = await page.frameLocator('//frame[@name="classFrame"]');
    const title = await thirdframe.locator('//h2[@class="title"]').textContent();
    console.log("Title is: " + title);
    expect(title).toContain('Interface AppletStub');


});