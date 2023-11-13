import { HttpClientImpl } from "./HttpClientImpl";
import HttpAuthClientImpl from "./HttpAuthClientImpl";

const providers = {
    httpAuthClient: new HttpAuthClientImpl(),
    httpClient: new HttpClientImpl(),
};

export const httpAuthClient = providers.httpAuthClient;
export const httpClient = providers.httpClient;
