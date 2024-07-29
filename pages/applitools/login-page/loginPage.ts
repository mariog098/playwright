import {Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username_field: any;
    readonly password_field: any;
    readonly signIn_btn: any;
    readonly remeber_chklist: any;
    readonly twitterP_btn: any;
    readonly facebokok_btn: any;
    constructor(page: Page) {
        this.page = page;
        this.username_field = page.getByPlaceholder('Enter your username');
        this.password_field = page.getByPlaceholder('Enter your password');
        this.signIn_btn = page.getByRole('link', { name: 'Sign in' });
        this.remeber_chklist = page.getByText('Remember Me');
        this.twitterP_btn = page.getByRole('link').nth(2);
        this.facebokok_btn = page.getByRole('link').nth(3);
    }
    async inputUsername(username: string) {
        await this.username_field.fill(username);
    }
    async inputPassword(password: string) {
        await this.password_field.fill(password);
    }
    async clickLogin() {
        await this.signIn_btn.click();
    }
    async clickRemeberMe() {
        await this.remeber_chklist.check();
    }
    async loginUser(username: string, password: string) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLogin();
    }   
}