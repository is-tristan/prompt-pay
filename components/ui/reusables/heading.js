"use client"

// Framer Motion
import { motion } from 'framer-motion';

export default function Heading({ className = "", eyebrow = "", title = "This is a Heading", text = "" }) {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (

        <motion.div
            className={`heading ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >

            {eyebrow && (
                <motion.div className="eyebrow" variants={itemVariants}>

                    <span>{eyebrow}</span>

                </motion.div>
            )}

            <motion.h2 variants={itemVariants}>{title}</motion.h2>

            {text && (

                <motion.p
                    variants={itemVariants}
                    dangerouslySetInnerHTML={{ __html: text }}
                />

            )}

        </motion.div>

    )

}