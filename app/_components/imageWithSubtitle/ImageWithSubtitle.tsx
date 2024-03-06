'use client';

import styles from './imageWithSubtitle.module.scss'
import Image from "next/image";

export { ImageWithSubtitle };

function ImageWithSubtitle({ imgUrl, subtitle, width, height }: any) {

    return (
        <div className={styles.imageWithSubtitle}>
            <Image
                src={imgUrl}
                alt={subtitle}
                loading='lazy'
                width={width}
                height={height}
            />
            <span className={styles.imageWithSubtitle__subtitle}>{subtitle}</span>
        </div>
    );
}