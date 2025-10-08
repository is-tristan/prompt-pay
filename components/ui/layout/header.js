"use client";

// Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Styles
import styles from "@/styles/ui/layout/header.module.scss";
import mobileStyles from "@/styles/ui/layout/mobile-menu.module.scss";

// Components
import Buttons from "@/components/ui/reusables/buttons";
import MobileMenu from "@/components/ui/layout/header-parts/mobile-menu";
import ProductMenu from "@/components/ui/layout/header-parts/product-menu";
import FeatureMenu from "@/components/ui/layout/header-parts/feature-menu";

import { useState } from "react";

export default function Header() {

    const logo = "/logos/logo-light.svg";

    const desktopLinks = [
        { href: "/", label: "Home" },
        {
            href: "#",
            label: "Products",
            class: "hasMegaMenu",
            megaMenu: [
                { component: "ProductMenu" }
            ]
        },
        {
            href: "#",
            label: "Features",
            class: "hasMegaMenu",
            megaMenu: [
                { component: "FeatureMenu" }
            ]
        },
        { href: "/careers", label: "Careers" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [loadedMenus, setLoadedMenus] = useState({});

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    const handleMenuHover = (menuLabel) => {
        setHoveredMenu(menuLabel);
        // Mark this menu as loaded once it's hovered
        if (!loadedMenus[menuLabel]) {
            setLoadedMenus(prev => ({ ...prev, [menuLabel]: true }));
        }
    };

    const handleMenuLeave = () => {
        setHoveredMenu(null);
    };

    if (typeof window !== "undefined") window.addEventListener("scroll", () => {
        const onHeaderScroll = () => {
            const header = document.getElementById("header");
            if (window.scrollY > 50) {
                header.classList.add(`${styles.active}`);
            } else {
                header.classList.remove(`${styles.active}`);
            }
        }

        onHeaderScroll();
    });

    const pathname = usePathname();
    const isProductPage = pathname.includes("products") || pathname.includes("features");
    const headerClass = isProductPage ? styles.productHeader : "";

    return (

        <header id="header" className={`header ${styles.header} ${headerClass}`} role="banner">

            <div className={`container ${styles.headerContainer} light`}>

                <div className={styles.logo}>

                    <Link href="/" aria-label="Home">

                        <Image src={logo} alt="Prompt Pay Capital Logo" width={128} height={32} style={{ objectFit: "contain" }} priority />

                    </Link>

                </div>

                <nav className={`hidden-s hidden-m ${styles.desktopMenu} ${styles.nav}`} role="navigation" aria-label="Main Navigation">

                    {desktopLinks.map((link, index) => (

                        <div
                            className={`${styles.navItem} ${link.class ? styles[link.class] : ""}`}
                            key={index}
                            onMouseEnter={() => link.megaMenu && handleMenuHover(link.label)}
                            onMouseLeave={handleMenuLeave}
                        >

                            {link.megaMenu ? (

                                <>

                                    <Link href={link.href} className={`${styles.navLink}`} aria-haspopup="true" aria-expanded={hoveredMenu === link.label}>

                                        {link.label}

                                    </Link>

                                    {link.megaMenu && loadedMenus[link.label] && (

                                        <div className={`${styles.megaMenu}`}>

                                            {link.megaMenu.map((menuItem, subIndex) => (

                                                <div key={subIndex}>

                                                    {menuItem.component === "ProductMenu" && <ProductMenu />}

                                                    {menuItem.component === "FeatureMenu" && <FeatureMenu />}

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </>

                            ) : (

                                <Link href={link.href} className={`${styles.navLink}`}>

                                    {link.label}

                                </Link>

                            )}

                        </div>

                    ))}

                </nav>

                <div className={`hidden-s hidden-m ${styles.menuCta}`}>

                    <Buttons btnOneText="Book a call" btnOneLink="https://calendly.com/alex-promptpaycapital" target="_blank" btnOneClass="primary menuBtn hasAnimation" />

                </div>

                <div className={`hidden-l ${mobileStyles.navToggleContainer}`}>

                    <button
                        className={mobileStyles.navToggle}
                        aria-label="Open Menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobileMenu"
                        onClick={handleMobileMenuToggle}
                    >
                        <span className={mobileStyles.navLine} />
                        <span className={mobileStyles.navLine} />
                    </button>

                </div>

            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            />

        </header>

    );
}