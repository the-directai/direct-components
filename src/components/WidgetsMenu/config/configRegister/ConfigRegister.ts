import { DirectComponentsConfig } from "../default";
import storage from "../../../../infra/storage";
import defaultConfig from "../default/defaultConfig";

const CONFIG_COOKIE = "dc-library-config";

/**
 * registers new config and returns actual
 */
export class ConfigRegister {
    private _config: DirectComponentsConfig | undefined;

    /**
     * registers new config and saves it to cookies
     * @param {DirectComponentsConfig} config library config
     * @returns {void}
     */
    public registerAndSave(config: DirectComponentsConfig): void {
        storage.save(CONFIG_COOKIE, JSON.stringify(config));
        this._config = config;
    }

    /**
     * returns saved config from cookie or attribute
     * @returns {DirectComponentsConfig} actual config
     */
    public getConfig(): DirectComponentsConfig {
        // gets from local attribute
        if (this._config !== undefined) {
            return this._config;
        }

        // loads and gets from cookies
        const savedConfig = this.loadConfig();

        if (savedConfig !== undefined) {
            this._config = savedConfig;
            return this._config;
        }

        // returns default if custom does not exist
        return defaultConfig;
    }

    /**
     * loads and returns config or undefined if not available
     * @private
     * @returns {DirectComponentsConfig | undefined}
     */
    private loadConfig(): DirectComponentsConfig | undefined {
        const configCookie = storage.get(CONFIG_COOKIE);

        if (configCookie !== null) {
            try {
                // cast and return
                return JSON.parse(configCookie) as DirectComponentsConfig;
            } catch (e) {
                // remove to make sure cookie is clean
                storage.delete(CONFIG_COOKIE);
            }
        }
    }
}
