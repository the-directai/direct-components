import { CookiesHandlerImpl } from "./CookiesHandlerImpl";

const providers = {
    CookiesHandler: new CookiesHandlerImpl(),
};

export default providers.CookiesHandler;
