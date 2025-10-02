"use client";

// Framer Motion
import { motion } from "framer-motion";

// Next & React
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/ui/sections/compare-payment-providers.module.scss";

// Components
import Heading from "../reusables/heading";

// Data
import providers from "@/data/payment-providers.json";

// SVG Icons as Components
const CheckIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="#d7ffb6" xmlns="http://www.w3.org/2000/svg" > <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" /> </svg>);
const XIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="#ff7d7d" xmlns="http://www.w3.org/2000/svg" > <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" /> </svg>);

export default function ComparePaymentProvidersSection({ containerClassName = "" }) {

  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(providers[0].competitorName);

  // Animation variants
  const leftColumnVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const rightColumnVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Scroll to the tab content
    setTimeout(() => {
      const activeContent = document.querySelector(
        `.${styles.tabItems} [data-name="${tabName}"]`
      );
      if (activeContent) {
        if (window.innerWidth < 1200) {
          activeContent.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          activeContent.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }, 100);
  };

  return (

    <section className={`row ${styles.comparePaymentProviders}`}>

      <div className={`container centered noPaddingBottom comparePaymentProvidersContainer ${styles.sectionHeader} ${containerClassName ? containerClassName : undefined}`}>

        <Heading
          level="h2"
          className="hasFullStop"
          eyebrow="Learn more"
          title="Compare your payments provider instantly"
        />

        <div className={`container tabNav ${styles.tabNav}`}>

          {providers.map((provider) => (

            <button key={provider.id}
              onClick={() => handleTabClick(provider.competitorName)}
              data-name={provider.competitorName}
              className={`tabNavItem ${provider.competitorName === activeTab ? "active" : undefined}`} >
              {provider.competitorName}
            </button>

          ))}

        </div>

      </div>

      <div className={`container noPaddingTop ${styles.tabItems}`}>

        {providers.map((provider) => (

          <div
            key={provider.id}
            data-name={provider.competitorName}
            className={styles.tabItemContainer}
            style={{
              display: provider.competitorName === activeTab ? "flex" : "none",
            }}
          >

            <div className={`container centered noPaddingTop noPaddingBottom ${styles.tabItemHeader}`}>

              <Heading level="h3" title={provider.title} />

            </div>

            <div className={`${styles.comparisonContainer} noPaddingTop noPaddingBottom`}>

              <motion.div
                key={`benefits-${pathname}`}
                className={`${styles.col} ${styles.benefitsCol}`}
                variants={leftColumnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >

                {provider.benefits.length > 0 && (

                  <>

                    <h4 className={styles.benefitsTitle}>Prompt Pay Capital<span style={{ color: "var(--primary)" }}>.</span></h4>

                    {provider.benefits.map((benefit, index) => (

                      <div key={index} className={`${styles.listItem} ${styles.benefitItem}`}>

                        <div className={styles.iconWrapper}><CheckIcon /></div>

                        <p key={index} className={styles.benefitText}>{benefit}</p>

                      </div>

                    ))}

                  </>

                )}

              </motion.div>

              <motion.div
                key={`issues-${pathname}`}
                className={`${styles.col} ${styles.issuesCol}`}
                variants={rightColumnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >

                {provider.issues.length > 0 && (
                  <>

                    <h4 className={styles.competitorName}>{provider.competitorName}<span style={{ color: "var(--primary)" }}>.</span></h4>

                    {provider.issues.map((issue, index) => (

                      <div key={index} className={`${styles.listItem} ${styles.issueItem}`}>

                        <div className={styles.iconWrapper}><XIcon /></div>

                        <p key={index} className={styles.issueText}>{issue}</p>

                      </div>

                    ))}

                  </>

                )}

              </motion.div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
