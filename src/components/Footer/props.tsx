import {ReactChildren} from "./index";


export type FooterSectionElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export type FooterAdditionalTextProps = {
    children:  ReactChildren;
    link?: string | undefined
    [key: string]: unknown;
}

export type FooterCaptionElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}