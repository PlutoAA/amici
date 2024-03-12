"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import formImg from "_utils/imgs/contactForm.png";
import styles from "./contactForm.module.scss";
import { useFormService } from "../../_services/useFormService";
import { toast } from "react-toastify";

export { ContactForm };

interface IFormInput {
  company: string;
  firstName: string;
  description: string;
  phoneNumber: string;
  email: string;
}

function ContactForm() {
  const formService = useFormService();
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    setValue,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      await formService.send({
        summary: `Заявка от ${data.company}`,
        queue: "HJHJJHJH",
        description: `ФИО: ${data.firstName} \n email: ${data.email} \n телефон: ${data.phoneNumber} \n Описание: ${data.description} `,
      });
      resetField("company");
      resetField("firstName");
      resetField("description");
      resetField("phoneNumber");
      resetField("email");
    } catch (error) {
      toast.error("Упс... Что-то пошло не так! ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      toast.success(
        "Ваш зпрос обрабатывается! Скоро мы с вами свяжемся для уточнения деталей! ",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactForm__img}>
        <Image src={formImg} alt="Contact form" loading="lazy" />
      </div>
      <div>
        <p className={styles.contactForm__text}>
          Многообразие условий сотрудничества и типологий заданий, над которыми
          работает бюро, позволяет переосмысливать традиционный подход и
          предлагать новые, нетипичные решения для сложных задач и делать лучше
          повседневную жизнь людей с помощью дизайна.
        </p>
        <p className={styles.contactForm__text}>
          Для начала работы Вам достаточно рассказать о своем проекте, указать
          контакты, и мы свяжемся, чтобы все обсудить.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactForm__inputs}
        >
          <input
            {...register("company")}
            placeholder="Название компании"
            className={styles.contactForm__input}
            required
          />
          <input
            {...register("firstName")}
            placeholder="Имя"
            className={styles.contactForm__input}
            required
          />
          <input
            {...register("description")}
            placeholder="Опишите ваш проект и приблизительный бюджет"
            className={styles.contactForm__input}
            required
          />
          <input
            {...register("phoneNumber")}
            type="tel"
            pattern="/^+7\d{10}$/"
            placeholder="Телефон (+7xxxxxxxxxx)"
            className={styles.contactForm__input}
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Почта"
            className={styles.contactForm__input}
            required
          />
          <input
            type="submit"
            value="Отправить заявку"
            className={styles.contactForm__btn}
          />
        </form>
      </div>
    </div>
  );
}
