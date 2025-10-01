"use client";

// Framer Motion
import { motion } from "framer-motion";
// Next
import { usePathname } from "next/navigation";

export default function Heading({
  hasAnimation = true,
  level = "h2",
  className = "",
  eyebrow = "",
  title = "This is a Heading",
  text = "",
}) {
  const pathname = usePathname();

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
    <motion.div
      key={hasAnimation ? pathname : undefined}
      className={`heading ${className}`}
      variants={hasAnimation ? containerVariants : null}
      initial={hasAnimation ? "hidden" : null}
      whileInView={hasAnimation ? "visible" : null}
      viewport={{ once: true, amount: 0.45 }}
    >
      {eyebrow && (
        <motion.div className="eyebrow" variants={itemVariants}>
          <span>{eyebrow}</span>
        </motion.div>
      )}

      {level === "h1" && (
        <motion.h1
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h1>
      )}
      {level === "h2" && (
        <motion.h2
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h2>
      )}
      {level === "h3" && (
        <motion.h3
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h3>
      )}
      {level === "h4" && (
        <motion.h4
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h4>
      )}
      {level === "h5" && (
        <motion.h5
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h5>
      )}
      {level === "h6" && (
        <motion.h6
          variants={itemVariants}
          className={title.endsWith(".") ? "hasFullStop" : undefined}
        >
          {title}
        </motion.h6>
      )}

      {text && (
        <motion.p
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </motion.div>
  );
}
