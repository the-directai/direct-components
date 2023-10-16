import styles from "./styles.module.scss";
import React from "react";

type InputProps = {
    className: string;
    error: boolean;
    [props: string]: unknown;
};
function Input(
    { className = "", error = false, ...props }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined,
) {
    return (
        <input
            className={`${styles.input} ${className} d--component ${error ? styles.error : ""}`}
            {...props}
            ref={ref}
        />
    );
}

export default React.forwardRef(Input);
