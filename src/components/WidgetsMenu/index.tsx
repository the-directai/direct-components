import styles from "./styles.module.scss";
import { useState } from "react";
function WidgetsMenu() {

    const widgets: JSX.Element[] = [
        <div>TestWidget1</div>,
        <div>TestWidget2</div>
    ];
    const [widgetIndex, setWidgetIndex] = useState<number>(0);

    const handlePrevClick = () => {
        setWidgetIndex((prevIndex) => (prevIndex === 0 ? widgets.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setWidgetIndex((prevIndex) => (prevIndex === widgets.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={`${styles.holder}`}>
            <div className={styles.title}>
                <div className={styles.title_text}>Select widget</div>
                <div className={styles.title_line}><hr/></div>
            </div>
            <div className={styles.selector}>
                <div className={styles.screen}>
                    <div className={`${styles.prev} no-select`} onClick={handlePrevClick}>&lt;</div>
                    <div className={styles.box}>
                        {widgets[widgetIndex]}
                    </div>
                    <div className={`${styles.next} no-select`} onClick={handleNextClick}>&gt;</div>
                </div>
            </div>
            <div className={styles.button}>
                <div className={`${styles.button_text} no-select`}>Select</div>
            </div>
        </div>
    );
}

export default WidgetsMenu;