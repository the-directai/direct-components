import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";


export function FooterSectionElement({children, link = undefined, ...props}: FooterSectionElementProps) {
    return (
        <Link className={styles.footer_bottom} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}

export function FooterAdditionalText({children, link = undefined, ...props}: FooterAdditionalTextProps) {
    return (
        <Link className={styles.footer_bottom} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}

export function FooterCaptionElement({children, link = undefined, ...props}: FooterCaptionElementProps) {
    return (
        <Link className={styles.footer_bottom} to={link ?? ""} {...props}>
            {children}
        </Link>
    );
}

export type FooterProps = {
    children: ReactChildren;
    [key: string]: unknown;
}

function Footer({children}: FooterProps) {
    return (
        <footer className={styles.footer_big}>
            {children}
        </footer>
    );
}

export default Footer;

// <div className={styles.holder_big}>
//     <div className={styles.list_container_big}>
//         <div className={styles.list_div_1}>
//             <ul className={styles.list1}>
//                 <li className={styles.title_li}>Get deeper into DirectAI</li>
//                 <li>About</li>
//                 <li>System Overviev</li>
//                 <li>Industry needs vs DirectAi</li>
//             </ul>
//         </div>
//         <div className={styles.list_div_2}>
//             <ul className={styles.list2}>
//                 <li className={styles.title_li}>Account</li>
//                 <li>Manage Your Account in D-ID</li>
//             </ul>
//             <ul className={styles.list3}>
//                 <li className={styles.title_li}>Sales</li>
//                 <li>Get DirectAi</li>
//                 <li>Get introduction</li>
//             </ul>
//         </div>
//         <div className={styles.list_div_3}>
//             <ul className={styles.list4}>
//                 <li className={styles.title_li}>For freight forwarding</li>
//                 <li>DTrack TMS overview</li>
//                 <li>Fit DTrack for you</li>
//             </ul>
//             <ul className={styles.list5}>
//                 <li className={styles.title_li}>For warehouse management</li>
//                 <li>DStore WMS overview</li>
//                 <li>Fit DStore for you</li>
//             </ul>
//         </div>
//         <div className={styles.list_div_4}>
//             <ul className={styles.list6}>
//                 <li className={styles.title_li}>For customers management and sales</li>
//                 <li>DStore CRM overview</li>
//                 <li>Fit DStore for you</li>
//             </ul>
//             <ul className={styles.list7}>
//                 <li className={styles.title_li}>For employees management</li>
//                 <li>DFlow HRM overview</li>
//                 <li>Fit DFlow for you</li>
//             </ul>
//         </div>
//     </div>
//     <div className={styles.additional_info}>
//         <ul className={styles.list2}>
//             <li>With any problem feel free to get in touch with us at support@directai.pl</li>
//             <br/>
//             <hr/>
//             <li className={styles.li_horizontal}>Copyright © 2023 DirectAI. All rights reserved.</li>
//             <li className={styles.li_horizontal}>Privacy Policy</li>
//             <li className={styles.li_horizontal}>Terms of use</li>
//             <li className={styles.li_horizontal}>Site map</li>
//             <li className={`${styles.li_horizontal} language_selection_big`}></li>
//         </ul>
//     </div>
// </div>
