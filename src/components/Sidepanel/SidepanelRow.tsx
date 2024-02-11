import styles from "./styles.module.scss";

export type SidepanelRowProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

export function SidepanelRow({children}: SidepanelRowProps) {
    return (
        <div className={styles.navbar_vertical_row}>
            {children}
        </div>
    );
}