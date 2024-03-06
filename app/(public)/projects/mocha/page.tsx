'use client';

import styles from './page.module.scss'
import {ProjectInfo} from "../../../_components/projectInfo/ProjectInfo";
import {ImageWithSubtitle} from "../../../_components/imageWithSubtitle/ImageWithSubtitle";

export default Project;

function Project() {
    return (
        <div className={styles.container}>
            <ProjectInfo name={"MOCHA"}
                         imgUrl={"/imgs/projects/mocha/0.png"} width={970} height={971}>
                <p>МOCHA - это современная кофейня, предлогающая широкий выбор кофе, чая и других напитков. Также в ней можно приобрести различные закуски, десерты и горячие блюда.</p>
                <br/>
                <p>Перед нами стояла задача разработать айдентику для кофейни. MOCHA -  напиток из кофе, шоколада и молока со взбитыми сливками, рожденный на северо-американском континенте, распространен и любим во всем мире. Наверное, поэтому он имеет множество названий: мокка, мокко, мокачино, и даже шоколадный латте. Айдентика кофейни вдохновлена данным напитком и азией. </p>
            </ProjectInfo>
            <div className={styles.gallery}>
                <ImageWithSubtitle imgUrl="/imgs/projects/mocha/1.png" width={1812}
                                   height={4331} />
                <ImageWithSubtitle imgUrl="/imgs/projects/mocha/2.png" width={1111}
                                   height={807}/>
            </div>
        </div>
    );
}
