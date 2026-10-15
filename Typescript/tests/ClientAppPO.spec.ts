 import {test, expect}  from '@playwright/test';
 import{customtest} from '../UtilsTS/test-base';
 import {POManager} from '../PageObjects/POManager';

 //test.configure({mode: 'parallel'});

 const dataset = JSON.parse(JSON.stringify(require('../../Utils/placeorderTestData.json')));

for (const [index, data] of dataset.entries())
{
 test(`Client App login for ${data.productName} (${index + 1})`, async ({page})=>
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
   if (!orderId) {
     throw new Error('Order ID not found after placing the order');
   }
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   const orderIdFromHistory = await ordersHistoryPage.getOrderId();
   if (!orderIdFromHistory) {
     throw new Error('Order ID not found in order history');
   }
   expect(orderId.includes(orderIdFromHistory)).toBeTruthy();

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

 



 
