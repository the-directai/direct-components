import styles from "./styles.module.scss";

export type FooterSectionProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function FooterSection({children}: FooterSectionProps) {
    return (
        <div className={styles.footer_section}>
            {children}
        </div>
    );
}