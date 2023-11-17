import {Link} from "react-router-dom";
import styles from "./styles.module.scss";


export type FooterAdditionalTextProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function FooterAdditionalText({children, link = undefined, ...props}: FooterAdditionalTextProps) {
    return (
        <Link className={styles.footer_additional_text} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}
