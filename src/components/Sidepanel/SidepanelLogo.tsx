import styles from "./styles.module.scss";

type SidepanelLogoProps = {
    children: ReactChildren;
}

export function SidepanelLogo({children, ...props} : SidepanelLogoProps) {
    return (
        <div {...props} className={styles.sidepanel_logo}>{children}</div>
    );
}