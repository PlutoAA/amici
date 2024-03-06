'use client';

import styles from './page.module.scss'
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Project;

function Project() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"Запланируй свой"} subtitle={"Главная страница сайта"}
                         imgUrl={"/imgs/projects/zaplaniruySvoi/0.png"} width={970} height={971}>
                <p>Проект, позволяющий людям расти и развиваться посредством планирования.</p>
                <br/>
                <p>Перед нами стояли задачи: разработать дизайн календарей для печати, а также подготовить
                    интернет-магазин для продажи этого товара.</p>
                <br/>
                <p>В данном проекте отошли от понимания календаря привычном его представлении: многостраничный блокнот,
                    на котором написаны дни и месяцы. Самый распространенный вариант - двенадцать листов, скрепленных
                    кольцами. Места для записей там почти нет, из-за чего его невозможно использовать как инструмент
                    планирования. Да и дальше чем на месяц заглянуть крайне неудобно.</p>
                <br/>
                <p>Календари «запланируй свой» позволяют увидеть буквально весь год. И оказывается, что это не так уж и
                    много! Всего один лист А0. Всего 365 дней.</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <div className={styles.gallery__col}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/zaplaniruySvoi/1.png" subtitle="Флаер" width={835}
                                       height={892}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/zaplaniruySvoi/3.png" subtitle="Офисный  календарь"
                                       width={835} height={571}/>
                </div>
                <div className={styles.gallery__col}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/zaplaniruySvoi/2.png" subtitle="Личный  календарь" width={922}
                                       height={619}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/zaplaniruySvoi/4.png" subtitle="Календарь для ученика"
                                       width={922} height={844}/>
                </div>
            </div>
        </div>
    );
}
