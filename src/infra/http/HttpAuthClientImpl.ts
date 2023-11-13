import {
    SignInAttemptRequest,
    SignInEmailCodeRequest,
    SignOutRequest,
    VanillaHttpRequest,
    HttpAuthClient,
    SignInEmailCodeResponse,
    DirectStatusResponse,
    SignInCompleteDataRequest,
    SignInCompleteDataResponse,
    HttpRequest,
    RefreshSessionRequest,
    RefreshSessionResponse,
} from "./HttpClient";
import { AxiosResponse } from "axios";
import { HttpClientImpl } from "./HttpClientImpl";
import storage from "../storage";
import configRegister from "../../config/configRegister";

export default class HttpAuthClientImpl extends HttpClientImpl implements HttpAuthClient {
    private _baseUrl: string | undefined;
    private _refreshSessionUrl: string | undefined;

    constructor() {
        super();

        // if config is set loads it to memory
        this._baseUrl = storage.get(configRegister.getConfig().cookieNames.baseUrl) ?? undefined;
        this._refreshSessionUrl = storage.get(configRegister.getConfig().cookieNames.refreshSessionUrl) ?? undefined;
    }

    setBaseUrl(url: string) {
        storage.save(configRegister.getConfig().cookieNames.baseUrl, url);
        this._baseUrl = url;
    }

    private buildUrl(path: string): string {
        if (!this._baseUrl) {
            return path;
        }

        if (this._baseUrl.endsWith("/")) {
            this._baseUrl = this._baseUrl.slice(0, -1);
            return this.buildUrl(path);
        }

        if (!path.startsWith("/")) {
            path = "/" + path;
        }

        return this._baseUrl + path;
    }

    setRefreshSessionUrl(url: string, addBaseUrl = false) {
        if (addBaseUrl) {
            url = this.buildUrl(url);
        }

        storage.save(configRegister.getConfig().cookieNames.refreshSessionUrl, url);

        this._refreshSessionUrl = url;
    }

    get baseUrl() {
        return this._baseUrl;
    }

    get refreshSessionUrl() {
        return this._refreshSessionUrl;
    }

    isSignedIn(): boolean {
        return storage.get(configRegister.getConfig().cookieNames.accessToken) !== null;
    }

    isInitialized(): boolean {
        return storage.get(configRegister.getConfig().cookieNames.userInitialized) === "true";
    }

    get<ResponseType = unknown>({
        url,
        params = undefined,
        headers = undefined,
    }: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return this.request({
            method: "GET",
            url: url,
            params,
            headers,
        });
    }

    post<ResponseType = unknown>({
        url,
        params = undefined,
        headers = undefined,
    }: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return this.request({
            method: "POST",
            url: url,
            params,
            headers,
        });
    }

    put<ResponseType = unknown>({
        url,
        params = undefined,
        headers = undefined,
    }: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return this.request({
            method: "PUT",
            url: url,
            params,
            headers,
        });
    }

    delete<ResponseType = unknown>({
        url,
        params = undefined,
        headers = undefined,
    }: HttpRequest): Promise<AxiosResponse<ResponseType>> {
        return this.request({
            method: "DELETE",
            url: url,
            params,
            headers,
        });
    }

