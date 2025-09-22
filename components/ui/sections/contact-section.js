// Next
import Image from "next/image";

// Components
import Heading from "@/components/ui/reusables/heading";
import ContactItems from "@/components/ui/reusables/contact-items";
import ContactForm from "@/components/ui/reusables/contact-form";

// Background Images
const dots = "/backgrounds/background-dots-bottom-left.png";

// Styles
import styles from "@/styles/ui/sections/contact-section.module.scss";

export default function ContactSection() {

    return (

        <section id="contact" className={`row ${styles.contactSection}`}>

            <div className={`container ${styles.contactSectionContainer}`}>

                <div className={`col ${styles.contactFormCol}`}>

                    <h3>Book your consultation<span style={{ color: "var(--primary)" }}>.</span></h3>

                    <ContactForm />

                </div>

                <div className={`col ${styles.contactInfoCol}`}>

                    <Heading className="hasFullStop" eyebrow="GET IN TOUCH TODAY" title="Speak to an expert" text="Discover enhanced payment solutions and start lowering your fees today." />

                    <ContactItems className={styles.contactItems} />

                </div>

            </div>

            <Image src={dots} alt="" fill sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: "contain", objectPosition: "bottom left", zIndex: "-1" }} />

        </section>

    )
}