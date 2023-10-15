import styles from "./styles.module.scss";
import React from "react";

function Input({ ...props }, ref: React.LegacyRef<HTMLInputElement> | undefined) {
    return <input className={`${styles.input} ${props.className}`} {...props} ref={ref} />;
}

export default React.forwardRef(Input);
