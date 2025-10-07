// Components
import Banner from "@/components/ui/reusables/banner";
import DualCols from "@/components/ui/reusables/dual-columns";
import VideoRow from "@/components/pages/careers/video-row";
import CareersGrid from "@/components/pages/careers/career-grid";
import ContactSection from "@/components/ui/sections/contact-section";

// Images
const videoSrc = "/videos/meet-the-team-video.mp4";
const videoPoster = "/videos/posters/meet-the-team-video-poster.webp";
const careersIntroImage = "/images/misc/careers-intro-image.png";

// Styles
import "@/styles/pages/careers/careers-page.scss";

export default function CareersPage() {

    return (

        <>

            <Banner
                eyebrow="Careers"
                heading="Build the future of digital payments with us"
                className="hasFullStop"
                buttonTextOne="View open positions"
                buttonTextLinkOne="#openPositions"
                buttonClassOne="primary"
                buttonTextTwo="Contact us"
                buttonLinkTwo="/contact"
                videoSrc={videoSrc}
                videoPoster={videoPoster}
            />

            <DualCols
                headingLevel="h2"
                rowClassName="careersIntro"
                containerClassName="rowReverse"
                eyebrow="OUR CAREER OPPORTUNITIES"
                title="Careers at Prompt Pay Capital"
                text="At Prompt Pay Capital, we're building the fastest-growing, most rewarding careers in UK payments. Whether you're starting out or ready to take full control of your pipeline, we have opportunities to match your ambition and skill level — with market-leading bonuses and uncapped earnings at every stage."
                listItems={[
                    "Expert Team",
                    "Quality Perks",
                ]}
                btnOneText="View careers"
                btnOneLink="#openPositions"
                btnOneClass="primary hasAnimation"
                btnTwoText="About Us"
                btnTwoLink="/about"
                btnTwoClass="light"
                image={careersIntroImage}
                imageAlt="Careers at Prompt Pay Capital"
            />

            <VideoRow />

            <CareersGrid />

            <ContactSection />

        </>

    )
}