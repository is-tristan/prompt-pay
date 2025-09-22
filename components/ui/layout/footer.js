// Components
import FooterTop from "./footer-parts/footer-top";
import FooterSubscribe from "./footer-parts/footer-subscribe";
import FooterNav from "./footer-parts/footer-nav";
import ContactItems from "@/components/ui/reusables/contact-items";
import FooterLogo from "./footer-parts/footer-logo";
import FooterCopyright from "./footer-parts/footer-copyright";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function Footer() {

    return (

        <footer id="footer" className={`${styles.footer}`}>

            <div className={styles.footerBorder} style={{ borderBottom: "none" }}>

                <FooterTop />

            </div>

            <div className={styles.footerBorder} style={{ borderBottom: "none" }}>

                <div className={`container ${styles.footerMain}`}>

                    <FooterSubscribe />

                    <FooterNav
                        className={styles.footerNavOne}
                        title="Useful links"
                        footerLinks={[
                            { id: 1, text: "Home", link: "/" },
                            { id: 2, text: "Products", link: "/#products" },
                            { id: 3, text: "Features", link: "/#features" },
                            { id: 4, text: "Testimonials", link: "/#testimonials" },
                            { id: 5, text: "Contact", link: "/#contact" },
                        ]}
                    />

                    <FooterNav
                        className={styles.footerNavTwo}
                        title="Our products"
                        footerLinks={[
                            { id: 1, text: "Clover Flex", link: "/products/clover-flex" },
                            { id: 2, text: "Clover Mini", link: "/products/clover-mini" },
                            { id: 3, text: "Clover Duo", link: "/products/clover-duo" },
                            { id: 4, text: "WP DX4000", link: "/products/wp-dx4000" },
                            { id: 5, text: "All Products", link: "/products" },
                        ]}
                    />

                    <FooterNav
                        className={styles.footerNavThree}
                        title="Important links"
                        footerLinks={[
                            { id: 1, text: "Privacy Policy", link: "/legal/privacy-policy" },
                            { id: 2, text: "Refunds & Cancellations", link: "/legal/refunds-and-cancellations" },
                            { id: 3, text: "Subject Access Request (SAR)", link: "/legal/subject-access-request" },
                            { id: 4, text: "Terms & Conditions", link: "/legal/terms-and-conditions" },
                            { id: 5, text: "Disclaimer", link: "/legal/disclaimer" },
                        ]}
                    />

                    <div className={`${styles.footerCol} ${styles.footerContactCol}`}>

                        <h6 className={styles.footerColTitle}>Contact Us</h6>

                        <ContactItems className={styles.footerContactItems} />

                    </div>

                </div>

            </div>

            <div className={styles.footerBorder} style={{ borderBottom: "none" }}>

                <FooterLogo />

            </div>

            <div className={styles.footerBorder} style={{ borderBottom: "none" }}>

                <FooterCopyright />

            </div>

        </footer >

    )

}