import React from "react";
import styles from '../Section.module.scss'
import JourneyCard from "../../components/buttons/cards/aboutMe/journey/JourneyCard.jsx";
import VirtueCard from "../../components/buttons/cards/aboutMe/virtue/VirtueCard.jsx";
import Virtues from "../../components/buttons/cards/aboutMe/virtues/Virtues.jsx";

function Home(){
    return (
        <section id="About" className={styles.section}>
            <h2 className={styles.title}>About <span className={styles.colouredText}>me</span> </h2>
            <div className={styles.content}>
                <JourneyCard />
                <Virtues>
                    <VirtueCard title="Virtues 1" description="Test" logo={{url:"a", alt:"a"} } />
                    <VirtueCard title="Virtues 2" description="Test" logo={{url:"a", alt:"a"} } />
                    <VirtueCard title="Virtues 3" description="Test" logo={{url:"a", alt:"a"} } />
                    <VirtueCard title="Virtues 4" description="Test" logo={{url:"a", alt:"a"} } />
                </Virtues>
            </div>
        </section>
    )
}
export default Home;