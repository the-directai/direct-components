import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export type SidepanelHeaderProps = {
    children: ReactChildren;
    link?: string | undefined;
    [key: string]: unknown;
}

export function SidepanelHeader({children, link = undefined, ...props}: SidepanelHeaderProps) {
    return (
        <div className={styles.navbar_vertical_header}>
            <Link to={link ?? ""} {...props}>
                {children}
            </Link>
        </div>
    );
}
