import styles from "./styles.module.scss";

function Navbar() {
    return <div className={`${styles.main_cointainer} d--component`}>
        <div className={styles.nav_content}>
            <div className={styles.left_group}>
                <div className={styles.branding}>
                    <div className={styles.direct_logo}>
                        <div className={styles.direct_square}></div>
                        <div className={styles.direct_square}></div>
                        <div className={styles.direct_square}></div>
                        <div className={styles.direct_square}></div>
                    </div>
                    <div className={styles.direct_name}>
                        DirectAI
                    </div>
                </div>

                <div className={styles.links}>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                    <a href="https://media.tenor.com/7953eR2iLQMAAAAd/nesmog_floppa.gif">Important</a>
                </div>
            </div>

            <div className={styles.right_group}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path className={styles.svg} d="M4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clipPath="url(#clip0_25_55)">
                            <path className={styles.svg} d="M11 5.5C10.3201 5.5 9.65552 5.70161 9.09023 6.07932C8.52494 6.45704 8.08434 6.9939 7.82417 7.62203C7.56399 8.25015 7.49592 8.94131 7.62855 9.60812C7.76119 10.2749 8.08858 10.8874 8.56932 11.3682C9.05007 11.8489 9.66257 12.1763 10.3294 12.3089C10.9962 12.4416 11.6874 12.3735 12.3155 12.1133C12.9436 11.8532 13.4805 11.4126 13.8582 10.8473C14.2359 10.282 14.4375 9.61737 14.4375 8.9375C14.4375 8.02582 14.0753 7.15148 13.4307 6.50682C12.786 5.86216 11.9117 5.5 11 5.5Z"/>
                            <path className={styles.svg} d="M11 1.375C9.09636 1.375 7.23546 1.9395 5.65264 2.99711C4.06982 4.05471 2.83616 5.55793 2.10766 7.31667C1.37917 9.07541 1.18856 11.0107 1.55995 12.8777C1.93133 14.7448 2.84802 16.4598 4.1941 17.8059C5.54018 19.152 7.25519 20.0687 9.12226 20.4401C10.9893 20.8114 12.9246 20.6208 14.6833 19.8923C16.4421 19.1638 17.9453 17.9302 19.0029 16.3474C20.0605 14.7645 20.625 12.9036 20.625 11C20.6221 8.44817 19.6071 6.00169 17.8027 4.19727C15.9983 2.39286 13.5518 1.37788 11 1.375ZM16.4948 17.1365C16.4812 16.2347 16.1137 15.3743 15.4717 14.7408C14.8297 14.1074 13.9644 13.7515 13.0625 13.75H8.9375C8.03557 13.7515 7.17035 14.1074 6.52831 14.7408C5.88628 15.3743 5.51883 16.2347 5.50516 17.1365C4.25842 16.0233 3.37923 14.5576 2.98398 12.9336C2.58874 11.3096 2.6961 9.60379 3.29185 8.04214C3.88759 6.4805 4.94362 5.13663 6.3201 4.1885C7.69658 3.24037 9.32858 2.73269 11 2.73269C12.6714 2.73269 14.3034 3.24037 15.6799 4.1885C17.0564 5.13663 18.1124 6.4805 18.7082 8.04214C19.3039 9.60379 19.4113 11.3096 19.016 12.9336C18.6208 14.5576 17.7416 16.0233 16.4948 17.1365Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_25_55">
                                <rect width="22" height="22" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>;
}

export default Navbar;
