
export default function HomeBanner() {

    return (

        <section id="banner" className={`row homeBanner videoBanner`}>

            <div className={`container noPaddingTop noPaddingBottom videoContainer`}>

                <video
                    autoPlay
                    muted loop
                    playsInline
                    preload="none"
                    className={`hidden-s hidden-m video`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "16/9" }}>

                    <source src="/videos/prompt-pay-banner-video.mp4" type="video/mp4" />

                </video>

            </div>

        </section>

    )

}