import { expect } from "@playwright/test";
import exp from "constants";
export class Homepage {
    page: any;
    icon: any;
    search_field: any;
    cart_btn: any;
    login_btn: any;
    registration_btn: any;
    search_btn: any;
    constructor({page}) {
        this.page = page;
        this.icon = page.locator('.header-with-search__logo-section');
        this.search_field = page.getByPlaceholder('Cari produk, merek dan toko');
        this.search_btn = page.getByRole('search').getByRole('button');
        this.cart_btn = page.locator('shopee-svg-icon navbar__link-icon icon-shopping-cart-2');
        this.login_btn = page.locator('btnHeaderLogin');
        this.registration_btn = page.locator('btnHeaderRegister');
    }

    async clickIcon() {
        await expect(this.icon).toBeVisible();
        // await this.icon.click();
    }

    async inputSearchField(keyword) {
        await expect(this.search_field).toBeVisible();
        await this.search_field.click();
        await this.search_field.fill(keyword);
    }

    async clickCardBtn() {
        await expect(this.cart_btn).toBeVisible();
        await this.cart_btn.click();
    }

}