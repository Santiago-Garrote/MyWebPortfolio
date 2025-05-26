import React from 'react';
import styles from './Presentation.module.scss';

function Presentation() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hi I'm <span className={styles.myName}>Santiago Garrote</span></h1>
            <h3 className={styles.subtitle}>My greatest talent is <span className={styles.reWritablePhrase}>placeholder</span></h3>
            <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                    I'm an enthusiastic problem solver.
                    I support my skills on technology to create aggregated value for individuals and business.
                </p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.primaryButton}>Download resume</button>
                <button className={styles.secondaryButton}>Contact with me</button>
            </div>
        </div>
    )
}
export default Presentation;