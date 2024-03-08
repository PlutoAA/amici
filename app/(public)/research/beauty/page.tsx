'use client';

import styles from "./page.module.scss"
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";

export default Research;

function Research() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"Почему наш мозг считает это красивым"} subtitle={""}
                         imgUrl={"/imgs/researches/beauty/0.png"} width={573} height={573}>
                <p>Существует ли красота? Или это очередная иллюзия, создаваемая нашим мозгом?
                    Мрт покажет: мозг будто бы пульсирует в зоне левой дорсолатеральной префронтальной коры, когда вы видите нечто красивое в вашем понимании. Это нам доказывает –
                    на нейрофизиологическом уровне красота существует.
                </p>
                <br/>
                <p>Уверены, что вы согласитесь, что многое из того, что конкретно вы находите красивым,
                    в высшей степени субъективно. Однако ученые, которые в ходе исследований опросили большое количество людей и проанализировали самые популярные в мире произведения музыки, искусства и архитектуры, выявили общие черты среди вещей, которые мы находим прекрасными. Что же наш мозг находит красивым?</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <object height="1080" className={styles.pdf} data="/imgs/researches/beauty/Почему%20наш%20мозг%20считает%20это%20красивым.pdf" type="application/pdf">
                    <div>No online PDF viewer installed</div>
                </object>
            </div>
        </div>
    );
}
