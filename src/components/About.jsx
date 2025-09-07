import React, { useState, useEffect } from "react";
import styles from "./About.module.css";

export const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const slides = [
        { title: "Frontend Developer", skills: ["HTML & CSS & (SCSS/SASS)", "JavaScript", "React"] },
        { title: "Backend Developer", skills: ["Express.js", "MongoDB", "NodeJS", "NextJS"] },
        { title: "Frameworks", skills: ["Tailwind", "Bootstrap"] },
        { title: "Tools", skills: ["Git", "VS Code", "NPM", "Linux", "Vite", "GitHub","MacOS", "XCode", "Vercel"] },
    ];

    // Prüfen, ob Mobile
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Automatisches Swipen nur auf Mobile
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isMobile, slides.length]);

    const handlePrev = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    const handleNext = () => setCurrentSlide(prev => (prev + 1) % slides.length);

    const getIntroText = (title) => {
        switch(title) {
            case "Frontend Developer": return "I'm a frontend developer with skills in building user interfaces.";
            case "Backend Developer": return "I'm a backend developer focused on server-side technologies.";
            case "Frameworks": return "I have experience with various frameworks to streamline development.";
            case "Tools": return "I use various tools to enhance productivity and version control.";
            default: return "I'm a passionate developer continuously learning new technologies.";
        }
    };

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.carousel}>
                <div
                    className={styles.slideContainer}
                    style={{
                        transform: isMobile ? `translateX(-${currentSlide * 100}vw)` : "translateX(0)",
                        display: isMobile ? "flex" : "grid",
                        gridTemplateColumns: isMobile ? "none" : `repeat(${slides.length}, 1fr)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div className={styles.slide} key={index}>
                            <h3>{slide.title}</h3>
                            <p>{getIntroText(slide.title)}</p>
                            <h4>In my course I learned:</h4>
                            <ul>
                                {slide.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Buttons nur auf Mobile */}
                {isMobile && (
                    <>
                        <button className={styles.prevButton} onClick={handlePrev}>&lt;</button>
                        <button className={styles.nextButton} onClick={handleNext}>&gt;</button>
                    </>
                )}
            </div>
        </section>
    );
};


