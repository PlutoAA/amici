'use client';

import styles from './projectInfo.module.scss'
import {TitleWithBtn} from "../titleWithBtn/TitleWithBtn";
import {ImageWithSubtitle} from "../imageWithSubtitle/ImageWithSubtitle";

export { ProjectInfo };

function ProjectInfo({ name, children, imgUrl, width, height, subtitle="" }: IProjectInfo) {

    return (
        <div className={styles.projectInfo}>
            <ImageWithSubtitle imgUrl={imgUrl} subtitle={subtitle} width={width} height={height}/>
            <div>
                <TitleWithBtn name={name} />
                <div className={styles.projectInfo__text}>
                    {children}
                </div>
            </div>
        </div>
    );
}

interface IProjectInfo {
    name: string
    children: any
    subtitle?: string
    imgUrl: string
    width: number
    height: number
}