import styles from "./styles.module.scss";

import NotificationIcon from "./assets/NotificationIcon/NotificationIcon";
import ProfileIcon from "./assets/ProfileIcon/ProfileIcon";
import DirectIcon from "./assets/DirectIcon/DirectIcon";
import HamburgerIcon from "./assets/HamburgerIcon/HamburgerIcon";
import React from "react";

function Navbar() {
    return <div className={`${styles.main_cointainer} d--component`}>
        <div className={styles.nav_content}>
            <div className={styles.left_group}>
                <div className={styles.branding}>
                    <DirectIcon />
                    <div className={styles.direct_name}>
                        DirectAI
                    </div>
                </div>

                <ul className={styles.links}>
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
                    <HamburgerIcon onClick={() => console.log("elo")} className={styles.hamburger_menu}/>
                    {/* TODO: Show mobile fullscreen menu. */}
                </div>
            </div>
        </div>
    </div>;
}

export default Navbar;
