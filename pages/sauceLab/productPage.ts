import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page
    readonly burgerMenu: any;
    readonly cart_btn: any;
    readonly sort_btn: any;
    readonly addToCart_btn: any;
    detailProduct_btn: Locator;


    constructor(page: Page) {
        this.page = page
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.cart_btn = page.locator('#shopping_cart_container').getByRole('link')
        this.sort_btn = page.locator('.product_sort_container')
        this.addToCart_btn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    setDetailProductButton(productName: string) {
        this.detailProduct_btn = this.page.getByRole('link', { name: productName });
    }

    async clickCart_btn() {
        await this.cart_btn.click()
    }

    async clickBurberg_btn() {
        await this.burgerMenu.click()
    }

    async clickDetailProduct_btn() {
        await this.detailProduct_btn.click()
    }
}

export class assertProductPage {
    readonly page: Page
    readonly assert_detail_product: any

    constructor(page: Page) {
        this.page = page
        this.assert_detail_product = page.getByRole('img')
    }

    async assertDetailProduct() {
        await expect(this.assert_detail_product).toBeVisible()
    }

}
