import { SauceLabs } from "../../utility/cosntant";
import { assertProductPage, ProductPage } from "../../pages/sauceLab/productPage";
import { test } from "../../fixture/sauceLabs/product_fixture";

test.describe('Sauce Product', () => {

    test('Click cart button', async ({ productPage }) => {
        await productPage.clickCart_btn();
    })
    test('Click deail product button', async ({ productPage, assertProductPage, page }) => {
        await productPage.setDetailProductButton("Sauce Labs Backpack");
        await productPage.clickDetailProduct_btn();
        await assertProductPage.assertDetailProduct();
        await page.pause();
    })
})