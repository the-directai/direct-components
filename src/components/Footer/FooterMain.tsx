import styles from "./styles.module.scss";

export type FooterMainProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function FooterMain({children}: FooterMainProps) {
    return (
        <div className={styles.footer_main}>
            {children}
        </div>
    );
}