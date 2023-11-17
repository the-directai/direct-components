import {Link} from "react-router-dom";
import styles from "./styles.module.scss";


export type FooterCaptionElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function FooterCaptionElement({children, link = undefined, ...props}: FooterCaptionElementProps) {
    return (
        <Link className={styles.footer_caption_element} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}
