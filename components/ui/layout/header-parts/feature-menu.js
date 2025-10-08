"use client";

// Next
import { usePathname } from "next/navigation";
import Image from "next/image";

// Components
import FeatureMenuItems from "./feature-menu-items";

// Styles
import styles from "@/styles/ui/layout/mega-menu.module.scss";

// Logos
const cloverLogo = "/logos/external/clover-logo.svg";
const worldpayLogo = "/logos/external/worldpay-logo.svg";

export default function ProductMenu() {

    const pathname = usePathname();

    return (

        <div className={styles.productMenu}>

            <div className={styles.productMenuContainer}>

                <div className={`${styles.productMenuCol} ${styles.cloverCol}`}>

                    <div className={styles.productMenuHeader}>

                        <Image src={cloverLogo} width={80} height={32} alt="Clover logo" sizes={"80px"} className={styles.productMenuLogo} />

                        <span className={styles.productMenuTitle}>Clover features</span>

                    </div>

                    <FeatureMenuItems currentUrl={pathname} categoryFilter={"clover"} />

                </div>

                <div className={`${styles.productMenuCol} ${styles.worldpayCol}`}>

                    <div className={styles.productMenuHeader}>

                        <Image src={worldpayLogo} width={80} height={32} alt="Worldpay logo" sizes={"80px"} className={styles.productMenuLogo} />

                        <span className={styles.productMenuTitle}>Worldpay features</span>

                    </div>

                    <FeatureMenuItems currentUrl={pathname} categoryFilter={"worldpay"} />

                </div>

            </div>

        </div>

    )

}
