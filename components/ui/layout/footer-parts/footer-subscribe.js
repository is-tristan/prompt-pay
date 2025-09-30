"use client";

// Styles
import styles from "@/styles/ui/layout/footer.module.scss";

export default function FooterSubscribe({ className = "" }) {
  return (
    <div
      className={`${styles.footerCol} ${styles.footerSub} ${className ? className : undefined}`}
    >
      <h6>Subscribe now</h6>

      <form className={`form ${styles.subscribeForm}`} action="#" method="post">
        <fieldset className={`formItem fullWidth ${styles.footerFormItem}`}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            autoComplete="name"
          />
        </fieldset>

        <fieldset className={`formItem fullWidth ${styles.footerFormItem}`}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </fieldset>

        <div className={`formFooter`}>
          <button type="submit" className={`btn ${styles.footerFormButton}`}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
