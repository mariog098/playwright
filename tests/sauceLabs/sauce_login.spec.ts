
import { expect, test } from "../../fixture/sauceLabs/login_fixture";
import { SauceLabs } from "../../utility/cosntant";

test.describe('Sauce Login', () => {
    test.beforeEach(async ({page, dashboardPage }) => {
        await dashboardPage.goToDashboard(SauceLabs.baseUrl);
        await expect(page.locator('form')).toBeVisible();
    })

    test('Login User Active', async ({ loginPage, page }) => {
        await loginPage.inputUsername(SauceLabs.username)
        await loginPage.inputPassword(SauceLabs.password)
        await loginPage.clickLogin();
        await expect(page.locator('#inventory_container').nth(1)).toBeVisible();
    })

    test('Login User - locked user', async ({ loginPage, page }) => {
        await loginPage.inputUsername('locked_out_user')
        await loginPage.inputPassword(SauceLabs.password)
        await loginPage.clickLogin();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    })

    test('Login User - problem user', async ({ loginPage, page }) => {
        await loginPage.inputUsername('problem_user')
        await loginPage.inputPassword(SauceLabs.password)
        await loginPage.clickLogin();
        await expect(page.locator('#item_0_img_link')).toBeEmpty();
    })
})