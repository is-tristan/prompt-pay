"use client";

import styles from "@/styles/ui/reusables/video-row.module.scss";

export default function videoRow({
  id = "",
  className = "",
  overlayBanner = false,
  videoSrc = "",
  type = "video/mp4",
  poster = "",
}) {
  return (
    <section
      id={id ? id : null}
      className={`row ${styles.videoRow} ${className ? className : undefined} ${overlayBanner ? styles.overlayBanner : undefined}`}
    >
      <div className={`container noPadding ${styles.videoContainer}`}>
        <video
          className={styles.video}
          controls
          preload="none"
          poster={poster}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
        >
          <source src={videoSrc} type={type} />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
