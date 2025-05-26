import React from 'react';
import styles from './Presentation.module.scss';
import PrimaryButton from "../buttons/primary/PrimaryButton.jsx";
import SecondaryButton from "../buttons/secondary/SecondaryButton.jsx";

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
                <PrimaryButton text="Dowload resume" onClick={() => {}}/>
                <SecondaryButton text="Contact me" onClick={() => {}}/>
            </div>
        </div>
    )
}
export default Presentation;