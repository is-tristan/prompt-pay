"use client";

// React
import { useState } from "react";

// Framer Motion
import { motion } from 'framer-motion';

// Components
import Heading from "../reusables/heading";

// Styles
import styles from "@/styles/ui/sections/compare-payment-providers.module.scss";

// SVG Icons as Components
const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#d7ffb6" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" />
    </svg>
);

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#ff7d7d" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" />
    </svg>
);

export default function ComparePaymentProvidersSection() {

    const providers = [
        {
            id: 1,
            title: "Still Using Outdated Payment Systems?",
            competitorName: "Barclaycard",
            issues: [
                "Outdated terminals that can slow transactions",
                "Hidden or unexpected fees that reduce margins",
                "Support that isn't always responsive",
            ],
            benefits: [
                "Modern, responsive terminals that keep up with your business",
                "Clear, transparent pricing with no surprises",
                "Dedicated, reliable support whenever you need it",
            ]
        },
        {
            id: 2,
            title: "Run your business with confidence, not uncertainty",
            competitorName: "Stripe",
            issues: [
                "Accounts can be closed suddenly, freezing funds",
                "High fees that reduce profit margins",
                "Limited hardware for in-person payments",
                "Support mostly online/self-service",
            ],
            benefits: [
                "Stability and protection for your business",
                "Competitive, transparent pricing",
                "Reliable devices for both in-person and online sales",
                "Personal support, not just a help page",
            ]
        },
        {
            id: 3,
            title: "Step up from basic to better - make the switch",
            competitorName: "SumUp",
            issues: [
                "Limited features that don't grow with your business",
                "Payment disputes can tie up cash flow",
                "No dedicated account manager or tailored support",
            ],
            benefits: [
                "Advanced tools designed to scale with your growth",
                "24/7 support for peace of mind",
                "Your own account manager to guide you",
            ]
        },
        {
            id: 4,
            title: "Teya's costs add up - Prompt Pay keeps it simple",
            competitorName: "Teya",
            issues: [
                "Limited remote/MOTO (phone) payment options",
                "Fees that quickly eat into profits",
                "Support less suited for complex business needs",
            ],
            benefits: [
                "Seamless MOTO and remote payment capabilities",
                "Competitive rates to protect your margins",
                "Dedicated support available whenever you need it",
            ]
        },
        {
            id: 5,
            title: "Choose reliability before the next price jump",
            competitorName: "iZettle / PayPal",
            issues: [
                "Higher fees cutting into revenue",
                "Short battery life on devices",
                "Connectivity issues at busy times",
            ],
            benefits: [
                "Competitive rates that keep more in your pocket",
                "Reliable terminals built to last the whole day",
                "Stable connectivity for uninterrupted service",
            ]
        },
        {
            id: 6,
            title: "Protect your margins with transparent pricing",
            competitorName: "Dojo",
            issues: [
                "Unexpected fee hikes",
                "Extra charges for certain features or services",
                "Support that can feel like an afterthought",
            ],
            benefits: [
                "Predictable, transparent pricing",
                "All-in-one pricing with no hidden extras",
                "Customer care that prioritizes your business, 24/7",
            ]
        },
        {
            id: 7,
            title: "Switch to stability and simplicity",
            competitorName: "TakePayments",
            issues: [
                "Older terminals with slow replacement times",
                "Long waits for support",
                "Extra fees for online/phone transactions",
            ],
            benefits: [
                "Modern devices with next-day replacement if needed",
                "Instant support when you need it",
                "Transparent pricing tailored to your business",
            ]
        }
    ]

    const [activeTab, setActiveTab] = useState(providers[0].competitorName);

    // Animation variants
    const leftColumnVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }
        }
    };

    const rightColumnVariants = {
        hidden: {
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4
            }
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        const allTabs = document.querySelectorAll('.tabNavItem');
        allTabs.forEach(tab => {
            if (tab.getAttribute('data-name') === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        const allCols = document.querySelectorAll(`.${styles.tabItems} [data-name]`);
        allCols.forEach(col => {
            if (col.getAttribute('data-name') === tabName) {
                col.style.display = 'flex';
                if (window.innerWidth < 1200) {
                    col.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    col.scrollIntoView({ behavior: 'smooth', block: 'center' });

                }
            } else {
                col.style.display = 'none';
            }
        });
    }

    // Initialize first tab as active
    if (typeof window !== 'undefined') {
        const allTabs = document.querySelectorAll('.tabNavItem');
        allTabs.forEach(tab => {
            if (tab.getAttribute('data-name') === activeTab) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        const allCols = document.querySelectorAll(`.${styles.tabItems} [data-name]`);
        allCols.forEach(col => {
            if (col.getAttribute('data-name') === activeTab) {
                col.style.display = 'flex';
            } else {
                col.style.display = 'none';
            }
        });
    }

    return (

        <section className="row comparePaymentProviders">

            <div className={`container centered noPaddingBottom ${styles.sectionHeader}`}>

                <Heading level="h2" className="hasFullStop" eyebrow="Learn more" title="Compare your payments provider instantly" />

                <div className="container tabNav">

                    {providers.map((provider) => (

                        <button key={provider.id} onClick={() => handleTabClick(provider.competitorName)} data-name={provider.competitorName} className={`tabNavItem ${provider.competitorName === activeTab ? 'active' : ''}`}>

                            {provider.competitorName}

                        </button>

                    ))}

                </div>

            </div>

            <div className={`container noPaddingTop ${styles.tabItems}`}>

                {providers.map((provider) => (

                    <div key={provider.id} data-name={provider.competitorName} className={styles.tabItemContainer} style={{ display: provider.competitorName === activeTab ? 'flex' : 'none' }}>

                        <div className={`container centered noPaddingTop noPaddingBottom ${styles.tabItemHeader}`}>

                            <Heading level="h3" title={provider.title} />

                        </div>

                        <div className={`${styles.comparisonContainer} noPaddingTop noPaddingBottom`}>

                            <motion.div
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

                                                <div className={styles.iconWrapper}>

                                                    <CheckIcon />

                                                </div>

                                                <p key={index} className={styles.benefitText}>{benefit}</p>

                                            </div>

                                        ))}

                                    </>

                                )}

                            </motion.div>

                            <motion.div
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

                                                <div className={styles.iconWrapper}>

                                                    <XIcon />

                                                </div>

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

        </section >

    )
}