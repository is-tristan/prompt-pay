// Components
import Banner from "@/components/ui/reusables/banner";
import DualCols from "@/components/ui/reusables/dual-columns";
import VideoRow from "@/components/ui/reusables/video-row";
import TextSlider from "@/components/sliders/text-slider";
import ContactSection from "@/components/ui/sections/contact-section";

// Styles
import "@/styles/pages/careers.scss";

// Images
const bannerImage = "/covers/careers-cover.jpg";
const careersIntroImage = "/images/misc/careers-intro-image.png";

// Videos
const videoSrc = "/videos/partner-referral-video.mp4";
const videoPoster = "/videos/posters/partner-referral-video-poster.webp";

export default function CareersPage() {

    return (

        <>

            <Banner
                eyebrow="Careers"
                heading="Build the future of digital payments with us"
                className="hasFullStop"
                backgroundImage={bannerImage}
                buttonTextOne="View open positions"
                buttonTextLinkOne="#openPositions"
                buttonClassOne="primary"
                buttonTextTwo="Contact us"
                buttonLinkTwo="/contact"
            />

            <VideoRow
                id="video"
                videoSrc={videoSrc}
                type="video/mp4"
                poster={videoPoster}
                overlayBanner={true}
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
                btnOneLink="#careers"
                btnOneClass="primary hasAnimation"
                btnTwoText="About Us"
                btnTwoLink="/about"
                btnTwoClass="light"
                image={careersIntroImage}
                imageAlt="Careers at Prompt Pay Capital"
            />

            <TextSlider />

            <ContactSection />

        </>

    )
}