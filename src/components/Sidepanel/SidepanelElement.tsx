import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type SidepanelElementProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function SidepanelElement({children, link = undefined, ...props}: SidepanelElementProps) {
    return (
        <div className={styles.navbar_vertical_element}>
            <Link to={link ?? ""} {...props}>
                {children}
            </Link>
        </div>
    );
}
