"use client";

// React
import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/ui/reusables/video-row.module.scss";

// Utils
import getScreenSize from "@/utils/screen-size";

export default function videoRow({
  id = "",
  className = "",
  overlayBanner = false,
  videoSrc = "",
  videoMobileSrc = "",
  poster = "",
}) {

  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);

  useEffect(() => {
    const screenSize = getScreenSize();
    setCurrentVideoSrc(screenSize.width < 768 ? videoMobileSrc : videoSrc);
  }, [videoSrc, videoMobileSrc]);

  return (

    <section id={id ? id : null} className={`row ${styles.videoRow} ${className ? className : undefined} ${overlayBanner ? styles.overlayBanner : undefined}`}>

      <div className={`container noPadding ${styles.videoContainer}`}>

        <video
          className={styles.video}
          controls
          preload="none"
          poster={poster}
          src={currentVideoSrc}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
        >

        </video>

      </div>

    </section>

  );

}
