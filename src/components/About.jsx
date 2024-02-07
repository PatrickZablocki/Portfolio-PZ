import React from "react";

import styles from "./About.module.css";

import {getImageUrl} from "../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/AboutMe.jpg")} alt="Picture About from Me" 
                loading="lazy"
                className={styles.aboutImage}
                />
                <div className={styles.contentContainer}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursor/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3 >Frontend Devoloper</h3>
                        <p>I'm a frontend Devoloper </p><br/>
                        <h4>In my course I learned.</h4><br/>
                        <p>- Linux Ubuntu Terminal<br/>
                            -GitHub & Git<br/>
                            -HTML & CSS & (SCSS/SASS)<br/>
                            -Bootstrap<br/>
                            -JavaScript<br/>
                            -REACT & Node.js<br/>
                            <br/>
                        </p>
                        <h4>Knowledge that I have acquired myself</h4><br/>
                        <p>-Tailwind<br/>
                            -TypeScript
                        </p>
                    </div>
                    </li>
                </ul>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img src={getImageUrl("server/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Devoloper</h3>
                        <p>I'm a Backend Devoloper </p><br/>
                        <h4>In my course I learned.</h4><br/>
                        <p>Still learning</p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    );
};