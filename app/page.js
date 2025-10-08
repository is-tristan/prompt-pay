// Styles
import "@/styles/pages/home.scss";

// Components
import VideoBanner from "@/components/pages/home/video-banner";
import IntroSection from "@/components/pages/home/intro-section";
import CtaRow from "@/components/pages/home/cta-section";
import HomeTabs from "@/components/pages/home/tabs-section";
import TextSlider from "@/components/sliders/logo-slider";
import DualCols from "@/components/pages/home/dashboard-section";
import FeaturedSection from "@/components/pages/home/featured-section";
import LogoSlider from "@/components/ui/sections/logo-slider-section";
import FaqsSection from "@/components/pages/home/faqs-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";
import ContactSection from "@/components/ui/sections/contact-section";
import FullwidthVideoSection from "@/components/pages/home/fullwidth-video-section";

export default function Home() {

  return (

    <>

      <VideoBanner />

      <IntroSection />

      <CtaRow />

      <HomeTabs />

      <TextSlider />

      <DualCols
        rowClassName="homeDashboardSection"
        eyebrow="POWERFUL DASHBOARD"
        title="See your business at a glance, anytime"
        text="We don't just process payments, we give businesses tools to turn every transaction into opportunity and every payment into progress. With speed, security and simplicity at our core, you can focus on growing your business."
        btnOneClass="primary hasAnimation"
        btnOneText="About us"
        btnOneLink="/about-us"
        btnTwoText="Sign up today"
        btnTwoLink="/sign-up"
        btnTwoClass="light"
        hasList={true}
        stylised={true}
        listItems={[
          "Lower fees",
          "5 star reviews",
          "Fast settlements",
          "1000+ customers",
        ]}
      />

      <FeaturedSection />

      <FaqsSection />

      <LogoSlider />

      <TestimonialsSection />

      <ContactSection />

      <FullwidthVideoSection />

    </>

  );

}
