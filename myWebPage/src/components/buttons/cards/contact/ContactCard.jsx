import React from "react";
import styles from "./ContactCard.module.scss";

function ContactCard({logo, name}) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={logo.img} alt={logo.alt} />
            </div>
            <h4 className={styles.name}>{name}</h4>
        </div>
    )
}
export default ContactCard;