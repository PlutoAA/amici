'use client';

import styles from './page.module.scss'
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";
import Image from "next/image";
import {Video} from "../../../_components/video/Video";

export default Project;

function Project() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"Dynasty"} subtitle={""}
                         imgUrl={"/imgs/projects/dynasty/0.png"} width={970} height={971}>
                <p>Dynasty - магазин, который имеет широкий ассортимент товаров от ведущих мировых брендов, включая ракетки, мячи, кроссовки, одежду и аксессуары.</p>
                <br/>
                <p>Перед нами стояла задачи: разработать айдентику и сделать сайт </p>
                <Image src={"/imgs/projects/dynasty/man.png"} alt={"man"} width={711} height={711}/>
            </ProjectInfo>
            <div className={styles.gallery}>
                <div className={styles.gallery__row}>
                    <div>
                        <span className={styles.gallery__row__num}>01</span>
                        <span className={styles.gallery__row__title}>Шрифт/Цвет</span>
                    </div>
                    <ImageWithSubtitle imgUrl="/imgs/projects/dynasty/1.png" subtitle="" width={1494}
                                           height={713}/>
                </div>
                <div className={styles.gallery__row}>
                    <div>
                        <span className={styles.gallery__row__num}>02</span>
                        <span className={styles.gallery__row__title}>Лендинг</span>
                    </div>
                    <Video width={"1600"} height={900} videoUrl={"/anims/dynasty.mp4"}/>
                </div>
            </div>
        </div>
    );
}
