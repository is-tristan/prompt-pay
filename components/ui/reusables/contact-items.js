"use client";

// Icons
import { Email, Location, PhoneFilled, Time } from "@carbon/react/icons";

// Motion
import { motion } from "framer-motion";
// Next
import { usePathname } from "next/navigation";

// Styles
import styles from "@/styles/ui/reusables/contact-items.module.scss";

export default function ContactItems({
  className = "",
  hasAddress = false,
  hasHours = false,
}) {
  const pathname = usePathname();

  const contactItems = [
    {
      id: 1,
      class: "email",
      icon: <Email />,
      info: "info@promptpaycapital.com",
      link: "mailto:info@promptpaycapital.com",
    },
    {
      id: 2,
      class: "phone",
      icon: <PhoneFilled />,
      info: "+44 (0)203 355 5615",
      link: "tel:+442033555615",
    },
    {
      id: 3,
      class: `hours ${hasHours ? "" : "hidden"}`,
      icon: <Time />,
      info: "Mon-Fri 9am-5pm",
      link: null,
    },
    {
      id: 4,
      class: `address ${hasAddress ? "" : "hidden"}`,
      icon: <Location />,
      info: "Based in: The United Kingdom",
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (

    <motion.div key={pathname} className={`${styles.contactItems} ${className ? className : undefined}`} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>

      {contactItems.map((item) => (

        <motion.div key={item.id} className={`${styles.contactItem} ${item.class ? item.class : undefined}`} variants={itemVariants} >

          {item.link && <a href={item.link} />}

          <div className={styles.contactItemIcon}>{item.icon}</div>

          <div className={styles.contactItemContent}>

            <h4> {item.id === 1 ? "Email Address" : item.id === 2 ? "Phone Number" : item.id === 3 ? "Working Hours" : item.id === 4 ? "Office Address" : null} </h4>

            <span>{item.info}</span>

          </div>

        </motion.div>

      ))}

    </motion.div>

  );

}
