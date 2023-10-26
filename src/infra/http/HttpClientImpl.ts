import { HttpClient, HttpRequest, VanillaHttpRequest } from "./HttpClient";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class HttpClientImpl implements HttpClient {
    private readonly _axiosInstance: AxiosInstance;

    constructor() {
        this._axiosInstance = axios.create({});
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

    request<ResponseType = unknown>({
        url,
        params = undefined,
        data = {},
        headers = undefined,
        method = "GET",
    }: VanillaHttpRequest): Promise<AxiosResponse<ResponseType>> {
        return this._axiosInstance({
            method,
            url,
            params,
            data,
            headers,
        });
    }
}
