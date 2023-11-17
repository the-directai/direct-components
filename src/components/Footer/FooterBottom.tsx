import styles from "./styles.module.scss";

export type FooterBottomProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function FooterBottom({children}: FooterBottomProps) {
    return (
        <div className={styles.footer_bottom}>
            {children}
        </div>
    );
}