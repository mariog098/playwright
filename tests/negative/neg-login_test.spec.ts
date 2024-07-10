import { test } from "@playwright/test";
import { Constants } from "../../utility/cosntant";
import { Login } from "../../pages/onBoarding/loginpage";

test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseUrl);
})

test('Login with wrong password', async ({ page }) => {
    const login = new Login({ page });

    await login.inputUsername(Constants.username);
    await login.inputPassword('Utiwmzx23');
    await login.showPassword();
    await login.clickLogin();
    await page.screenshot({ path: 'screenshot.png' });
})

test('Login with wrong format email', async ({ page }) => {
    const login = new Login({ page });

    await login.inputUsername('email-wrong.com');
    await login.inputPassword(Constants.password);
    await login.showPassword();
    await login.clickLogin();
    await page.screenshot({ path: 'screenshot.png' });
})