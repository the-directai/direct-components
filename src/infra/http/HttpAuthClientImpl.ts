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
} from "./HttpClient";
import { AxiosResponse } from "axios";
import { HttpClientImpl } from "./HttpClientImpl";
import storage from "../storage";
import configRegister from "../../config/configRegister";

export default class HttpAuthClientImpl extends HttpClientImpl implements HttpAuthClient {
    private _baseUrl: string | undefined;

    constructor() {
        super();

        // if base url is set loads it to memory
        this._baseUrl = storage.get(configRegister.getConfig().cookieNames.baseUrl) ?? undefined;
    }

    setBaseUrl(url: string) {
        storage.save(configRegister.getConfig().cookieNames.baseUrl, url);
        this._baseUrl = url;
    }

    get baseUrl() {
        return this._baseUrl;
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

        return super.request<ResponseType>(data);
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
        return this.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
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

        return this.request<ResponseType>(data as VanillaHttpRequest).then((response) => {
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
            storage.save(configRegister.getConfig().cookieNames.userInitialized, data.initialized);
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

            this.onSignOut();
            this.afterSignOut();

            return this.returnDirectResponseHandler(true, response);
        });
    }

    onSignOut = () => {
        storage.delete(configRegister.getConfig().cookieNames.accessToken);
        storage.delete(configRegister.getConfig().cookieNames.refreshToken);
        storage.delete(configRegister.getConfig().cookieNames.userInitialized);
    };

    afterSignOut = () => void 0;
}
