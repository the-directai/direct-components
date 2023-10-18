/**
 * Class handles storage - cookies, and cookies consent.
 */
export interface CookiesHandler {
    /**
     * @returns {boolean} are cookies allowed
     */
    getConsent(): boolean;

    /**
     * saves if cookies are allowed.
     * warn: if u want to remove consent use resetAndClearCookies()
     * @param {boolean} isAllowed must be set to true to works properly.
     * @returns {void}
     */
    saveConsent(isAllowed: boolean): void;

    /**
     * Method resets all cookies - deletes it and removes consent.
     * @returns {void}
     */
    resetAndClearCookies(): void;

    /**
     * gets cookie value
     * @param {string} key cookie name
     * @returns {string | null} cookie value in string or null if it doesn't exists
     */
    get(key: string): string | null;

    /**
     * saves cookie
     * @param {string} key cookie name
     * @param {string} value cookie value (content)
     * @param {number} validDays number of days cookie will be valid
     * @returns {void}
     */
    save(key: string, value: string, validDays: number): void;
}
