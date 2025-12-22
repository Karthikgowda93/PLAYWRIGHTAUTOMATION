import { test, expect } from '@playwright/test';

test('Sample test case 1', async ({ page }) => {

    expect(20).toBe(20);
});

test.skip('Sample test case 2', async ({ page }) => {
    expect(20).toBe(20);
});

test('Sample test case 3', async ({ page }) => {
    expect('karthik').toEqual('karthik');
    expect('karthik Gowda'.includes('Gowda')).toBeTruthy();

});