import { test as base } from "@playwright/test";
import { DashbordSauce, LoginSauce } from "../../pages/sauceLab/loginPage";
export { expect } from "@playwright/test"

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
    }
})