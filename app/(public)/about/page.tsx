"use client";

import { useState, useEffect } from "react";

import users from "_utils/json/profileCards.json";
import styles from "./page.module.scss";
import { PersonCard } from "_components/personCard/PersonCard";

export default About;

function About() {
  const [extended, setExtended] = useState(false);
  const [btnText, setbtnText] = useState("ЕЩЁ...");

  const handleClick = () => {
    setExtended((prevState) => !prevState);
  };

  useEffect(() => {
    extended ? setbtnText("СКРЫТЬ...") : setbtnText("ЕЩЁ...");
  }, [extended]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.about_text}>
          Амичи — бюро дизайна, которое базируется в Москве. Бюро реализует
          проекты различных масштабов: от визитки до брендинга; и различных
          типов: от диджитал платформ до крупных инсталляций. Амичи сочетает
          искусство и технологии; практический опыт, с вниманием к предпочтениям
          и задачам клиента; профессионализм с драйвом.
        </p>
        <p className={styles.about_text}>
          Мы — молодое креативное бюро графического дизайна. Работаем с 2023
          года и за это время уже собрали качественное портфолио, которым
          гордимся. Мы готовы работать с Вами вне зависимости от сферы
          деятельности Вашего бренда, пожеланий и местоположения.
        </p>
        {!extended && <input
              type="submit"
              className={styles.moreBtn}
              value={btnText}
              onClick={handleClick}
          />

        }
        {extended && (
            <div className={styles.about_anim}>
              <p className={styles.about_text}>
              Многообразие условий сотрудничества и типологий заданий, над
              которыми работает бюро, позволяет переосмысливать традиционный
              подход и предлагать новые, нетипичные решения как в практической
              работе, так и в исследовательской деятельности.
            </p>
            <p className={styles.about_text}>
              Основатель и генеральный директор Амичи — Лев Савенко. Лев и ранее
              работал над проектами самостоятельно, отправной точкой для
              создания собственного бизнеса стала уверенность в своих навыках и
              знаниях, наработанная клиентская база и желание работать над
              большими проектами. Так, ему удалось собрать вокруг себя таких же
              профессионалов, всю нашу команду объединяет любовь к своему делу и
              готовность сворачивать горы ради впечатляющего результата.
            </p>
            <p className={styles.about_text}>Мы — бюро довольных клиентов :)</p>
          </div>
        )}
        <h2 className={styles.teamBlock_header}>Команда</h2>
        <div className={styles.personCards}>
          {users.map((user) => (
            <PersonCard
              key={user.id}
              name={user.name}
              role={user.role}
              imgUrl={user.imgUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
