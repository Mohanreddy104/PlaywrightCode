import dotenv from "dotenv";

dotenv.config();

type Environment = "QA" | "STG" | "UAT";

const environment = (process.env.ENV || "QA") as Environment;

const config = {
    QA: {
        baseURL: process.env.QA_BASE_URL!,
        // username: process.env.QA_USERNAME!,
        // password: process.env.QA_PASSWORD!
    },

    STG: {
        baseURL: process.env.STG_BASE_URL!,
        // username: process.env.STG_USERNAME!,
        // password: process.env.STG_PASSWORD!
    },

    UAT: {
        baseURL: process.env.UAT_BASE_URL!,
        // username: process.env.UAT_USERNAME!,
        // password: process.env.UAT_PASSWORD!
    }
};

export const environmentConfig = config[environment];