// Components
import WhoWeAre from "@/components/pages/about/who-we-are";
import TextSlider from "@/components/sliders/logo-slider";
import Banner from "@/components/ui/reusables/banner";
import DualCols from "@/components/ui/reusables/dual-columns";
import VideoRow from "@/components/ui/reusables/video-row";
import ComparePaymentProvidersSection from "@/components/ui/sections/compare-payment-providers-section";
import ContactSection from "@/components/ui/sections/contact-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";

// Images
const bannerImage = "/covers/about-cover.webp";

// Videos
const videoSrc = "/videos/about-video.mp4";
const videoMobileSrc = "/videos/about-video-mobile.mp4";
const videoPoster = "/videos/posters/about-video-poster.webp";

export default function AboutPage() {
  return (
    <>
      <Banner
        eyebrow="About Us"
        heading="Powering progress, one payment at a time"
        backgroundImage={bannerImage}
        buttonTextOne="Learn more"
        buttonTextLinkOne="#video"
        buttonClassOne="primary"
        buttonTextTwo="Get started"
        buttonLinkTwo="/contact"
      />

      <VideoRow
        id="video"
        videoSrc={videoSrc}
        videoMobileSrc={videoMobileSrc}
        poster={videoPoster}
        overlayBanner={true}
      />

      <WhoWeAre />

      <ComparePaymentProvidersSection />

      <TestimonialsSection />

      <TextSlider />

      <DualCols
        containerClassName="rowReverse"
        headingLevel="h3"
        eyebrow="OUR DEDICATED APPLICATION"
        title="Prompt Pay Capital, developers of SyncVue"
        text="Built initially for wholesale clients, SyncVue links your payment terminal with accounting platforms like QuickBooks, Sage, and Xero. It makes it easy to view invoices, track payments, and collect instantly at the terminal, saving our customers hours of paperwork at the end of the day and thousands in missed payments."
        image="/images/misc/syncvue-logo.webp"
        imageAlt="Syncvue application screenshot"
        btnOneText="Learn more"
        btnOneLink="/syncvue"
        btnOneClass="primary hasAnimation"
        btnTwoText="Get a demo"
        btnTwoLink="/contact"
        btnTwoClass="light"
      />

      <ContactSection />
    </>
  );
}
