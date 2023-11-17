import styles from "./styles.module.scss";

export type FooterColumnProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function FooterColumn({children}: FooterColumnProps) {
    return (
        <div className={styles.footer_column}>
            {children}
        </div>
    );
}