import test, {Page, Locator, expect} from "@playwright/test";

export class facebookSignUP{

    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly createAccount:Locator;
    readonly date:Locator;
    readonly month:Locator;
    readonly year:Locator;
    readonly gender:Locator;
    //readonly mobile:Locator;
    readonly password:Locator;

    constructor (page:Page){
        this.page=page;

        this.createAccount=  page.locator("//a[@aria-label='Create new account']");
        this.firstName = page.locator("//label[text()='First name']");
        this.lastName =page.locator("//label[text()='Surname']");
        this.date=page.locator("//div[@aria-label='Select day']");
        this.month =page.locator("//div[@aria-label='Select month']");
        this.year=page.locator("//div[@aria-label='Select year']");
        this.gender =page.locator("//span[text()='Select your gender']//parent::div");
        this.password=page.getByLabel("Password");



    }

    async creareAccount(){
        await this.page.waitForTimeout(2000);
         await this.createAccount.click();
    }

    async signupUserInfo(firstname:string,surname: string){
        await this.firstName.fill(firstname);
        await this.lastName.fill(surname);
    }

    async dateOfBirthDetails(day:string,month:string,year:string){
    await this.date.click();
    await this.page.getByText(day, { exact: true }).click();

    await this.month.click();
    await this.page.getByText(month, { exact: true }).click();

    await this.year.click();
    await this.page.getByText(year, { exact: true }).click();
    }

    async selectGender(genter:string){
        await this.gender.click();
        await this.page.getByText(genter,{exact:true}).click();

    }

    async enterMobileNumber(mobile:string){
        await this.page.getByLabel("Mobile number or email address").fill(mobile);
    }

    async enterPassword(password:string){
        await this.password.fill(password);
    }
  
    async clickSubmit(){
        await this.page.getByRole('button',{name:'Submit'}).click();
    }

}