import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

// wszystkie tablice powinny byc w miejscu gdzie footer jest uzywany albo zmienna wybierany i napisac petle for co robi liste w zaleznossci od ilosci komponentow

const bigFooterMainContent = [
    {
        title: "Get deeper into DirecrAi",
        content: [
            <Link to={"#"}>About</Link>,
            <Link to={"#"}>System overviev</Link>,
            <Link to={"#"}>Industry needs vs DirectAI</Link>
        ]
    },
    {
        title: "Account",
        content: <Link to={"#"}>Manage Your Account in D-ID</Link>
    },
    {
        title: "Sales",
        content: [
            <Link to={"#"}>Get DirectAI</Link>,
            <Link to={"#"}>Get introduction</Link>
        ]
    },
    {
        title: "For freight forwarding",
        content: [
            <Link to={"#"}>DTrack TMS overview</Link>,
            <Link to={"#"}>Fit DTrack for you</Link>
        ]
    },
    {
        title: "For warehouse management",
        content: [
            <Link to={"#"}>For warehouse management</Link>,
            <Link to={"#"}>Fit DStore for you</Link>
        ]
    },
    {
        title: "For customers management and sales",
        content: [
            <Link to={"#"}>DStore CRM overview</Link>,
            <Link to={"#"}>Fit DStore for you</Link>
        ]
    },
    {
        title: "For employees management",
        content: [
            <Link to={"#"}>DFlow HRM overview</Link>,
            <Link to={"#"}>Fit DFlow for you</Link>
        ]
    }
];

const footerAdditionalText = "With any problem feel free to get in touch with us at support@directai.pl";

const footerCaption = {
    left: [
        <Link to={"#"}>Copyright © 2023 DirectAI. All rights reserved.</Link>,
        <Link to={"#"}>Privacy Policy</Link>,
        <Link to={"#"}>Terms of use</Link>,
        <Link to={"#"}>Site map</Link>
    ],
    right: [
        <Link to={"#"}></Link>
    ]
};

function Footer({ isBig, bigFooterMainContent, footerAdditionalText, footerCaption }: { isBig: boolean, bigFooterMainContent?: unknown[], footerAdditionalText?: string, footerCaption: string }) {
    if (isBig) {
        return <bigFooter mainContent = {bigFooterMainContent} caption = {footerCaption} additionalText = {}>
        //return bigFooter({ mainContent: bigFooterMainContent, caption: footerCaption, additionalText: footerAdditionalText });
    } else {
        return smallFooter({ caption: footerCaption });
    }
}


function bigFooter({mainContent, caption, addtionalText
}: {mainContent: string, caption: string, addtionalText: string}) {

    for (const element of mainContent) {
        console.log(element);
    }
    for (const element of caption) {
        console.log(element);
    }
    for (const element of addtionalText) {
        console.log(element);
    }

    return (
        <footer className={styles.footer_big}>
            <div className={styles.holder_big}>
                <div className={styles.list_container_big}>
                    <div className={styles.list_div_1}>
                        <ul className={styles.list1}>
                            <li className={styles.title_li}>Get deeper into DirectAI</li>
                            <li>About</li>
                            <li>System Overviev</li>
                            <li>Industry needs vs DirectAi</li>
                        </ul>
                    </div>
                    <div className={styles.list_div_2}>
                        <ul className={styles.list2}>
                            <li className={styles.title_li}>Account</li>
                            <li>Manage Your Account in D-ID</li>
                        </ul>
                        <ul className={styles.list3}>
                            <li className={styles.title_li}>Sales</li>
                            <li>Get DirectAi</li>
                            <li>Get introduction</li>
                        </ul>
                    </div>
                    <div className={styles.list_div_3}>
                        <ul className={styles.list4}>
                            <li className={styles.title_li}>For freight forwarding</li>
                            <li>DTrack TMS overview</li>
                            <li>Fit DTrack for you</li>
                        </ul>
                        <ul className={styles.list5}>
                            <li className={styles.title_li}>For warehouse management</li>
                            <li>DStore WMS overview</li>
                            <li>Fit DStore for you</li>
                        </ul>
                    </div>
                    <div className={styles.list_div_4}>
                        <ul className={styles.list6}>
                            <li className={styles.title_li}>For customers management and sales</li>
                            <li>DStore CRM overview</li>
                            <li>Fit DStore for you</li>
                        </ul>
                        <ul className={styles.list7}>
                            <li className={styles.title_li}>For employees management</li>
                            <li>DFlow HRM overview</li>
                            <li>Fit DFlow for you</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.additional_info}>
                    <ul className={styles.list2}>
                        <li>With any problem feel free to get in touch with us at support@directai.pl</li>
                        <br/>
                        <hr/>
                        <li className={styles.li_horizontal}>Copyright © 2023 DirectAI. All rights reserved.</li>
                        <li className={styles.li_horizontal}>Privacy Policy</li>
                        <li className={styles.li_horizontal}>Terms of use</li>
                        <li className={styles.li_horizontal}>Site map</li>
                        <li className={`${styles.li_horizontal} language_selection_big`}></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

function smallFooter({footerCaption}: {footerCaption: string}) {
    return(
        <footer>
            <div className={styles.holder_small}>
                <div className={styles.list_container_small}>
                    <ul className={styles.list8}>
                        <li>Copyright © 2023 DirectAI. All rights reserved.</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Site map</li>
                        <li className={styles.language_selection_small}>English</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}


export default Footer();