import { test as base } from "@playwright/test";
import { DashbordSauce, LoginSauce } from "../../pages/sauceLab/loginPage";
import { SauceLabs } from "../../utility/cosntant";
export { expect } from "@playwright/test";

type DashboardFixture = {
    dashboardPage: DashbordSauce
    loginPage: LoginSauce
};

export const test = base.extend<DashboardFixture>({
    dashboardPage: async ({ page }, use) => {
        await use(new DashbordSauce(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginSauce(page))
        const login = new LoginSauce(page)
        await login.inputUsername(SauceLabs.username)
        await login.inputPassword(SauceLabs.password)
        await login.clickLogin();
    }
})