import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";

function Home(){
    return (
        <section id="Skills" className={styles.section}>
            <h2 className={styles.title}>Technical <span className={styles.colouredText}>skills</span></h2>
        </section>
    )
}
export default Home;