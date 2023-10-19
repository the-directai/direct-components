import { HttpClient } from "./HttpClient";

export default class HttpClientImpl implements HttpClient {
    get<T>(): T {
        return { obj: "tset" } as T;
    }
    // todo
}
