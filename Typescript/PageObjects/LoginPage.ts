import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private email: Locator;
    private password: Locator;
    private signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signInButton = page.locator("input[type='submit']");
    }

    async goTo(): Promise<void> {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(username: string, password: string): Promise<void> {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}