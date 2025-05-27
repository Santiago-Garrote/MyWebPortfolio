import React from "react";
    import styles from "./NavBar.module.scss";
import TextNavButton from "../buttons/textNavButton/TextNavButton.jsx";

function NavBar() {
    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="MyLogo" className={styles.logo} />
            <div className={styles.options}>
                <TextNavButton to={"Home"} text={"Home"} />
                <TextNavButton to={"About"} text={"About"} />
                <TextNavButton to={"Projects"} text={"Projects"} />
                <TextNavButton to={"Skills"} text={"Skills"} />
                <TextNavButton to={"Connect"} text={"Connect"} />
            </div>
        </div>
    )
}
export default NavBar;