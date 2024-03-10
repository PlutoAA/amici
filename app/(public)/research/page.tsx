'use client';

import { useEffect } from 'react';
import { Video } from '_components/video/Video';
import { ResearchCard } from '_components/researchCard/ResearchCard';
import { researches } from '_utils/imgs/researches'
import styles from './page.module.scss'
import Link from 'next/link';

export default Research;

function Research() {

    useEffect(() => {
        setTimeout(function(){ window.location.hash = '#second';},3200);
      }, []);

    return (
        <>
            <div className={styles.video}>
                <Video width={"100%"} height={"auto"} videoUrl='/anims/research.mp4'/>
            </div>
            <div className={styles.container} id='second'>
                <div className={styles.researchCards} >
                    {researches.map((research, index) => (
                        <div key={index}>
                            <Link href={`${research.link}`}>
                                <ResearchCard name={research.name} description={research.description} imgUrl={research.imgUrl} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
