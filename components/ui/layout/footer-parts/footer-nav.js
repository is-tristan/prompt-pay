// Next
import Link from "next/link";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterNav({
  className = "",
  title = "",
  footerLinks = [],
}) {
  return (
    <div
      className={`${styles.footerCol} ${styles.footerNavCol} ${className ? className : undefined}`}
    >
      {title && <h6>{title}</h6>}

      {footerLinks.length > 0 && (
        <div className={styles.footerNav}>
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className={styles.footerNavLink}
              target={link.target || undefined}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
