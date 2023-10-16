const CONSENT_COOKIE = "cookies-consent";

export class CookiesHandler {
    public getConsent(): boolean {
        return this.get(CONSENT_COOKIE) === "true";
    }

    public saveConsent() {
        const d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = CONSENT_COOKIE + "=" + "true" + ";" + expires + ";path=/";
    }

    public resetAndClearCookies() {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    public get(key: string): string | null {
        const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
        if (match) {
            return match[2];
        } else {
            return null;
        }
    }

    public save(key: string, value: string): void {
        if (!this.getConsent()) {
            throw new Error("Cookie consent is required to save cookies.");
        }

        const d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
}
