const { test, expect } = require('@playwright/test');
let webContext;
 
test.beforeAll(async ({browser})=>
{
   const email = "kraveena228@gmail.com";
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Raveena@2026");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({path: 'state.json'});
   webContext= await browser.newContext({storageState: 'state.jsom'});

})

test('@Webst Client App login', async () => {
   //js file- Login js, DashboardPage
   const email = "kraveena228@gmail.com";
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
    }
   })