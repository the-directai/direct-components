import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

export type FooterSectionHeaderProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function FooterSectionHeader({children, link = undefined, ...props}: FooterSectionHeaderProps) {
    return (
        <Link className={styles.footer_section_header} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}