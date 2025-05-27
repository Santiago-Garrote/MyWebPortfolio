import React from "react";
import styles from "./VirtueCard.module.scss";

function VirtueCard({title, logo, description}) {
    return (
        <div className={styles.card}>
            <img src={logo.url} alt={logo.alt} className={styles.logo}/>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
export default VirtueCard;