import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../utils";

export const About = () => {
    // Zustand für das aktuelle Slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array mit den verschiedenen Abschnitten
    const slides = [
        {
            title: "Frontend Developer",
            skills: [
                "HTML & CSS & (SCSS/SASS)",
                "JavaScript"
            ],
            acquiredSkills: ["TypeScript (Formerly used)"],
        },
        {
            title: "Backend Developer",
            skills: ["Express.js", "MongoDB"],
            acquiredSkills: ["NodeJS"],
        },
        {
            title:"Frameworks",
            skills: ["React", "Bootstrap"],
            acquiredSkills: ["Tailwind"]
        },
        {
            title: "Tools",
            skills: ["Git", "VS Code", "NPM", "Linux", "Vite", "GitHub"],
            acquiredSkills: ["MacOS", "XCode", "Vercel"]
        }
    ];

    // Automatisches wechseln der Slides alle 5 Sekunden
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Funktion zum Wechseln der Slides durch Klick
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Dynamisch angepasster Text basierend auf dem Titel
    const getIntroText = (title) => {
        switch(title) {
            case "Frontend Developer":
                return "I'm a frontend developer with skills in building user interfaces.";
            case "Backend Developer":
                return "I'm a backend developer focused on server-side technologies.";
            case "Frameworks":
                return "I have experience with various frameworks to streamline development.";
            case "Tools":
                return "I use various tools to enhance productivity and version control.";
            default:
                return "I'm a passionate developer continuously learning new technologies.";
        }
    };

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.carousel}>
                    <div
                        className={styles.slideContainer}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div className={styles.slide} key={index}>
                                <div className={styles.text}>
                                    <h3>{slide.title}</h3>
                                    {}
                                    <p>{getIntroText(slide.title)}</p>
                                    <h4>In my course I learned:</h4>
                                    <ul>
                                        {slide.skills.map((skill, idx) => (
                                            <li key={idx}>{skill}</li>
                                        ))}
                                    </ul>
                                    <h4>Knowledge that I have acquired myself:</h4>
                                    <ul>
                                        {slide.acquiredSkills.map((skill, idx) => (
                                            <li key={idx}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.prevButton} onClick={handlePrev}>
                        &lt;
                    </button>
                    <button className={styles.nextButton} onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};
