import React from "react";

import styles from "./About.module.css";

import {getImageUrl} from "../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/AboutMe.jpg")} alt="Picture About from Me"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursor/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Devoloper</h3>
                        <p>I'm a frontend Devoloper </p>
                    </div>
                    </li>
                </ul>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("server/serverIcon.png")} alt="server icon" />
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