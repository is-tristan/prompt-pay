// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterLogo() {

    const logoSrc = "/logos/logo-light.svg";
    const facebookIcon = "/icons/socials/square-facebook-brands-solid-full.svg";
    const linkedinIcon = "/icons/socials/square-linkedin-brands-solid-full.svg";
    const twitterIcon = "/icons/socials/square-x-twitter-brands-solid-full.svg";
    const youtubeIcon = "/icons/socials/square-youtube-brands-solid-full.svg";

    return (

        <div className={`container ${styles.footerContainer} ${styles.footerLogo}`}>

            <div className={styles.footerLogoItem}>

                <Link href="/" aria-label="Prompt Pay Home">

                    <Image src={logoSrc} width={156} height={48} alt="PromptPay Logo Mark" className={styles.footerLogoMark} loading="lazy" />

                </Link>

            </div>

            <div className={styles.footerSocialLinks}>

                <a href="https://www.facebook.com/promptpayuk" target="_blank" rel="noopener noreferrer" aria-label="Prompt Pay Facebook Page">

                    {<Image src={facebookIcon} alt="Facebook Icon" width={24} height={24} />}

                </a>

                <a href="https://twitter.com/promptpayuk" target="_blank" rel="noopener noreferrer" aria-label="Prompt Pay Twitter Page">

                    <Image src={twitterIcon} alt="Twitter Icon" width={24} height={24} />

                </a>

                <a href="https://www.linkedin.com/company/promptpayuk" target="_blank" rel="noopener noreferrer" aria-label="Prompt Pay LinkedIn Page">

                    <Image src={linkedinIcon} alt="LinkedIn Icon" width={24} height={24} />

                </a>

                <a href="https://www.youtube.com/promptpayuk" target="_blank" rel="noopener noreferrer" aria-label="Prompt Pay YouTube Page">

                    <Image src={youtubeIcon} alt="Instagram Icon" width={24} height={24} />

                </a>

            </div>

        </div>

    )

}