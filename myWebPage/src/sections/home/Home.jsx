import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";

function Home(){
    return (
        <section id="Home" className={styles.section}>
            <div className="container">
                <Presentation />
            </div>
        </section>
    )
}
export default Home;