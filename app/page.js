// Styles
import "@/styles/pages/home.scss";

// Components
import VideoBanner from "@/components/pages/home/video-banner";
import HomeTabs from "@/components/pages/home/tabs-section";
import DualCols from "@/components/ui/reusables/dual-columns";
import TextSlider from "@/components/sliders/text-slider";
import CtaRow from "@/components/pages/home/cta-section";
import FeaturedSection from "@/components/pages/home/featured-section";
import FaqsSection from "@/components/pages/home/faqs-section";
import LogoSlider from "@/components/ui/sections/logo-slider-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";
import InstagramSection from "@/components/ui/sections/instagram-section";

export default function Home() {
  return (
    <>
      <VideoBanner />
      <HomeTabs />
      <DualCols
        rowClassName="hasBackgroundImage backgroundImageLeft"
        containerClassName="rowReverse"
        backgroundImage="/images/misc/grow-your-business-desktop.png"
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
    </>
  );
}
