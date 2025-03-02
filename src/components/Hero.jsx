import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
    const [text, setText] = useState("Hi I'm Patrick");

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) =>
                prevText === "Hi I'm Patrick" ? "Frontend Developer" : "Hi I'm Patrick"
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{text}</h1> 
                <p className={styles.description}>I'm a Frontend Web Developer, using JavaScript and React</p>
                <a href="mailto:PatrickZablocki@gmx.de" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/Hero.jpeg")}
                alt="Hero Image of me"
                loading="lazy"
                className={`${styles.heroImg} ${styles.rounded}`}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
