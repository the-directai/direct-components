import styles from "./styles.module.scss";

export type SidepanelElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function SidepanelElement({children, link = undefined, ...props}: SidepanelElementProps) {
    return (
        <div className={styles.sidepanel_element}>
            <a href={link ?? ""} {...props}>
                {children}
            </a>
        </div>
    );
}
