import React from "react";
import styles from "./SecondaryButton.module.scss";

function SecondaryButton({text, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}
export default SecondaryButton;