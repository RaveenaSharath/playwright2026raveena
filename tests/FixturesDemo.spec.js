const {test, expect, request} = require('@playwright/test');
const {customTest} = require('../tests/Utils/fixtures.js')

customTest('fixtures demo', async ({authenticatedPage, createOrder})=>
{
    await authenticatedPage.goto('https://rahulshettyacademy.com/client')
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
    
})