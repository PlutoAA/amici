"use client"
import { useState } from 'react';
import styles from './burgerMenu.module.scss'
import Bar from "../bar/Bar";
import {NavLink} from "../nav/NavLink";
import Link from "next/link";

const BurgerMenu = () => {
  const [isCollapsed, setIsCollapse] = useState(true)

  const toggleCollapse = () => {
    setIsCollapse((prev) => !prev)
  }

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.header} >
          <Link href={"/"}>
              <h1 className={styles.logo}>AMICI</h1>
          </Link>
        <button onClick={toggleCollapse} className={styles.burgerBtn}>
          <Bar />
        </button>
      </div>
        <div className={styles.menu} data-collapse={isCollapsed}>
            <NavLink href="/about" exact className={styles.nav_link} onClick={toggleCollapse}>О НАС</NavLink>
            <NavLink href="/projects" className={styles.nav_link} onClick={toggleCollapse}>ПРОЕКТЫ</NavLink>
            <NavLink href="/services" className={styles.nav_link} onClick={toggleCollapse}>УСЛУГИ</NavLink>
            <NavLink href="/research" className={styles.nav_link} onClick={toggleCollapse}>ИССЛЕДОВАНИЯ</NavLink>
        </div>
    </div>
  );
};

export default BurgerMenu
