'use client';

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
        sizes="100vw"
        style={{
            width: '100%',
            height: 'auto',
        }}
      />
      <span className={styles.serviceCard_name}>{ name }</span>
    </div>  
  );
}

interface IService {
  name: string
  imgUrl: StaticImageData
}