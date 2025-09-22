// Icons
import { PhoneFilled, Email } from '@carbon/react/icons';

// Styles
import styles from "@/styles/ui/reusables/contact-items.module.scss";

export default function ContactItems({ className = "" }) {

    const email = "info@promptpaycapital.com"
    const phone = "+44 (0)203 355 5615"

    return (

        <div className={`${styles.contactItems} ${className ? className : undefined}`}>

            <div className={styles.contactItem}>

                <a href={`mailto:${email}`}></a>

                <div className={styles.contactItemIcon}>

                    <Email />

                </div>

                <div className={styles.contactItemContent}>

                    <h4>Email Address</h4>

                    <span>{email}</span>

                </div>

            </div>

            <div className={styles.contactItem}>

                <a href={`tel:${phone}`} target="_blank"></a>

                <div className={styles.contactItemIcon}>

                    <PhoneFilled />

                </div>

                <div className={styles.contactItemContent}>

                    <h4>Phone Us</h4>

                    <span>{phone}</span>

                </div>

            </div>

        </div>

    )
}
