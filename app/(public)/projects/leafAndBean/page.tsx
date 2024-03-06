'use client';

import styles from './page.module.scss'
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Project;

function Project() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"leaf&bean"} subtitle={"Вариант баннерной рекламы"}
                         imgUrl={"/imgs/projects/leafBean/0.png"} width={970} height={971}>
                <p>Проект по созданию сервиса доставки правильного питания, который поможет Вам поддерживать здоровый образ жизни, экономить время и силы на приготовлении еды. leaf&bean предоставляет разнообразное меню, состоящее из вкусных и полезных блюд, разработанных опытными диетологами и поварами. Вы можете выбрать доставку в зависимости от вашей цели: похудение (количество калорий, которое вы хотите потреблять
                    в день) или просто вы хотите сэкономить время.</p>
                <br/>
                <p>Перед нами стояли задачи: разработать брендинг и айдентику, подготовить сайт/интернет-магазин
                    для продажи этого товара</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/1.png" subtitle="Брендинг и айдентика" width={1812}
                                   height={998}/>
                <div className={styles.gallery__row}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/2.png" subtitle="Варианты баннерной рекламы"
                                       width={900} height={681}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/3.png" subtitle="" width={681}
                                       height={681}/>
                </div>
                <div className={styles.gallery__row}>
                    <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/4.png" subtitle="Главная страница сайта"
                                       width={900} height={834}/>
                    <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/5.png" subtitle="Страница с наборами"
                                       width={900} height={741}/>
                </div>
                <ImageWithSubtitle imgUrl="/imgs/projects/leafBean/6.png" subtitle="Страница с выбором напитка"
                                   width={1812} height={1080}/>
            </div>
        </div>
    );
}
