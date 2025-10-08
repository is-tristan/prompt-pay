"use client";

// React & Next
import { useState } from "react";
import Link from "next/link";

// Icons
import { Close } from "@carbon/react/icons";

// Styles
import styles from "@/styles/ui/layout/mobile-menu.module.scss";

// Product
import productItems from "@/data/products.json";
import featureItems from "@/data/features.json";

export default function MobileMenu({ isOpen, onClose }) {

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  const menuItems = [
    { href: "/", label: "Home" },
    {
      href: "#",
      label: "Products",
      class: "hasSubMenu",
      sublinks: [
        ...productItems[0].clover.map((item) => ({
          label: item.productName,
          href: item.slug,
        })),
        ...productItems[0].worldpay.map((item) => ({
          label: item.productName,
          href: item.slug,
        }))
      ],
    },
    {
      href: "#",
      label: "Features",
      class: "hasSubMenu",
      sublinks: [
        ...featureItems[0].clover.map((item) => ({
          label: item.label,
          href: item.slug,
        })),
        ...featureItems[0].worldpay.map((item) => ({
          label: item.label,
          href: item.slug,
        }))
      ],
    },
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (

    <>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`} role="dialog" aria-modal="true" >

        <div className={styles.mobileMenuContainer}>

          <button className={styles.mobileMenuClose} onClick={onClose}><Close size={24} /></button>

          {menuItems.length > 0 && (

            <div className={styles.navItems}>

              {menuItems.map((link, index) => (

                <div className={`${styles.navItem} ${link.class ? styles[link.class] : ""}`} key={index} >

                  <Link href={link.href} className={`${styles.navLink} ${link.sublinks ? styles.hasSubMenu : ""}`} onClick={link.sublinks ? (e) => { e.preventDefault(); toggleSubMenu(index); } : onClose} > {link.label} </Link>

                  {link.sublinks && (

                    <div className={styles.subMenu} onClick={toggleSubMenu} style={{ display: openSubMenu === index ? "flex" : "none", }} >

                      {link.sublinks.map((sublink, subIndex) => (

                        <Link href={sublink.href} onClick={onClose} className={styles.subMenuLink} key={subIndex}>{sublink.label}</Link>

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

  );

}
