import styles from "./styles.module.scss";

import NotificationIcon from "./assets/NotificationIcon/NotificationIcon";
import ProfileIcon from "./assets/ProfileIcon/ProfileIcon";
import DirectIcon from "./assets/DirectIcon/DirectIcon";
import HamburgerIcon from "./assets/HamburgerIcon/HamburgerIcon";
import React, {useState} from "react";

function Navbar() {
    const [mobileLinksExtended, setMobileLinksExtended] = useState(false);
    console.log(mobileLinksExtended);
    return <div className={`${styles.main_container} d--component`}>
        <div className={`${styles.nav_content} ${mobileLinksExtended ? styles.links_extended : ""}`}>
            <div className={styles.left_group}>
                <div className={styles.branding}>
                    <DirectIcon />
                    <div className={styles.direct_name}>
                        DirectAI
                    </div>
                </div>

                <ul className={`${styles.links} ${mobileLinksExtended ? styles.links_extended : ""}`}>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                </ul>
            </div>

            <div className={styles.right_group}>
                <div className={styles.icon_holder}>
                    <NotificationIcon/>
                    <ProfileIcon/>
                    <HamburgerIcon onClick={() => setMobileLinksExtended(!mobileLinksExtended)} className={styles.hamburger_menu}/>
                </div>
            </div>
        </div>
    </div>;
}

export default Navbar;
