'use client';

import styles from "./page.module.scss"
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Research;

function Research() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"“Зелёный”"} subtitle={""}
                         imgUrl={"/imgs/researches/green/0.png"} width={573} height={573}>
                <p>Зелёный цвет у большинства ассоциируется с природой ― листвой кустарников или деревьев, сочной травой и свежестью. Ярко-зелёный ― весна, глубокий зелёный ― лето. Уходящие в бирюзу оттенки напоминают о море. Зелёный цвет – один из главенствующих в природе, поэтому он воспринимается максимально органично при использовании в дизайне. В зависимости от тона он может быть как холодным, так и теплым, оказывать расслабляющее и успокаивающее действие. По статистике, 14% мужчин и столько же женщин выбирают зеленый как свой любимый цвет.
                </p>
                <br/>
                <p>В отличие от других цветов спектра, зеленый воспринимается непосредственно сетчаткой глаза без какой-либо рефракции. Считается, что он обладает целительными свойствами, способностью успокаивать и освежать. Чем больше приглушен зеленый цвет, тем выше его успокаивающие свойства. Он вдохновляет на рост, вызывает счастливые эмоции, способствует формированию приятного чувства защищенности и безопасности. Например, зеленый сигнал светофора означает, что путь открыт, можно смело идти и не бояться препятствий. Или аптечный крест на фасаде, также ассоциируется с помощью и защитой. И напротив, зеленые оттенки символизируют жестокий материальный мир, деньги и связанные с ними проблемы. Сложный, непостижимый цвет удивительным образом сочетает в себе положительные и отрицательные силы природы.</p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/1.png" width={1805} height={1104}/>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/2.png" width={1805} height={1341}/>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/3.png" width={1805} height={722}/>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/4.png" width={1805} height={1287}/>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/5.png" width={1805} height={2961}/>
                <ImageWithSubtitle imgUrl="/imgs/researches/green/6.png" width={1805} height={1108}/>
            </div>
        </div>
    );
}
