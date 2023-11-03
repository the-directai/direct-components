import styles from "./styles.module.scss";

export default function DirectIcon() {
    return <div className={styles.direct_logo}>
        <div className={styles.direct_square}></div>
        <div className={styles.direct_square}></div>
        <div className={styles.direct_square}></div>
        <div className={styles.direct_square}></div>
    </div>;
}