import {
    SignInAttemptRequest,
    SignInEmailCodeRequest,
    SignOutRequest,
    VanillaHttpRequest,
    HttpRequest,
    HttpAuthClient,
} from "./HttpClient";
import { AxiosResponse } from "axios";
import { HttpClientImpl } from "./HttpClientImpl";
import storage from "../storage";
import configRegister from "../../config/configRegister";

export default class HttpAuthClientImpl extends HttpClientImpl implements HttpAuthClient {
    private _baseUrl: string | undefined;

    constructor() {
        super();
        const baseUrl = storage.get(configRegister.getConfig().cookieNames.baseUrl);

        if (baseUrl) {
            this._baseUrl = baseUrl;
        }
    }

    setBaseUrl(url: string) {
        storage.save(configRegister.getConfig().cookieNames.baseUrl, url);
        this._baseUrl = url;
    }

    isSignedIn(): boolean {
        return storage.get(configRegister.getConfig().cookieNames.accessToken) !== null;
    }

    request<ResponseType>(data: VanillaHttpRequest): Promise<AxiosResponse<ResponseType>> {
        if (!data.headers) {
            data.headers = {};
        }

        if (data.headers.Authorization) {
            const token = storage.get(configRegister.getConfig().cookieNames.accessToken);

            if (token === null) {
                throw new Error("Token is not present");
            }

            data.headers.Authorization = token;
        }

        return super.request<ResponseType>(data);
    }

    signInAttempt(data: SignInAttemptRequest): Promise<boolean> {
        return Promise.resolve(false);
    }

    signInCompleteData<ResponseType>(data: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return Promise.resolve(undefined);
    }

    signInVerifyCode(data: SignInEmailCodeRequest): Promise<boolean> {
        return Promise.resolve(false);
    }

    signOut(data: SignOutRequest): Promise<boolean> {
        return Promise.resolve(false);
    }

    onSignOut = () => {
        storage.delete(configRegister.getConfig().cookieNames.accessToken);
        storage.delete(configRegister.getConfig().cookieNames.refreshToken);
    };

    afterSignOut = () => void 0;
}
