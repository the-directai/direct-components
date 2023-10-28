import { AxiosResponse } from "axios";

/**
 * Http request frame
 * @property {string} url
 * @property {unknown} [data] data to send, preferred an object
 * @property {object} [params] uri params
 * @property {object} [headers] request headers
 */
export type HttpRequest = {
    url: string;
    data?: unknown;
    params?: { [P in string]: string };
    headers?: { [P in string]: string };
};

/**
 * Vanilla request - with method specified
 * @property {string} url
 * @property {unknown} [data] data to send, preferred an object
 * @property {object} [params] uri params
 * @property {object} [headers] request headers
 * @property {string} method http method
 */
export type VanillaHttpRequest = {
    url: string;
    data?: unknown;
    params?: { [P in string]: string };
    headers?: { [P in string]: string };
    method: string;
};

/**
 * Data (body) of sign in attempt request
 * @property {string} email used as login
 */
export type SignInAttemptData = {
    email: string;
};

/**
 * Sign in request parameters
 * @property {SignInAttemptData} data data to send
 * @property {string} [method="POST"] request method
 * @property {(response: AxiosResponse) => boolean} [checkSuccess] check and return if succeed
 */
export type SignInAttemptRequestData = {
    data: SignInAttemptData;
    method?: string;
    checkSuccess?: (response: AxiosResponse) => boolean;
};

/**
 * Request used to sign in attempt
 */
export type SignInAttemptRequest = HttpRequest & SignInAttemptRequestData;

/**
 * Data (body) of email verification request
 * @property {string} email
 * @property {string} code code from email
 */
export type SignInEmailCodeData = {
    email: string;
    code: string;
};

/**
 * Sign in response data
 * @property {string} accessToken
 * @propert {string} refreshToken
 * @property {[properties: string]: unknown}
 */
export type SignInEmailCodeResponse = {
    accessToken: string;
    refreshToken: string;
    initialized?: string;
    [properties: string]: unknown;
};

/**
 * Sign in request parameters
 * @property {SignInEmailCodeData} data data to send
 * @property {string} [method="POST"] request method (can be override)
 * @property {(response: AxiosResponse) => boolean} [checkSuccess] check and return success
 */
export type SignInEmailCodeRequestData = {
    data: SignInEmailCodeData;
    method?: string;
    transformResponse?: (response: AxiosResponse) => SignInEmailCodeResponse;
};

/**
 * Sign in email code verification parameters
 */
export type SignInEmailCodeRequest = HttpRequest & SignInEmailCodeRequestData;

/**
 * Sign out request parameters
 * @param {string} [method="POST"] http method
 * @param {(response: AxiosResponse) => boolean} [checkSuccess] function to check if sign out succeed
 */
export type SignOutRequestData = {
    method?: string;
    checkSuccess?: (response: AxiosResponse) => boolean;
};

/**
 * Sign out request parameters
 */
export type SignOutRequest = SignOutRequestData & HttpRequest;

export type DirectStatusResponse = {
    succeed: boolean;
    response: AxiosResponse;
};

/**
 * Authentication http client
 */
export interface HttpEmailCodeSignInClient {
    /**
     * request to attempt sign in
     * @param {SignInAttemptData} data
     * @returns {Promise<boolean>} was request succeed
     */
    signInAttempt(data: SignInAttemptRequest): Promise<DirectStatusResponse>;

    /**
     * request to verify code from email
     * @param {SignInEmailCodeRequest} data
     * @returns {Promise<boolean>} was user signed in
     */
    signInVerifyCode(data: SignInEmailCodeRequest): Promise<DirectStatusResponse>;

    /**
     * request to fill sign in data tin initialize account
     * @param {HttpRequest} data
     * @returns {Promise<boolean>} returns if data was filled
     */
    signInCompleteData?<ResponseType = unknown>(data: HttpRequest): Promise<AxiosResponse<ResponseType>>;

    /**
     * request to sign out
     * @param {SignOutRequest} data
     * @returns {Promise<boolean>} if sign out succeeded
     */
    signOut(data: SignOutRequest): Promise<DirectStatusResponse>;

    /**
     * checks if user is signed in
     * @returns {boolean} sign in status - true means user is signed in
     */
    isSignedIn(): boolean;

    /**
     * function runs on sign out event (even if it's by token expiration) and can be overriden.
     * @default deletes cookies
     * @type {() => void | undefined}
     */
    onSignOut: () => void;

    /**
     * function runs after onSignOut().
     * @default no action after sign out
     * @type {() => void | undefined}
     */
    afterSignOut: () => void;
}

/**
 * Http client with basic methods
 */
export interface HttpClient {
    /**
     * http request using GET method with custom response format
     * @template {unknown} ResponseType response type defined by user
     * @param {HttpRequest} data request parameters and body
     * @returns {ResponseType} response in custom type
     */
    get<ResponseType = unknown>(data: HttpRequest): Promise<AxiosResponse<ResponseType>>;

    /**
     * http request using POST method with custom response format
     * @template {unknown} ResponseType response type defined by user
     * @param {HttpRequest} data request parameters and body
     * @returns {ResponseType} response in custom type
     */
    post<ResponseType = unknown>(data: HttpRequest): Promise<AxiosResponse<ResponseType>>;

    /**
     * http request using PUT method with custom response format
     * @template {unknown} ResponseType response type defined by user
     * @param {HttpRequest} data request parameters and body
     * @returns {ResponseType} response in custom type
     */
    put<ResponseType = unknown>(data: HttpRequest): Promise<AxiosResponse<ResponseType>>;

    /**
     * http request using DELETE method with custom response format
     * @template {unknown} ResponseType response type defined by user
     * @param {HttpRequest} data request parameters and body
     * @returns {ResponseType} response in custom type
     */
    delete<ResponseType = unknown>(data: HttpRequest): Promise<AxiosResponse<ResponseType>>;

    /**
     * http request using any method with custom response format
     * @template {unknown } ResponseType response type defined by user
     * @param {VanillaHttpRequest} data request parameters and body (method included)
     * @returns {ResponseType} response in custom type
     */
    request<ResponseType = unknown>(data: VanillaHttpRequest): Promise<AxiosResponse<ResponseType>>;
}

/**
 * Http authentication client, which makes requests and manages session
 */
export type HttpAuthClient = HttpClient & HttpEmailCodeSignInClient;
