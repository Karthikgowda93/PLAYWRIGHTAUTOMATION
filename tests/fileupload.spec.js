import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload'); // Replace with your target URL

    // Set the file input and upload a file
    await page.locator('#file-upload').setInputFiles('./Uploads/testfile.jpg');

    //await page.locator('#file-submit').click();
    //expect(await page.locator('//h3')).toHaveText('File Uploaded!');

    await page.waitForTimeout(3000);
    // to remove the file from the input
    await page.locator('#file-upload').setInputFiles([]);
    await page.waitForTimeout(3000);

    // Optionally, verify the file was uploaded
    //await expect(page.locator('text=file.txt')).toBeVisible();
});