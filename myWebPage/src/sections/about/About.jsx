import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";

function Home(){
    return (
        <section id="About" className={styles.section}>
            <Presentation />
        </section>
    )
}
export default Home;