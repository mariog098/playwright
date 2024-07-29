import { LoginPage } from "../../pages/applitools/login-page/loginPage"
import {test as base} from '@playwright/test'


type LoginFxiture = {
    loginPage : LoginPage
}

export const test = base.extend<LoginFxiture>({loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
}})