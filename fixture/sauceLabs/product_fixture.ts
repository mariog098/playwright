import { ProductPage, assertProductPage } from "../../pages/sauceLab/productPage";
import { test as baseTest  } from "@playwright/test";

type ProductFixture = {
    productPage: ProductPage;
    assertProductPage: assertProductPage;
}

export const test =  baseTest.extend<ProductFixture>({
    productPage : async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    assertProductPage : async ({ page }, use) => {
        await use(new assertProductPage(page))
    }
});