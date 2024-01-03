import React from "react";
import styles from "./styles.module.scss";
//import { useRouteError } from "react-router-dom";
export type DefaultRouteError = {
    status: string | number;
    statusText: string;
    message: string;
    [ket: string]: unknown;
}

function ErrorView() {
    //const error = useRouteError();

    //delete 4 lines below before pushing to reviev git.
    const error = {
        status: "404",
        statusText: "Not Found",
        message: "The requested route was not found"
    };

    if(error as DefaultRouteError) {
        const defaultRouteError: DefaultRouteError = error as DefaultRouteError;  
        return(
            <div className={styles.holder}>
                <main>
                    {defaultRouteError.status && <p>defaultRouteError.status</p>}
                    {defaultRouteError.status && <p className={styles.error_status}>{defaultRouteError.status}</p>}
                    <p>
                        <i>{defaultRouteError.statusText || defaultRouteError.message}</i>
                    </p>

                    <div className={styles.div_as_hr}></div>
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
                    <section className={styles.support_button_holder}>
                        <p className={styles.send_to_support}><div className={styles.text_button}>Send to support</div></p>
                        <p className={styles.download_report}><div className={styles.text_button}>Download report</div></p>
                    </section>
                </main>
            </div>
        );
    }
    return(
        <div className={styles.holder}>
            <main>
                <i>unknown</i>
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