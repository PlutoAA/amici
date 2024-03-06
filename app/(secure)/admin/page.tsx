'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useUserService } from '_services';
import { Spinner } from '_components';
import { Video } from '_components/video/Video';
import { Slider } from '_components/slider/Slider';

import styles from './page.module.scss'
import { SocialPopup } from '_components/socialsPopup/SocialPopup';

export default Home;

function Home() {
    const user = true;

    if (user) {
        return (
            <>
                <span>Adminka</span>
            </>
        );
    } else {
        return <Spinner />;
    }
}
