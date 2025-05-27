import React from "react";
import styles from '../Section.module.scss'
import Presentation from "../../components/presentation/Presentation.jsx";
import SkillCard from "../../components/buttons/cards/skill/SkillCard.jsx";
import Tag from "../../components/tag/Tag.jsx";

function Home(){
    return (
        <section id="Skills" className={styles.section}>
            <h2 className={styles.title}>Technical <span className={styles.colouredText}>skills</span></h2>
            <div className={styles.content}>
                <SkillCard title="Skill 1">
                    <Tag text="tag 1" />
                    <Tag text="tag 2" />
                    <Tag text="tag 3" />
                    <Tag text="tag 4" />
                    <Tag text="tag 5" />
                    <Tag text="tag 6" />
                    <Tag text="tag 7" />
                </SkillCard>
                <SkillCard title="Skill 2">
                    <Tag text="tag 1" />
                    <Tag text="tag 2" />
                </SkillCard>
                <SkillCard title="Skill 3">
                    <Tag text="tag 1" />

                </SkillCard>
                <SkillCard title="Skill 4">
                    <Tag text="tag 1" />
                    <Tag text="tag 2" />
                    <Tag text="tag 3" />
                    <Tag text="tag 4" />
                    <Tag text="tag 5" />
                </SkillCard>
            </div>
        </section>
    )
}
export default Home;