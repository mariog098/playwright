import { test } from "@playwright/test";
import { Constants } from "../../utility/cosntant";
import { Login } from "../../pages/onBoarding/loginpage";

test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseUrl);
})

test('Login User', async ({ page }) => {
    const login = new Login({ page });
    await login.inputUsername('cemphes@gmail.com');
    await login.inputPassword('Utiwmzx2');
    await login.showPassword();
    await login.clickLogin();

})

test('Forgot password', async ({ page }) => {
    const login = new Login({ page });
    await login.clickForgotPassword();
})

test('Login using phone number', async ({ page }) => {
    const login = new Login({ page });

    await login.clickLogInPhone();
})