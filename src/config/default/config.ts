export type CookiesConfig = {
    accessToken: string;
    refreshToken: string;
    cookiesConsent: string;
    baseUrl: string;
};

export type DirectComponentsConfig = {
    cookieNames: CookiesConfig;
};

export default DirectComponentsConfig;
