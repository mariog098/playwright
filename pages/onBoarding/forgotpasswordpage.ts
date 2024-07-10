export class ForgotPwd{
    page: any;
    username: any;
    back_btn: any;
    continue_btn: any;
    help_btn: any;
    constructor(page){ 
        this.page = page;
        this.username = page.getByPlaceholder('Email/No. Telp');
        this.back_btn = page.getByRole('button').nth(1);
        this.continue_btn = page.getByRole('button',{name:'Berikutnya'}).nth(2);
        this.help_btn = page.getByRole('link', { name: 'Butuh bantuan' });



    }
}