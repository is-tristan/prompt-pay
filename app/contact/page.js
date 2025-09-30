// Components

import WorldMap from "@/components/pages/contact/world-map";
import Banner from "@/components/ui/reusables/banner";
import ContactSection from "@/components/ui/sections/contact-section";

// Images
const bannerImage = "/covers/contact-us-cover.jpg";

export default function ContactPage() {
  return (
    <>
      <Banner
        eyebrow="Get in Touch"
        heading="Let's move Your business forward today"
        backgroundImage={bannerImage}
      />

      <ContactSection
        className="contactPageSection"
        rowReverse={true}
        eyebrow="DON'T BE SHY, SAY HELLO"
        title="Stay connected with the Prompt Pay team"
        text="Our team is here to support you every step of the way. Reach out today—we're ready to help your business flow."
        hasAddress={true}
        hasHours={true}
      />

      <WorldMap />
    </>
  );
}
