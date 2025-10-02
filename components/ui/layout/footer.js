// Components

import ContactItems from "@/components/ui/reusables/contact-items";
// Styles
import styles from "@/styles/ui/layout/footer.module.scss";
import FooterCopyright from "./footer-parts/footer-copyright";
import FooterLogo from "./footer-parts/footer-logo";
import FooterNav from "./footer-parts/footer-nav";
import FooterSubscribe from "./footer-parts/footer-subscribe";
import FooterTop from "./footer-parts/footer-top";

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
            title="Clover Products"
            footerLinks={[
              { id: 1, text: "Clover Flex", link: "/products/clover-flex" },
              { id: 2, text: "Clover Flex Pocket", link: "/products/clover-flex-pocket" },
              { id: 3, text: "Clover Mini", link: "/products/clover-mini" },
              { id: 4, text: "Clover Station Duo", link: "/products/clover-station-duo" },
              { id: 5, text: "Clover Station Solo", link: "/products/clover-station-solo" },
            ]}
          />

          <FooterNav
            className={styles.footerNavTwo}
            title="Worldpay Products"
            footerLinks={[
              { id: 1, text: "Worldpay DX4000", link: "/products/worldpay-dx4000" },
              { id: 2, text: "Worldpay DX8000", link: "/products/worldpay-dx8000" },
              { id: 3, text: "Worldpay 360 Lite", link: "/products/worldpay-360-lite" },
              { id: 4, text: "Worldpay 360 Standard", link: "/products/worldpay-360-standard" },
              { id: 5, text: "Worldpay 360 Pro", link: "/products/worldpay-360-pro" },
            ]}
          />

          <FooterNav
            className={styles.footerNavThree}
            title="Explore"
            footerLinks={[
              { id: 1, text: "About", link: "/about" },
              { id: 2, text: "Careers", link: "/careers" },
              { id: 3, text: "Contact", link: "/contact" },
              { id: 4, text: "Privacy Policy", link: "/legal/privacy-policy" },
              { id: 5, text: "Cookie Policy", link: "/legal/cookie-policy" },
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
    </footer>
  );
}
