declare module "*.scss" {
    const content: Record<string, string>;
    export default content; 
}

declare type ReactChildren = React.JSX.Element | React.JSX.Element[] | string;