    request<ResponseType>(data: VanillaHttpRequest): Promise<AxiosResponse<ResponseType>> {
        // if headers empty makes it empty object
        if (!data.headers) {
            data.headers = {};
        }

        // if Authorization header does not exist gets token and sets it to this header
        if (!data.headers.Authorization) {
            const token = storage.get(configRegister.getConfig().cookieNames.accessToken);

            if (token === null) {
                throw new Error("User is not signed in.");
            }

            data.headers.Authorization = token;
        }

        return super
            .request<ResponseType>(data)
            .then((response) => {
                return response;
            })
            .catch(async (error) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (error.response && error.response.status === 401) {
                    if (storage.get(configRegister.getConfig().cookieNames.refreshToken) !== null) {
                        if (this._refreshSessionUrl) {
                            // todo handle remove token after fails
                            const refreshResponse = await this.refreshSession({ url: this._refreshSessionUrl });
                            if (refreshResponse.succeed) {
                                return super.request<ResponseType>(data);
                            }
                        } else {
                            console.warn("Url refresh session is not set. Unauthorized.");
                        }
                    }

                    this.handleSignOut();
                }

                throw error;
            });
    }

    signInAttempt<ResponseType = unknown>(data: SignInAttemptRequest): Promise<DirectStatusResponse<ResponseType>> {
        // function to define if request was successful
        const defaultCheckSuccess = (response: AxiosResponse): boolean => {
            return response.status === 200 || response.status === 204;
        };

        // sets post as default
        if (data.method === undefined) {
            data.method = "POST";
        }

        // makes request and returns success status and response
        return super.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
            let succeed: boolean;

            if (data.checkSuccess) {
                succeed = data.checkSuccess(response);
            } else {
                succeed = defaultCheckSuccess(response);
            }

            return this.returnDirectResponseHandler(succeed, response);
        });
    }

    signInCompleteData<ResponseType = SignInCompleteDataResponse>(
        data: SignInCompleteDataRequest,
    ): Promise<DirectStatusResponse<ResponseType>> {
        const defaultCheckSuccess = (response: AxiosResponse): boolean => {
            return response.status === 200 || response.status === 204;
        };

        if (data.method === undefined) {
            data.method = "POST";
        }

        return this.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
            let body: SignInCompleteDataResponse;

            if (data.transformResponse) {
                body = data.transformResponse(response);
            } else {
                body = response.data as SignInCompleteDataResponse;
            }

            if (body.initialized) {
                storage.save(configRegister.getConfig().cookieNames.userInitialized, body.initialized.toString());
            }

            let succeed;

            if (data.checkSuccess) {
                succeed = data.checkSuccess(response);
            } else {
                succeed = defaultCheckSuccess(response);
            }

            return this.returnDirectResponseHandler(succeed, response);
        });
    }

    signInVerifyCode<ResponseType = SignInEmailCodeResponse>(
        data: SignInEmailCodeRequest,
    ): Promise<DirectStatusResponse<ResponseType>> {
        if (data.method === undefined) {
            data.method = "POST";
        }

        return super.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
            if (data.transformResponse) {
                try {
                    const transformedResponse = data.transformResponse(response);

                    this.saveSuccessfulSignIn(transformedResponse);

                    return this.returnDirectResponseHandler(true, response);
                } catch (e) {
                    return this.returnDirectResponseHandler(false, response);
                }
            }

            try {
                const typedResponse = response.data as SignInEmailCodeResponse;

                this.saveSuccessfulSignIn(typedResponse);

                return this.returnDirectResponseHandler(true, response);
            } catch (e) {
                return this.returnDirectResponseHandler(false, response);
            }
        });
    }

    private returnDirectResponseHandler<ResponseType = unknown>(
        status: boolean,
        response: AxiosResponse<ResponseType>,
    ): DirectStatusResponse<ResponseType> {
        return {
            succeed: status,
            response: response,
            initialized: this.isSignedIn() ? this.isInitialized() : null,
            signedIn: this.isSignedIn(),
        } as DirectStatusResponse<ResponseType>;
    }

    private saveSuccessfulSignIn(data: SignInEmailCodeResponse) {
        storage.save(configRegister.getConfig().cookieNames.accessToken, data.accessToken);
        storage.save(configRegister.getConfig().cookieNames.refreshToken, data.refreshToken);

        if (data.initialized) {
            storage.save(configRegister.getConfig().cookieNames.userInitialized, data.initialized.toString());
        }
    }

    signOut<ResponseType = unknown>(data: SignOutRequest): Promise<DirectStatusResponse<ResponseType>> {
        const defaultCheckSuccess = (response: AxiosResponse) => {
            return response.status === 200 || response.status === 204;
        };

        if (data.method === undefined) {
            data.method = "POST";
        }

        return this.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
            let succeed;

            if (data.checkSuccess) {
                succeed = data.checkSuccess(response);
            } else {
                succeed = defaultCheckSuccess(response);
            }

            if (!succeed) {
                return this.returnDirectResponseHandler(false, response);
            }

            this.handleSignOut();

            return this.returnDirectResponseHandler(true, response);
        });
    }

    private handleSignOut() {
        this.onSignOut();
        this.afterSignOut();
    }

    onSignOut = () => {
        storage.delete(configRegister.getConfig().cookieNames.accessToken);
        storage.delete(configRegister.getConfig().cookieNames.refreshToken);
        storage.delete(configRegister.getConfig().cookieNames.userInitialized);
    };

    afterSignOut = () => void 0;

    refreshSession<ResponseType = RefreshSessionResponse>(
        data: RefreshSessionRequest,
    ): Promise<DirectStatusResponse<ResponseType>> {
        if (data.method === undefined) {
            data.method = "POST";
        }

        return super
            .request<ResponseType>(data as VanillaHttpRequest)
            .then((response) => {
                let body: RefreshSessionResponse;

                // retrieve data (if wrong format error will be thrown)
                if (data.transformResponse) {
                    body = data.transformResponse(response);
                } else {
                    body = response.data as RefreshSessionResponse;
                }

                // save data
                this.saveSuccessfulRefreshSession(body);

                // enjoy saved data, when code runs to here theres no other option than success
                return this.returnDirectResponseHandler(true, response);
            })
            .then((response) => response)
            .catch((error) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (error.response && error.response.status === 401) {
                    this.handleSignOut();
                }

                throw error;
            });
    }

    private saveSuccessfulRefreshSession(data: RefreshSessionResponse) {
        storage.save(configRegister.getConfig().cookieNames.accessToken, data.accessToken);
        storage.save(configRegister.getConfig().cookieNames.refreshToken, data.refreshToken);

        if (data.initialized) {
            storage.save(configRegister.getConfig().cookieNames.userInitialized, data.initialized.toString());
        }
    }
}
