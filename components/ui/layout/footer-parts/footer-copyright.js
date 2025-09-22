// Next
import Link from "next/link";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterCopyright() {

    return (

        <div className={`container dualCols centered ${styles.footerContainer} ${styles.footerCopyright}`}>

            <span>Copyright | 2025 Prompt Pay. All rights reserved.</span>

            <Link href="#main" className={styles.backToTop} aria-label="Back to Top">Back to Top</Link>

        </div>

    )
}