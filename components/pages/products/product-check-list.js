"use client";

// Icons
import { CheckmarkFilled } from "@carbon/react/icons";

// Framer Motion
import { motion } from "framer-motion";
// Next
import { usePathname } from "next/navigation";
// Styles
import styles from "@/styles/pages/products/product-checklist.module.scss";

export default function Productitems({ items = [] }) {
  const pathname = usePathname();
  const sanitizedItems = Array.isArray(items) ? items.filter(Boolean) : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <motion.div
      key={pathname} // Force re-animation on page changes
      className={`${styles.checkListitems}`}
      variants={sanitizedItems.length > 0 ? containerVariants : null}
      initial={sanitizedItems.length > 0 ? "hidden" : undefined}
      whileInView={sanitizedItems.length > 0 ? "visible" : undefined}
      viewport={{ once: true, amount: 0.35 }}
    >
      {sanitizedItems.length > 0 &&
        sanitizedItems.map((item, index) => {
          const itemKey = item.id ?? `${item.label ?? "item"}-${index}`;

          return (
            <motion.div
              key={itemKey}
              className={styles.checkListItem}
              variants={itemVariants}
            >
              <div className={styles.checkListIcon}>
                <CheckmarkFilled size={16} />
              </div>

              <div className={styles.checkListContent}>
                {item.label && <h3>{item.label}</h3>}

                {item.description && (
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                )}
              </div>
            </motion.div>
          );
        })}
    </motion.div>
  );
}
