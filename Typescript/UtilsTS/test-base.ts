import { test as baseTest } from '@playwright/test';

interface TestDataForOrder {
  username: string;
  password: string;
  productName: string;
}

export const customtest = baseTest.extend<{ testDataforOrder: TestDataForOrder }>({
  testDataforOrder: {
    username: 'anshika@gmail.com',
    password: 'Iamking@000',
    productName: 'ZARA COAT 3',
  },
});