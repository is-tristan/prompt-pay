"use client";

// React
import { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Styles
import styles from "@/styles/ui/reusables/banner.module.scss";

// Components
import Buttons from "./buttons";
import Heading from "./heading";
import Loader from "@/components/misc/loader";

export default function Banner({
  eyebrow = "",
  heading = "",
  text = "",
  backgroundImage = "",
  buttonTextOne = "",
  buttonTextLinkOne = "",
  buttonTextTwo = "",
  buttonLinkTwo = "",
  className = "",
  videoSrc = "",
  videoPoster = "",
  hasVideo = videoSrc ? true : false,
}) {

  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  return (

    <motion.section
      className={`row ${styles.banner} ${hasVideo ? styles.bannerVideo : undefined}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], }}
    >

      <div className={`container centered ${className ? className : undefined} ${styles.bannerContainer}`}>

        <Heading
          hasAnimation={false}
          level="h1"
          className={`hasFullStop ${styles.bannerHeading}`}
          eyebrow={eyebrow}
          title={heading}
          text={text}
        />

        {buttonTextOne && (
          <Buttons
            btnOneText={buttonTextOne ? buttonTextOne : null}
            btnOneLink={buttonTextLinkOne ? buttonTextLinkOne : null}
            btnOneClass="primary hasAnimation"
            btnTwoText={buttonTextTwo ? buttonTextTwo : null}
            btnTwoLink={buttonLinkTwo ? buttonLinkTwo : null}
            btnTwoClass="light"
          />

        )}

      </div>

      {hasVideo && (

        <>

          {isVideoLoading && (

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >

              <Loader loadingText="Loading video..." />

            </div>

          )}

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`video`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "16/9",
              opacity: isVideoLoading ? 0.3 : 1,
              transition: "opacity 0.3s ease-in-out",
            }}
            onCanPlay={handleVideoCanPlay}
            onLoadStart={handleVideoLoadStart}
            onWaiting={() => setIsVideoLoading(true)}
            onPlaying={() => setIsVideoLoading(false)}
            poster={videoPoster}
            src={videoSrc}
          >
          </video>

        </>

      )}

    </motion.section>

  );

}
