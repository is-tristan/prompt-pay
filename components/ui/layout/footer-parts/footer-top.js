// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterTop() {
  const footerLogos = [
    {
      id: 1,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
      link: "https://www.worldpay.com/uk",
    },
    {
      id: 2,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
      link: "https://www.clover.com/",
    },
    {
      id: 3,
      image: "/logos/external/firserv-logo.svg",
      alt: "Fiserv Logo",
      link: "https://www.fiserv.com/",
    },
  ];

  return (
    <div className={`container ${styles.footerContainer} ${styles.topFooter}`}>
      <div className={styles.statusIndicator}>
        <span
          className={`${styles.statusIcon} ${styles.activeStatusIcon}`}
        ></span>

        <div className={styles.statusText}>
          <span style={{ fontWeight: "bold" }}>Current Status:</span>

          <span>Active as normal</span>
        </div>
      </div>

      <div className={styles.footerLogos}>
        <span>Partners of:</span>

        <div className={styles.footerLogoItems}>
          {footerLogos.map((logo) => (
            <div key={logo.id} className={styles.footerLogoItem}>
              <Link
                className={styles.footerLogoLink}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
