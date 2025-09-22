"use client";

export default function FullwidthVideoSection() {

    const videoSrc = "/videos/prompt-pay-marketing-video.mp4";
    const posterSrc = "/images/prompt-pay-marketing-video-poster.png";

    return (

        <section className="row fullwidthVideoSection" aria-hidden="true">

            <video
                src={videoSrc}
                poster={posterSrc}
                playsInline
                autoPlay
                loop
                muted
                className="fullwidthVideo"
                style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "calc(100vh - var(--headerHeight))",
                    objectFit: "cover",
                    objectPosition: "center center",
                    aspectRatio: "16/9"
                }}
                preload="none"
            />

        </section>
    )
}