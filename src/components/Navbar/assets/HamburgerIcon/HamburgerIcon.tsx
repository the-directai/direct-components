import styles from "./styles.module.scss";

type HamburgerProps = {
    className: string;
    [props: string]: unknown;
};
export default function HamburgerIcon({className = "", ...props}: HamburgerProps) {
    return <div {...props} className={`${styles.hamburger_icon} ${className}`} >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
    </div>;
}