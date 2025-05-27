import React from "react";
import styles from "./JourneyCard.module.scss";

function JourneyCard() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>My journey</h3>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.tags}>
                <p className={styles.tag}>tag 1</p>
                <p className={styles.tag}>tag 2</p>
                <p className={styles.tag}>tag 3</p>
            </div>
        </div>
    )
}
export default JourneyCard;