import { DirectComponentsConfig } from "./config";

const defaultConfig: DirectComponentsConfig = {
    cookieNames: {
        accessToken: "dc-token",
        refreshToken: "dc-refresh-token",
        userInitialized: "dc-user-initialized",
        cookiesConsent: "dc-cookies-consent",
        baseUrl: "dc-base-url",
        refreshSessionUrl: "dc-refresh-session-url",
    },
};

export default defaultConfig;
