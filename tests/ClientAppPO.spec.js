 const {test, expect} = require('@playwright/test');
 const{customtest} = require('../Utils/test-base')
 const {POManager} = require('../pageobjects/POManager');

 test.configure({mode: 'parallel'});

 const dataset = JSON.parse(JSON.stringify(require('../Utils/placeorderTestData.json')));

for(const data of dataset)
{
 test(`Client App login for ${data.productName}`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username = "anshika@gmail.com";
     const password = "Iamking@000"
     const productName = 'Zara Coat 4';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username, data.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

 });
}

customtest('Client App login for ', async ({page, testDataforOrder})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username = "anshika@gmail.com";
     const password = "Iamking@000"
     const productName = 'Zara Coat 4';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(testDataforOrder.username, testDataforOrder.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(testDataforOrder.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataforOrder.productName);
    await cartPage.Checkout();
 }
)

 



 

