import { CookiesHandler } from "./CookiesHandler";
import configRegister from "../../config/configRegister";

export class CookiesHandlerImpl implements CookiesHandler {
    public getConsent(): boolean {
        return this.get(configRegister.getConfig().cookieNames.cookiesConsent) === "true";
    }

    public saveConsent(isAllowed: boolean): void {
        // throws if argument is not set to true
        if (!isAllowed) {
            throw new Error(
                "An argument isAllowed must be set to true to set consent. If you want to remove consent use resetAndClearCookies()",
            );
        }

        // set date to 365, later used to cookie expiration date
        const d = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();

        //saves cookie
        document.cookie =
            configRegister.getConfig().cookieNames.cookiesConsent + "=" + "true" + ";" + expires + ";path=/";
    }

    public resetAndClearCookies(): void {
        // get all cookies as an array
        const cookies = document.cookie.split(";");

        // for each cookie set date to some past date (delete it)
        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    public get(key: string): string | null {
        // match (get if exists)
        const match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));

        // if found return it or return null if didn't
        if (match) {
            return match[2] || null;
        } else {
            return null;
        }
    }

    public save(key: string, value: string, validDays = 365): void {
        // if it's not allowed to used cookies throws
        if (!this.getConsent()) {
            throw new Error("Cookie consent is required to save cookies.");
        }

        // sets expiration date
        const d = new Date();
        d.setTime(d.getTime() + validDays * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();

        // saves cookie
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }

    public delete(key: string): void {
        document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
