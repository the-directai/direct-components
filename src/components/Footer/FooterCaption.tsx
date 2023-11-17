import styles from "./styles.module.scss";

export type FooterCaptionProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function FooterCaption({children}: FooterCaptionProps) {
    return (
        <div className={styles.footer_caption}>
            {children}
        </div>
    );
}