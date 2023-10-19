import HttpClientImpl from "./HttpClientImpl";

const providers = {
    HttpClient: new HttpClientImpl(),
};

export default providers.HttpClient;
