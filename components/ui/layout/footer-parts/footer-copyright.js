// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterCopyright() {

    return (

        <div className={`container centered ${styles.footerContainer} ${styles.footerCopyright}`}>

            <span>Copyright | 2025 Prompt Pay. All rights reserved.</span>

        </div>

    )
}