import { test, expect } from '@playwright/test';


test('Login page title', async ({ page }) => {


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin', { delay: 1000 });
    await page.locator('//input[@name="password"]').fill('admin123', { delay: 1000 });
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(3000);

    //await expect(page).toHaveURL(/dashboard/);

    await page.locator('//img[@class="oxd-userdropdown-img"]').click();
    await page.getByText('Logout').click();

    // await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/login/);
});

test('Invalid Login test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin', { delay: 1000 });
    await page.locator('//input[@name="password"]').fill('admin12', { delay: 1000 });
    await page.getByRole('button', { name: 'Login' }).click();
    const errormessage = await page.locator("//p[contains(@class,'alert-content')]").textContent({ delay: 1000 });
    console.log("Error message is: " + errormessage);
    expect(errormessage.includes('Invalid')).toBeTruthy();

    //expect.soft(errormessage).toContain('Invalid');
    //expect(errormessage === 'Invalid credentials').toBeTruthy();

    /*
       To maximize the window in playwright use viewport option and set it under package.config.js
       If particular test needs to run in different width and height then use test.use option as top of this test file.
    */

});