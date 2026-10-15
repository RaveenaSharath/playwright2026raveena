const base = require('@playwright/test');

exports.customtest = base.test.extend({
testDataforOrder: 
{
    username: "anshika@gmail.com",
    password: "Iamking@000",
    productName: "ZARA COAT 3"
}

})