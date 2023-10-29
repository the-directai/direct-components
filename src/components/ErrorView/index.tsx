import React from "react";
import styles from "./styles.module.scss";
import { useRouteError } from "react-router-dom";

function ErrorView() {
    const error: unknown = useRouteError();
    return(
        <div className={styles.holder}>
            <main>
                <p className={styles.error_ID}>{error.messageId}</p>

                <p className={styles.explain_text_one}>Something unexpected happened.</p>
                <p className={styles.explain_text_two}>Sometimes we can’t predict everything. We’re sorry.</p>
                
                {/*temp buttons: Home | Go back */}
                <p className={styles.temp_button_home}>Home</p>
                <p className={styles.break_between_buttons}>|</p>
                <p className={styles.temp_button_go_back}>Go Back</p>
                <br/>
                {/* section with temp buttons downloading report and sending to support */}
                <section className={styles.cos}>
                    <p className={styles.send_to_support}>Send to support</p>
                    <p className={styles.download_report}>Download report</p>
                </section>
                
            </main>
        </div>
    );

}

export default ErrorView;
