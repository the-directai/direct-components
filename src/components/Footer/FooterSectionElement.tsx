import {Link} from "react-router-dom";
import styles from "./styles.module.scss";


export type FooterSectionElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function FooterSectionElement({children, link = undefined, ...props}: FooterSectionElementProps) {
    return (
        <Link className={styles.footer_section_element} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}
