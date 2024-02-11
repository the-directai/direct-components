declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare type ReactChildren = JSX.Element | JSX.Element[] | string;
