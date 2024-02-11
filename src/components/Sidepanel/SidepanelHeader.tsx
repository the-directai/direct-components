import styles from "./styles.module.scss";

export type SidepanelHeaderProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function SidepanelHeader({children, link = undefined, ...props}: SidepanelHeaderProps) {
    return (
        <div className={styles.sidepanel_header}>
            <a href={link ?? ""} {...props}>
                {children}
            </a>
        </div>
    );
}
