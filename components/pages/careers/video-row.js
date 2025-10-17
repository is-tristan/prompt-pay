"use client"

// React
import { useState, useEffect } from "react";

// Utils
import getScreenSize from "@/utils/screen-size";

// Videos
const videoSrc = "/videos/partner-referral-video.mp4";
const mobileVideoSrc = "/videos/partner-referral-video-mobile.mp4";
const videoPoster = "/videos/posters/partner-referral-video-poster.webp";

export default function VideoRow() {

    const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);

    useEffect(() => {
        const screenSize = getScreenSize();
        setCurrentVideoSrc(screenSize.width < 768 ? mobileVideoSrc : videoSrc);
    }, []);

    return (

        <section className={`row videoRow`} id="video">

            <div className="container centered">

                <div className="videoContainer" style={{ marginTop: '2rem' }}>

                    <video
                        src={currentVideoSrc}
                        poster={videoPoster}
                        controls
                        width="100%"
                        height="100%"
                        preload="none"
                    >
                        Your browser does not support the video tag.
                    </video>

                </div>

            </div>

        </section>

    )

}