'use client';

import Image from 'next/image';
import styles from './projectCard.module.scss'

export { ProjectCard };

function ProjectCard({ name, authors, imgUrl }: IProject) {

  return (
    <div className={styles.projectCard}>
      <Image 
        src={imgUrl}
        alt={name}
        loading='lazy'
        sizes="100vw"
        style={{
            width: '100%',
            height: 'auto',
        }}
        width={1284}
        height={634}
      />
      <span className={styles.projectCard_name}>Проект: { name }</span>
      <span className={styles.projectCard_authors}>Работали: { authors }</span>
    </div>  
  );
}

interface IProject {
  name: string
  authors: string
  imgUrl: string
}