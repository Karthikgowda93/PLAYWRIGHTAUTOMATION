import { test, expect } from '@playwright/test';

test('Dropdown test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator('#state').selectOption('Kerala');
    //await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({ label: 'Karnataka' });
    //await page.waitForTimeout(3000);
    // select by value
    await page.locator('#state').selectOption({ value: 'Goa' });
    //await page.waitForTimeout(2000);
    // select by index
    await page.locator('#state').selectOption({ index: 2 });
    // await page.waitForTimeout(2000);

    // if you do not add await then the promise won't be resolved and the error will get thrown
    /*
    const text = await page.locator('#state').textContent();
    //await expect(text).toContain('Goa');
    console.log('The selected value is: ' + text);
    expect(text.includes('Goa')).toBeTruthy();
    */

    // Select dropdown based on for loop
    let element = await page.locator('#state');
    // getting all the options under select tag
    let options = await element.locator('option').all();
    let flag = false;
    for (let k = 0; k < options.length; k++) {

        let state = options[k];
        let name = await state.textContent();
        console.log('State name is: ' + name);
        if (name === 'Karnataka') {

            flag = true;
            break;
        }

    }
    expect(flag).toBeTruthy();

    // selecting multiple option in dropdown
    await page.locator('#hobbies').selectOption(['Dancing', 'Singing']);
    await page.waitForTimeout(3000);

});