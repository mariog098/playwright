import { test } from "../fixture/sauceLabs/login_fixture";
import { Applitools, SauceLabs } from "../utility/cosntant";
import sendTelegramNotification from '../utility/telegramNotification.ts';

export interface SlackConfig {
    webhookUrl: string;
    successMessage?: string;
    failedMessage?: string;
}

const config: SlackConfig = {
    webhookUrl: process.env.SLACK_WEBHOOK_URL || '',
    successMessage: process.env.SLACK_SUCCESS_MESSAGE || 'All tests passed',
    failedMessage: process.env.SLACK_FAILED_MESSAGE || 'Some tests failed'
};

test.afterAll(async ({ }) => {
    const message = 'Playwright tests completed!'; // Customize the message
    await sendTelegramNotification(message);
});

test.beforeEach(async ({ dashboardPage, loginPage }) => {
    await dashboardPage.goToDashboard(SauceLabs.baseUrl);
    await loginPage.loginUser(SauceLabs.username, SauceLabs.password);

    // await dashboardPage.goToDashboard(Applitools.baseUrl);
    // await loginPage.loginUser(Applitools.username, SauceLabs.password);

})