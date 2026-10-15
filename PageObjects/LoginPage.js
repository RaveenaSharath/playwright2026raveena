class LoginPage {
    constructor(page) {
        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signInButton = page.locator("input[type='submit']");
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(username, password) {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}

module.exports = { LoginPage };