"use client";

// React & Next
import { useState } from 'react';
import Link from 'next/link';

// Styles
import styles from "@/styles/ui/layout/mobile-menu.module.scss";

// Icons
import { Close } from '@carbon/react/icons';

export default function MobileMenu({ isOpen, onClose, menuItems = [] }) {

    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (index) => {
        if (openSubMenu === index) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(index);
        }
    };

    return (

        <>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`} role="dialog" aria-modal="true">

                <div className={styles.mobileMenuContainer}>

                    <button className={styles.mobileMenuClose} onClick={onClose}>

                        <Close size={24} />

                    </button>

                    {menuItems.length > 0 && (

                        <div className={styles.navItems}>

                            {menuItems.map((link, index) => (

                                <div className={`${styles.navItem} ${link.class ? styles[link.class] : ""}`} key={index}>

                                    <Link href={link.href} className={`${styles.navLink}`} onClick={link.sublinks ? (e) => { e.preventDefault(); toggleSubMenu(index); } : onClose}>

                                        {link.label}

                                    </Link>

                                    {link.sublinks && (

                                        <div className={styles.subMenu} onClick={toggleSubMenu} style={{ display: openSubMenu === index ? 'flex' : 'none' }}>

                                            {link.sublinks.map((sublink, subIndex) => (

                                                <Link href={sublink.href} className={styles.subMenuLink} key={subIndex}>

                                                    {sublink.label}

                                                </Link>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </>

    )
}