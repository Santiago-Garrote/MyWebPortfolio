import React from 'react';
import styles from './Tag.module.scss';

function Tag({text}) {
    return (
        <p className={styles.tag}>{text}</p>
    )
}
export default Tag;