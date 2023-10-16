import styles from "./styles.module.scss";
import React from "react";

function Input({ className = "", error = false, ...props }, ref: React.LegacyRef<HTMLInputElement> | undefined) {
    return (
        <input
            className={`${styles.input} ${className} d--component ${error ? styles.error : ""}`}
            {...props}
            ref={ref}
        />
    );
}

export default React.forwardRef(Input);
