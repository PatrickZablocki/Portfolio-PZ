import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../utils";
// import HeroImage from "/public/Hero.jpeg";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Patrick</h1>
                <p className={styles.description}>I'm a Frontend Web Devoloper,
                using React and Node.js</p>
                <a href="mailto:PatrickZablocki@gmx.de" className={styles.contactBtn}>
                    Contact Me
                    </a>
            </div>
            <img src={getImageUrl("hero/Hero.jpeg")} alt="Hero Image of me" className= {`{styles.heroImg} ${styles.rounded}`}/>
            <div className={StyleSheet.topBlur}/>
            <div className={StyleSheet.bottomBlur}/>
        </section>
    )
};