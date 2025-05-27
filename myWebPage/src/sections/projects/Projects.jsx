import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";
import ProjectCard from "../../components/buttons/cards/projects/ProjectCard.jsx";
import SecondaryButton from "../../components/buttons/secondary/SecondaryButton.jsx";

function Home(){
    return (
        <section id="Projects" className={styles.section}>
            <h2 className={styles.title}>My <span className={styles.colouredText}>projects</span></h2>
            <div className={styles.content}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}
export default Home;