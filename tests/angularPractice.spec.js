import{test, expect} from '@playwright/test'

test('playwright special locators', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Raveena@2026");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await expect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 7000});
    await page.getByRole("link", {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();
}
);

test('playwright special locators test level', async({page})=>
{
    const slowExpect = expect.configure({timeout: 9000});
    page.setDefaultTimeout(9000);
    test.setTimeout(6000);
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Raveena@2026");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await slowExpect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", {name: "Shop"}).click();
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();
}
);