// Components
import FooterTop from "./footer-parts/footer-top";
import FooterCopyright from "./footer-parts/footer-copyright";
import FooterLogo from "./footer-parts/footer-logo";
import FooterNav from "./footer-parts/footer-nav";
import FooterSubscribe from "./footer-parts/footer-subscribe";
// import ContactItems from "@/components/ui/reusables/contact-items";

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

          <FooterNav
            className={styles.footerNavThree}
            title="Explore"
            footerLinks={[
              { id: 1, text: "Home", link: "/" },
              { id: 2, text: "About", link: "/about" },
              { id: 3, text: "Careers", link: "/careers" },
              { id: 4, text: "Contact", link: "/contact" },
            ]}
          />

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
            title="Legal"
            footerLinks={[
              { id: 1, text: "Privacy Policy", link: "/legal/privacy-policy" },
              { id: 2, text: "Cookie Policy", link: "/legal/cookie-policy" },
              { id: 3, text: "Refunds & Cancellations", link: "/legal/refunds-and-cancellations" },
              { id: 4, text: "Subject Access Request", link: "/legal/subject-access-request" },
            ]}
          />

          <FooterSubscribe />

          {/* <div className={`${styles.footerCol} ${styles.footerContactCol}`}>

            <h6 className={styles.footerColTitle}>Contact Us</h6>

            <FooterSubscribe />

          </div> */}

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
