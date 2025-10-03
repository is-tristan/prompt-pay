// Components
import Heading from "@/components/ui/reusables/heading"

// Videos
const videoSrc = "/videos/partner-referral-video.mp4";
const videoPoster = "/videos/posters/partner-referral-video-poster.webp";

export default function VideoRow() {

    return (

        <section className={`row videoRow`} id="video">

            <div className="container centered">

                <Heading className="hasFullStop" eyebrow="Get started with us" title="How to become a referral partner" />

                <div className="videoContainer" style={{marginTop: '2rem'}}>
                    
                    <video
                        src={videoSrc}
                        poster={videoPoster}
                        controls
                        width="100%"
                        height="100%"
                    >
                        Your browser does not support the video tag.
                    </video>

                </div>

            </div>

        </section>

    )

}