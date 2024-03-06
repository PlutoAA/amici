'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './researchCard.module.scss'

export { ResearchCard };

function ResearchCard({ name, description, imgUrl }: IResearch) {

  return (
    <div className={styles.researchCard}>
      <Image 
        src={imgUrl}
        alt={name}
        loading='lazy'
      />
      <span className={styles.researchCard_name}>{ name }</span>
      <span className={styles.researchCard_description}>{ description }</span>
    </div>  
  );
}

interface IResearch {
  name: string
  description: string
  imgUrl: StaticImageData
}