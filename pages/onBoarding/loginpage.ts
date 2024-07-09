import { expect } from "playwright/test";

export class Login{
    page: any;
    username: any;
    password: any;
    forgetPwd_btn: any;
    logInPhone_btn: any;
    facebook_btn: any;
    google_btn: any;
    showPwd_btn: any;
    login_btn: any;
    constructor({page}) {
        this.page = page;
        this.username = page.getByPlaceholder('No. Handphone/Username/Email');
        this.password = page.getByPlaceholder('Password');
        this.showPwd_btn = page.getByRole('button').nth(1);
        this.forgetPwd_btn = page.getByRole('link', { name: 'Lupa Password' });
        this.login_btn = page.getByRole('button', { name: 'Log in' })
        this.logInPhone_btn = page.getByRole('link', { name: 'Log in dengan no. handphone' });
        this.facebook_btn = page.getByRole('button', { name: 'Facebook' });
        this.google_btn = page.getByRole('button', { name: 'Google' });
    }

    async inputUsername(username: string) {
        await expect(this.username).toBeVisible();
        await this.username.click();
        await this.username.fill(username);
    }
    async inputPassword(password: string) {
        await expect(this.password).toBeVisible();
        await this.password.click();
        await this.password.fill(password);
    }

    async showPassword() {
        await expect(this.showPwd_btn).toBeVisible();
        await this.showPwd_btn.click();
    }

    async clickLogin() {
        await expect(this.login_btn).toBeVisible();
        await this.login_btn.click();
    }

    async clickLogInPhone() {
        await expect(this.logInPhone_btn).toBeVisible();
        await this.logInPhone_btn.click();
    }
}