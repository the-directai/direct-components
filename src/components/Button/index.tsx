import React from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
    children?: React.JSX.Element | React.JSX.Element[] | string;
    className: string;
    secondary: boolean;
    [props: string]: unknown;  
};

function Button(
    { className = "", children = "", secondary = false, ...props }: ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement> | undefined,
) {
    return (
        <button ref={ref} {...props} className={`${className} ${styles.button} ${secondary ? styles.secondary : ""}`}>
            {children}
        </button>
    );
}

export default React.forwardRef(Button);
