'use client';

import { useEffect } from 'react';
import { Video } from '_components/video/Video';
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
            <div className={styles.video}>
                <Video width={1920} height={1000} videoUrl='/anims/services.mp4'/>
            </div>
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
