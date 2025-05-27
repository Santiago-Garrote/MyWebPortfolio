import React from "react";
import styles from "./Virtues.module.scss";

function Virtues({children}){
    return (
        <div className={styles.virtues}>
            {children}
        </div>
    )
}
export default Virtues;