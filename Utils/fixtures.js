const base = require('@playwright/test')
const APiUtils = require('../Utils/APiUtils.js')
const {request} = require('@playwright/test');

const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};

exports.customTest = base.test.extend(
{

    authenticatedPage: async({browser}, use)=>
    {
    const email = "kraveena228@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Raveena@2026");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    await use(page);
    },

    createOrder: async({}, use)=>
    {
        const apiContext = await request.newContext();
        const apiUtils = new APiUtils(apiContext,loginPayLoad);
        const response =  await apiUtils.createOrder(orderPayLoad);
        await use(response);
    }
}
)
