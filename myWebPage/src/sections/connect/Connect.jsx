import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";
import ContactCard from "../../components/buttons/cards/contact/ContactCard.jsx";

function Home(){
    return (
        <section id="Connect" className={styles.section}>
            <h2 className={styles.title}>Connect <span className={styles.colouredText}>with me</span></h2>
            <div className={styles.content}>
                <ContactCard logo={{img:"/placeholder.jpg", alt:"placeholder"}} name="PlaceHolder" />
                <ContactCard logo={{img:"/placeholder.jpg", alt:"placeholder"}} name="PlaceHolder" />
                <ContactCard logo={{img:"/placeholder.jpg", alt:"placeholder"}} name="PlaceHolder" />
                <ContactCard logo={{img:"/placeholder.jpg", alt:"placeholder"}} name="PlaceHolder" />
            </div>
        </section>
    )
}
export default Home;