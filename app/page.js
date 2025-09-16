// Styles
import "@/styles/pages/home.module.scss";

// Components
import VideoBanner from "@/components/pages/home/banner";
import HomeTabs from "@/components/pages/home/tabs";
import DualCols from "@/components/ui/reusables/dual-columns";

export default function Home() {
  return (
    <>
      <VideoBanner />
      <HomeTabs />
      <DualCols
        className="rowReverse homeDashboardContainer"
        eyebrow="POWERFUL DASHBOARD"
        title="See your business at a glance, anytime"
        text="We don't just process payments, we give businesses tools to turn every transaction into opportunity and every payment into progress. With speed, security and simplicity at our core, you can focus on growing your business."
        image="/images/grow-your-business-desktop.png"
        imageAlt="Dashboard Mockup"
        btnOneClass="primary"
        btnOneText="About us"
        btnOneLink="/about-us"
        btnTwoText="Sign up today" F
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

      <style>{`
.homeDashboardContainer {
    @media (width >= 1200px) {
        padding-left: 0;
    }
}
      `}</style>
    </>
  );
}
