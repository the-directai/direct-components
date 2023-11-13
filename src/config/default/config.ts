export type CookiesConfig = {
    accessToken: string;
    refreshToken: string;
    userInitialized: string;
    cookiesConsent: string;
    baseUrl: string;
    refreshSessionUrl: string;
};

export type DirectComponentsConfig = {
    cookieNames: CookiesConfig;
};

export default DirectComponentsConfig;
