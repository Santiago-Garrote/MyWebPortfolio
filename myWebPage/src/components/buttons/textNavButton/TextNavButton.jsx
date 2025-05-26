import React from 'react';
import styles from './TextNavButton.module.scss';
import { Link } from 'react-scroll';

function TextNavButton({to, text}) {
    return (
        <Link
            className={styles.textNavButton}
            activeClass={styles.active}
            to={to}
            smooth={true}
            duration={500}
            spy={true}
        >
            {text}
        </Link>
    )
}
export default TextNavButton;