'use client';

import { useState } from 'react';
import Image from 'next/image';
import aImg from '_utils/imgs/Subtract.svg'

import { NavLink } from '_components';
import styles from './nav.module.scss'
import Link from 'next/link';

export { Nav };

function Nav() {

    return (
        <nav className={styles.navbar}>
            <div className="">
                <Link href={"/"}>
                    <h1 className={styles.logo}>AMICI</h1>
                </Link>
            </div>
            <div className={styles.nav}>
                <NavLink href="/about" exact className={styles.nav_link}>О НАС</NavLink>
                <NavLink href="/projects" className={styles.nav_link}>ПРОЕКТЫ</NavLink>
                <NavLink href="/services" className={styles.nav_link}>УСЛУГИ</NavLink>
                <NavLink href="/research" className={styles.nav_link}>ИССЛЕДОВАНИЯ</NavLink>
            </div>
            <div className={styles.nav_lang}>
                <span>ru/en</span>
                <Image
                    src={aImg}
                    alt="A"
                />
            </div>
        </nav>
    );
}