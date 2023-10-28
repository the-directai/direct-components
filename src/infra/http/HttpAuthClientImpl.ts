import {
    SignInAttemptRequest,
    SignInEmailCodeRequest,
    SignOutRequest,
    VanillaHttpRequest,
    HttpRequest,
    HttpAuthClient,
    SignInEmailCodeResponse,
    DirectStatusResponse,
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
        const defaultCheckSuccess = (response: AxiosResponse): boolean => {
            return response.status === 200 || response.status === 204;
        };

        if (data.method === undefined) {
            data.method = "POST";
        }

        return this.request(data as VanillaHttpRequest).then((response) => {
            if (data.checkSuccess) {
                return data.checkSuccess(response);
            } else {
                return defaultCheckSuccess(response);
            }
        });
    }

    signInCompleteData<ResponseType>(data: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return Promise.resolve(undefined); //todo
    }

    // todo return types
    signInVerifyCode(data: SignInEmailCodeRequest): Promise<DirectStatusResponse> {
        if (data.method === undefined) {
            data.method = "POST";
        }

        return this.request(data as VanillaHttpRequest).then((response) => {
            const returnHandler = (status: boolean) => {
                return {
                    succeed: status,
                    response: response,
                } as DirectStatusResponse;
            };

            if (data.transformResponse) {
                try {
                    const transformedResponse = data.transformResponse(response);

                    this.saveSuccessfulSignIn(transformedResponse);

                    return returnHandler(true);
                } catch (e) {
                    return returnHandler(false);
                }
            }

            try {
                const typedResponse = response.data as SignInEmailCodeResponse;

                this.saveSuccessfulSignIn(typedResponse);

                return returnHandler(true);
            } catch (e) {
                return returnHandler(false);
            }
        });
    }

    private saveSuccessfulSignIn(data: SignInEmailCodeResponse) {
        storage.save(configRegister.getConfig().cookieNames.accessToken, data.accessToken);
        storage.save(configRegister.getConfig().cookieNames.refreshToken, data.refreshToken);

        if (data.initialized) {
            storage.save(configRegister.getConfig().cookieNames.userInitialized, data.initialized);
        }
    }

    signOut(data: SignOutRequest): Promise<boolean> {
        const defaultCheckSuccess = (response: AxiosResponse) => {
            return response.status === 200 || response.status === 204;
        };

        if (data.method === undefined) {
            data.method = "POST";
        }

        return this.request(data as VanillaHttpRequest).then((response) => {
            let success;

            if (data.checkSuccess) {
                success = data.checkSuccess(response);
            } else {
                success = defaultCheckSuccess(response);
            }

            if (!success) {
                return false;
            }

            this.onSignOut();
            this.afterSignOut();

            return true;
        });
    }

    onSignOut = () => {
        storage.delete(configRegister.getConfig().cookieNames.accessToken);
        storage.delete(configRegister.getConfig().cookieNames.refreshToken);
        storage.delete(configRegister.getConfig().cookieNames.userInitialized);
    };

    afterSignOut = () => void 0;
}
