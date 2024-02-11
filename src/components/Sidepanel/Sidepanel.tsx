import styles from "./styles.module.scss";

export type SidepanelProps = {
    children: ReactChildren;
} 

function Sidepanel({children, ...props}: SidepanelProps) {
    return (
        <div {...props} className={styles.sidepanel}>{children}</div>
    );
}

export default Sidepanel;