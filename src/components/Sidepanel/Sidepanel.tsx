import styles from "./styles.module.scss"

export type SidepanelProps = {
    children: ReactChildren;
} 

function Sidepanel({children, ...props}: SidepanelProps) {
    return (
        <div {...props} className={styles.navbar_vertical}>{children}</div>
    );
}

export default Sidepanel;