declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production" | "test";
            AUTH_USER: string;
            AUTH_PASS: string;
            API_KEY: string;
        }
    }
}

export {};
