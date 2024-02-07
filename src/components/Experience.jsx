import React from "react";
import styles from "./Experience.module.css";

import data from "/data/skills.json";
import History from "/data/history.json";




export const Experience = () => {
    return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
        <div className={styles.skills}>
            {data.map((skill, id) => {
            return (
                <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                    <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
                </div>
            );
            })}
        </div>
        <ul className={styles.history}>
            {History.map((historyItem, id) => {
            return (
                <li key={id} className={styles.historyItem}>
                <img
                    src={historyItem.imageSrc}
                    alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails} loading="lazy">
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                    {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                    })}
                    </ul>
                </div>
                </li>
            );
            })}
        </ul>
        </div>
        <div className={styles.CvBtnContainer}>
        <a href="Document/Patrick_Zablocki_CV.pdf" download="CV" className={styles.CvBtn}>
            Download CV    
        </a>
        </div>
    </section>
    );
};
