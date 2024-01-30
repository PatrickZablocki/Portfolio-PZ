import React from "react";

import styles from "./About.module.css";

import ServerImage from "/public/serverIcon.png";
import CursorImage from "/public/cursorIcon.png";
import AboutMe from "/public/AboutMe.jpg";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={AboutMe} alt="Picture About from Me"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={CursorImage} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Devoloper</h3>
                        <p>I'm a frontend Devoloper </p>
                    </div>
                    </li>
                </ul>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={ServerImage} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Devoloper</h3>
                        <p>I'm a Backend Devoloper </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};