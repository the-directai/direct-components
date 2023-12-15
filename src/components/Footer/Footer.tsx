import styles from "./styles.module.scss";

type FooterProps = {
    children: ReactChildren
}

function Footer({children, ...props}: FooterProps) {
    return (
        <div className={styles.footer} {...props}>{children}</div>
    ); 
}

export default Footer;
