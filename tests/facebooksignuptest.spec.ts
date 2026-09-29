//import{test} from "@playwright/test";
import { facebookSignUP } from "../pages/facebookSignUP.spac";
import { test } from "../fixture/test-fixture.spec";
import testData from "../test-data/testData.json";

test("facebook signup", async ({ facebookSignUP , page })=>{
 await page.goto("https://www.facebook.com/");

    //const signup = new facebookSignUP(page);

    await facebookSignUP.creareAccount();

    await facebookSignUP.signupUserInfo(testData.validUser.firstName, testData.validUser.lastName);

    await facebookSignUP.dateOfBirthDetails(testData.validUser.day, testData.validUser.month, testData.validUser.year);

    await facebookSignUP.selectGender(testData.validUser.gender);

    await facebookSignUP.enterMobileNumber(testData.validUser.mobile);

    await facebookSignUP.enterPassword(testData.validUser.password);

    await facebookSignUP.clickSubmit();

    await page.waitForTimeout(3000);

});