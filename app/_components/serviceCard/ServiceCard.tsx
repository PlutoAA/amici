'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './serviceCard.module.scss'

export { ServiceCard };

function ServiceCard({ name, imgUrl }: IService) {

  return (
    <div className={styles.serviceCard}>
      <Image 
        src={imgUrl}
        alt={name}
        loading='lazy'
      />
      <span className={styles.serviceCard_name}>{ name }</span>
    </div>  
  );
}

interface IService {
  name: string
  imgUrl: StaticImageData
}