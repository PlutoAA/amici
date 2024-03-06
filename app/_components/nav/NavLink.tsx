'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './nav.module.scss'

export { NavLink };

function NavLink({ children, href, exact, ...props }: INavLink) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ` ${styles.active}`;
    }

    return <Link href={href} {...props}>{children}</Link>;
}

interface INavLink {
    children: React.ReactNode,
    href: string,
    exact?: boolean,
    [key: string]: any
}