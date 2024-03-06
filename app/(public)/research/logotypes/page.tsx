'use client';

import styles from "./page.module.scss"
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Research;

function Research() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"Использование графики в логотипах"} subtitle={""}
                         imgUrl={"/imgs/researches/logotypes/0.png"} width={573} height={573}>
                <p>Использование графики в логотипах играет важную роль в создании узнаваемого
                    и запоминающегося бренда. Графика может быть использована для передачи определенных значений, эмоций
                    и ассоциаций, а также для создания уникального визуального образа компании.
                </p>
                <br/>
                <p> В логотипах часто используются различные графические элементы, такие как иллюстрации, символы,
                    геометрические фигуры, абстрактные формы и т.д. Эти элементы могут быть использованы для
                    подчеркивания основной идеи бренда, его ценностей, целей или специфики деятельности.</p>
                <br/>
                <p>Существует определенный набор правил, который помогает графическим
                    дизайнерам в разработке логотипов. В этом исследовании приведены данные,
                    основанные на научной литературе, позволяющие проанализировать использование
                    графики в логотипах.</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <object height="1080" className={styles.pdf} data="/imgs/researches/logotypes/Использование графики в логотипах.pdf" type="application/pdf">
                    <div>No online PDF viewer installed</div>
                </object>
            </div>
        </div>
    );
}
