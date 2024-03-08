'use client';

import Image from 'next/image';
import styles from './personCard.module.scss'

export { PersonCard };

function PersonCard({ name, role, imgUrl }: IUser) {

  return (
    <div className={styles.personCard}>
      <Image 
        src={imgUrl}
        alt={name}
        width={333}
        height={425}
        loading='lazy'
      />
      <span className={styles.personCard_role}>{ role },</span>
      <span className={styles.personCard_name}>{ name }</span>
    </div>  
  );
}

interface IUser {
  name: string
  role: string
  imgUrl: string
}