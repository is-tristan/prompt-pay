// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterLogo() {
  const logoSrc = "/logos/logo-light.svg";
  const facebookIcon = "/icons/socials/square-facebook-brands-solid-full.svg";
  const linkedinIcon = "/icons/socials/square-linkedin-brands-solid-full.svg";
  const youtubeIcon = "/icons/socials/square-youtube-brands-solid-full.svg";

  return (

    <div className={`container ${styles.footerContainer} ${styles.footerLogo}`}>

      <div className={styles.footerLogoItem}>

        <Link href="/" aria-label="Prompt Pay Home">

          <Image
            src={logoSrc}
            width={156}
            height={48}
            alt="PromptPay Logo Mark"
            className={styles.footerLogoMark}
            loading="lazy"
          />

        </Link>

      </div>

      <div className={styles.footerSocialLinks}>

        <a
          href="https://www.facebook.com/people/Prompt-Pay-Capital/61581978511377/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prompt Pay Facebook Page"
        >

          {
            <Image
              src={facebookIcon}
              alt="Facebook Icon"
              width={24}
              height={24}
            />
          }

        </a>

        <a
          href="https://linkedin.com/company/prompt-pay-capital"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prompt Pay LinkedIn Page"
        >

          <Image
            src={linkedinIcon}
            alt="LinkedIn Icon"
            width={24}
            height={24}
          />

        </a>

        <a
          href="https://www.youtube.com/@PromptPayCapital"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prompt Pay YouTube Page"
        >

          <Image
            src={youtubeIcon}
            alt="YouTube Icon"
            width={24}
            height={24}
          />

        </a>

      </div>

    </div>

  );

}
