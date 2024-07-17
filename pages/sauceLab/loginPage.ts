import { Locator, Page } from "@playwright/test";

export class LoginSauce {
    username: any;
    password: any;
    loginBtn: any;
    readonly page: Page;
    constructor(page:Page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
    }
    async inputUsername(username: string) {
        await this.username.fill(username);
    }
    async inputPassword(password: string) {
        await this.password.fill(password);
    }
    async clickLogin() {
        await this.loginBtn.click();
    }
}

export class DashbordSauce {
    readonly page: Page;
    readonly $homeDashboard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$homeDashboard = page.locator('.header-with-search__logo-section');
    }
    async goToDashboard(baseURL:string) {
        await this.page.goto(baseURL);
    }
}