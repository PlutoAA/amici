"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image, { StaticImageData } from "next/image";
import formImg from "_utils/imgs/contactForm.png";

import styles from "./contactForm.module.scss";
import {useFormService} from "../../_services/useFormService";

export { ContactForm };

interface IFormInput {
  company: string;
  firstName: string;
  description: Text;
  phoneNumber: string;
  email: string;
}

function ContactForm() {
  const formService = useFormService();
  const { register, handleSubmit } = useForm();

  async function onSubmit({ company, firstName, description, phoneNumber, email }: any) {
    await formService.send({'summary': `Заявка от ${company}`, 'queue': "HJHJJHJH", 'description': `ФИО: ${firstName} \n email: ${email} \n телефон: ${phoneNumber} \n Описание: ${description} `})
  }

  return (
    <div className={styles.contactForm}>
      <Image src={formImg} alt="Contact form" loading="lazy" />
      <div>
        <p className={styles.contactForm__text}>
          Многообразие условий сотрудничества и типологий зданий, над которыми
          работает бюро, позволяет переосмысливать традиционный подход и
          предлагать новые, нетипичные решения для сложных задач и делать лучше
          повседневную жизнь людей с помощью дизайна.
        </p>
        <p className={styles.contactForm__text}>
          Для начала работы Вам достаточно рассказать о своем проекте, указать
          контакты, и мы свяжемся, чтобы все обсудить.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm__inputs}>
          <input {...register("company")} placeholder="Название компании" className={styles.contactForm__input} required />
          <input {...register("firstName")} placeholder="Имя" className={styles.contactForm__input} required />
          <input {...register("description")} placeholder="Опишите ваш проект и приблизительный бюджет" className={styles.contactForm__input} required />
          <input {...register("phoneNumber")} placeholder="Телефон" className={styles.contactForm__input} required />
          <input {...register("email")} placeholder="Почта" className={styles.contactForm__input} required />
          <input type="submit" value="Отправить заявку" className={styles.contactForm__btn}/>
        </form>
      </div>
    </div>
  );
}
