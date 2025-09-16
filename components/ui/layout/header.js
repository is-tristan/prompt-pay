"use client";

// Next
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/ui/header/header.module.scss";

// Components
import Buttons from "@/components/ui/reusables/buttons";

export default function Header() {

    const logo = "/logos/logo-light.svg";

    const links = [
        { href: "/", label: "Home" },
        {
            href: "#", label: "Products", class: "hasSubMenu", sublinks: [
                { href: "/products/cover-flex", label: "Cover Flex" },
                { href: "/products/cover-flex", label: "Cover Flex" },
                { href: "/products/cover-flex", label: "Cover Flex" },
                { href: "/products/cover-flex", label: "Cover Flex" },
                { href: "/products/cover-flex", label: "Cover Flex" },
            ]
        },
        { href: "/careers", label: "Careers" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    if (typeof window !== "undefined") window.addEventListener("scroll", () => {
        const onHeaderScroll = () => {
            const header = document.getElementById("header");
            if (window.scrollY > 50) {
                header.classList.add(`${styles.active}`);
            } else {
                header.classList.remove(`${styles.active}`);
            }
        }

        window.innerWidth >= 1200 ? onHeaderScroll() : window.removeEventListener("scroll", onHeaderScroll);
    });

    return (

        <header id="header" className={styles.header} role="banner">

            <div className={`container ${styles.headerContainer} light`}>

                <div className={styles.logo}>

                    <Link href="/" aria-label="Home">

                        <Image src={logo} alt="Prompt Pay Capital Logo" width={128} height={48} style={{ objectFit: "contain" }} priority />

                    </Link>

                </div>

                <nav className={`hidden-s hidden-m ${styles.desktopMenu} ${styles.nav}`} role="navigation" aria-label="Main Navigation">

                    {links.map((link, index) => (

                        <div className={`${styles.navItem} ${link.class ? styles[link.class] : ""}`} key={index}>

                            <Link href={link.href} className={`${styles.navLink}`}>

                                {link.label}

                            </Link>

                            {link.sublinks && (

                                <div className={styles.subMenu}>

                                    {link.sublinks.map((sublink, subIndex) => (

                                        <Link href={sublink.href} className={styles.subMenuLink} key={subIndex}>

                                            {sublink.label}

                                        </Link>

                                    ))}

                                </div>

                            )}

                        </div>

                    ))}

                </nav>

                <div className={`hidden-s hidden-m ${styles.menuCta}`}>

                    <Buttons btnOneText="Book a call" btnOneLink="#" btnOneClass="primary menuBtn hasAnimation" />

                </div>

            </div>

        </header>

    );
}