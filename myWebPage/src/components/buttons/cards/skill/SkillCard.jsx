import React from "react";
import styles from "./SkillCard.module.scss";

function SkillCard({children, title}) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}> <img src="" alt="" /> {title}</h3>
            <div className={styles.tags}>
                {children}
            </div>
        </div>
    )
}
export default SkillCard;