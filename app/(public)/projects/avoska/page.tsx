'use client';

import styles from './page.module.scss'
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Project;

function Project() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"AVOS’KA"} subtitle={"Вариант баннерной рекламы"}
                         imgUrl={"/imgs/projects/avoska/0.png"} width={970} height={971}>
                <p>Cовременный магазин сумок “Avos’ka” представляет собой уникальное сочетание стиля, качества и функциональности. Магазин предлагает широкий ассортимент сумок различных стилей и цветов, от повседневных до вечерних, от спортивных до деловых. Основная идея магазина “Avos’ka” - предложить покупателям не просто сумку, а стильный аксессуар, который подчеркнет их индивидуальность и поможет им выразить свой уникальный стиль. </p>
                <br/>
                <p>Перед нами стояли задачи: разработать брендинг и айдентику, подготовить сайт/интернет-магазин
                    для продажи этого товара</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <ImageWithSubtitle imgUrl="/imgs/projects/avoska/1.png" subtitle="Брендинг и айдентика" width={1812}
                                   height={998}/>
                <div className={styles.gallery__row}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/avoska/2.png" subtitle=""
                                       width={689} height={632}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/avoska/3.png" subtitle="" width={1059}
                                       height={632}/>
                </div>
                <div className={styles.gallery__row}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/avoska/4.png" subtitle=""
                                       width={659} height={611}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/avoska/5.png" subtitle=""
                                       width={483} height={611}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/avoska/6.png" subtitle=""
                                       width={652} height={611}/>
                </div>
                <ImageWithSubtitle imgUrl="/imgs/projects/avoska/7.png" subtitle="Сайт"
                                   width={1812} height={864}/>
            </div>
        </div>
    );
}
