import React from 'react';
import styles from './ProjectCard.module.scss';
import Tag from "../../../tag/Tag.jsx";

function ProjectCard() {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src="/placeholder.jpg" alt="aaaaaaaaaaaaaa" className={styles.image} />
            </div>
            <h5 className={styles.title}>Title</h5>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.tags}>
                <Tag text="Tag 1" />
                <Tag text="Tag 2" />
                <Tag text="Tag 3" />
            </div>
            <a href="https://google.com" className={styles.codeSource}>Code</a>
        </div>
    )
}
export default ProjectCard;