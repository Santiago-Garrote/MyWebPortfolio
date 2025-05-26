import React from "react";
import styles from "./PrimaryButton.module.scss";

function PrimaryButton({text, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}
export default PrimaryButton;