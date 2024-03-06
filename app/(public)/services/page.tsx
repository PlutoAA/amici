'use client';

import { useEffect } from 'react';

import { Spinner } from '_components';
import { Video } from '_components/video/Video';
import { Slider } from '_components/slider/Slider';
import { SocialPopup } from '_components/socialsPopup/SocialPopup';

import { ContactForm } from '_components/contactForm/ContactForm';
import { ServiceCard } from '_components/serviceCard/ServiceCard';

import { services } from '_utils/imgs/services'
import styles from './page.module.scss'

export default Services;

function Services() {

    useEffect(() => {
        setTimeout(function(){ window.location.hash = '#second';},3200);
      }, []);

    return (
        <>
            <Video width={1920} height={1000} videoUrl='/anims/services.mp4'/>
            <div className={styles.container}>
                <div className={styles.services} id='second'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} imgUrl={service.img} name={service.name} />
                    ))}
                </div>
                <div className={styles.form}>
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
