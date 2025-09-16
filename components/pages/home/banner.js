import styles from "@/styles/pages/home.module.scss";

export default function HomeBanner() {

    return (

        <section className={`row homeBanner ${styles.videoBanner}`}>

            <div className={`container noPaddingTop noPaddingBottom ${styles.videoContainer}`}>

                <video
                    autoPlay
                    muted loop
                    playsInline
                    preload="none"
                    className={`hidden-s hidden-m ${styles.video}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "16/9" }}>

                    <source src="/videos/prompt-pay-banner-video.mp4" type="video/mp4" />

                </video>

            </div>

        </section>

    )

}