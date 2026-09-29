import {test as base } from "@playwright/test";
import { facebookSignUP } from "../pages/facebookSignUP.spac";

type MyFixture={
    facebookSignUP:facebookSignUP;
};

export const test=base.extend<MyFixture>({
    facebookSignUP : async ({page},use)=>{
        await use(new facebookSignUP(page));
    }
})