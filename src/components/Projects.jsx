import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "/data/projects.json";
import styles from "./Projects.module.css";

const categorizedProjects = {
    frontend: projects.filter(project => project.category === "frontend"),
    backend: projects.filter(project => project.category === "backend"),
    fullstack: projects.filter(project => project.category === "fullstack"),
};

export const Projects = () => {
    return (
        <div className={styles.container}>
            <section className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Frontend</h2>
                <div className={styles.projectsGrid}>
                    {categorizedProjects.frontend.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>

            <section className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Backend</h2>
                <div className={styles.projectsGrid}>
                    {categorizedProjects.backend.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>

            <section className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Fullstack</h2>
                <div className={styles.projectsGrid}>
                    {categorizedProjects.fullstack.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};
