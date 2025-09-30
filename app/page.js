// Styles
import "@/styles/pages/home.scss";

import CtaRow from "@/components/pages/home/cta-section";
import FaqsSection from "@/components/pages/home/faqs-section";
import FeaturedSection from "@/components/pages/home/featured-section";
import FullwidthVideoSection from "@/components/pages/home/fullwidth-video-section";
import HomeTabs from "@/components/pages/home/tabs-section";
// Components
import VideoBanner from "@/components/pages/home/video-banner";
import TextSlider from "@/components/sliders/text-slider";
import DualCols from "@/components/ui/reusables/dual-columns";
import ContactSection from "@/components/ui/sections/contact-section";
import InstagramSection from "@/components/ui/sections/instagram-section";
import LogoSlider from "@/components/ui/sections/logo-slider-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";

export default function Home() {
  return (
    <>
      <VideoBanner />
      <HomeTabs />
      <DualCols
        containerClassName="rowReverse"
        image="/images/misc/grow-your-business-desktop.png"
        imageAlt="Grow your business with Worldpay from Prompt Pay Capital"
        eyebrow="POWERFUL DASHBOARD"
        title="See your business at a glance, anytime"
        text="We don't just process payments, we give businesses tools to turn every transaction into opportunity and every payment into progress. With speed, security and simplicity at our core, you can focus on growing your business."
        btnOneClass="primary hasAnimation"
        btnOneText="About us"
        btnOneLink="/about-us"
        btnTwoText="Sign up today"
        btnTwoLink="/sign-up"
        btnTwoClass="light"
        reverse={true}
        hasList={true}
        stylised={true}
        listItems={[
          "Lower fees",
          "5 star reviews",
          "Fast settlements",
          "1000+ customers",
        ]}
      />
      <TextSlider />
      <CtaRow />
      <FeaturedSection />
      <FaqsSection />
      <LogoSlider />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <FullwidthVideoSection />
    </>
  );
}
