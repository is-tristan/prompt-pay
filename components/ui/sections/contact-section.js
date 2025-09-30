// Next
import Image from "next/image";
import ContactForm from "@/components/ui/reusables/contact-form";
import ContactItems from "@/components/ui/reusables/contact-items";
// Components
import Heading from "@/components/ui/reusables/heading";

// Background Images
const dotsTopRight = "/backgrounds/background-dots-top-right.png";
const dotsBottomLeft = "/backgrounds/background-dots-bottom-left.png";

// Styles
import styles from "@/styles/ui/sections/contact-section.module.scss";

export default function ContactSection({
  className = "",
  eyebrow = "GET IN TOUCH TODAY",
  title = "Speak to an expert",
  text = "Discover enhanced payment solutions and start lowering your fees today.",
  rowReverse = false,
  hasAddress = false,
  hasHours = false,
}) {
  return (
    <section id="contact" className={`row ${styles.contactSection}`}>
      <div
        className={`container ${styles.contactSectionContainer} ${className ? className : undefined} ${rowReverse ? styles.rowReverse : undefined}`}
      >
        <div className={`col ${styles.contactFormCol}`}>
          <h3>
            Book your consultation
            <span style={{ color: "var(--primary)" }}>.</span>
          </h3>

          <ContactForm />
        </div>

        <div className={`col ${styles.contactInfoCol}`}>
          <Heading
            className="hasFullStop"
            eyebrow={eyebrow}
            title={title}
            text={text}
          />

          <ContactItems
            className={styles.contactItems}
            hasAddress={hasAddress}
            hasHours={hasHours}
          />
        </div>
      </div>

      {rowReverse
        ? <Image
            src={dotsTopRight}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{
              objectFit: "contain",
              objectPosition: "top right",
              zIndex: "-1",
            }}
          />
        : <Image
            src={dotsBottomLeft}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{
              objectFit: "contain",
              objectPosition: "bottom left",
              zIndex: "-1",
            }}
          />}
    </section>
  );
}
