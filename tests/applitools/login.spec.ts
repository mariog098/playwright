import { expect } from "@playwright/test";
import {test} from "../../fixture/applitools/login-fixture";
import { Applitools } from "../../utility/cosntant";


test.beforeEach(async ({ page }) => {
    await page.goto(Applitools.baseUrl);
    await expect(page.getByRole('heading', { name: 'Login Form' })).toBeVisible();
})

test.describe('Login', () => {
    test('Login User', async ({ loginPage }) => {
        await loginPage.inputUsername(Applitools.username);
        await loginPage.inputPassword(Applitools.password);
        await loginPage.clickLogin();
    })
})

