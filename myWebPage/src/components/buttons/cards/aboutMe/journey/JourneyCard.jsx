import React from "react";
import styles from "./JourneyCard.module.scss";
import Tag from "../../../../tag/Tag.jsx";

function JourneyCard() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>My journey</h3>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.tags}>
                <Tag text="Tag 1" />
                <Tag text="Tag 2" />
                <Tag text="Tag 3" />
            </div>
        </div>
    )
}
export default JourneyCard;