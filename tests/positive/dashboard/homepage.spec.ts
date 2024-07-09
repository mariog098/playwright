import { expect, test } from "@playwright/test";
import { Constants } from "../../../utility/cosntant";
import { Homepage } from "../../../pages/dashboard/homepage";

test.beforeEach(async ({ page }) => {
    await page.goto(Constants.baseUrl);
})

test('Search product', async ({ page }) => {
    const dashboard = new Homepage({ page });
    await expect(page.getByPlaceholder('Cari produk, merek dan toko')).toBeVisible();
    await dashboard.inputSearchField('laptop');
    // await dashboard.inputSearchField('laptop');
    await page.pause();
})