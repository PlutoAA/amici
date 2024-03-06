'use client';

import Link from "next/link";
import { ProjectCard } from '_components/projectCard/ProjectCard';

import projects from '_utils/json/projectCards.json'
import styles from './page.module.scss'

export default Projects;

function Projects() {
    return (
        <div className={styles.container}>
            {projects.map(project => (
                <div className={styles.projectCards} key={project.id}>
                    <Link href={`/projects/${project.link}`}>
                        <ProjectCard name={project.name} authors={project.authors} imgUrl={project.imgUrl} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
