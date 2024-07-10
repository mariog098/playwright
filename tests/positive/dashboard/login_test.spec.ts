import { expect, test } from "@playwright/test";
import { Constants } from "../../../utility/cosntant";
import { Login } from "../../../pages/onBoarding/loginpage";

test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseUrl);
})

test('Login User', async ({ page }) => {
    const login = new Login({ page });
    await login.inputUsername(Constants.username);
    await login.inputPassword(Constants.password);
    await login.showPassword();
    await login.clickLogin();

})

test('Forgot password', async ({ page }) => {
    const login = new Login({ page });
    await login.clickForgotPassword();
    await expect(page.locator('text=Reset Password').getByText('Reset Password')).toBeVisible();
})

test('Login using phone number', async ({ page }) => {
    const login = new Login({ page });

    await login.clickLogInPhone();
})

