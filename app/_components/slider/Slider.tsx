'use client';

import { useState } from 'react';
import Image from 'next/image';
import { imgs } from '_utils/imgs/Slider'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from './slider.module.scss'

export { Slider };

function Slider() {

  return (
    <Swiper 
      autoplay={{ delay: 10000 }}
      loop={true}
      modules={[Autoplay]}
      className={styles.slider}
    >
      { imgs.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Amici${index}`}
              loading='lazy'
            />
          </SwiperSlide>
        )
      }) }
    </Swiper>    
  );
}