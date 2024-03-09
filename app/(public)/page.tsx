'use client';

import { Video } from '_components/video/Video';
import { Slider } from '_components/slider/Slider';
import { SocialPopup } from '_components/socialsPopup/SocialPopup';

import styles from './page.module.scss'

export default Home;

function Home() {
    return (
        <>
            <div className={styles.video}>
                <Video videoUrl="/anims/mainPage4.mp4" width={"100%"} height={80} />
            </div>
            <div className={styles.slider}>
                <Slider />
            </div>
            <SocialPopup />
        </>
    );
}
