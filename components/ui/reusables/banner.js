"use client";

// React
import { useState, useEffect, useRef } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Styles
import styles from "@/styles/ui/reusables/banner.module.scss";

// Components
import Buttons from "./buttons";
import Heading from "./heading";
import Loader from "@/components/misc/loader";

// Utils
import getScreenSize from "@/utils/screen-size";

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
  mobileSrc = "",
  videoPoster = "",
  hasVideo = videoSrc ? true : false,
}) {

  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only set video source once on mount
    if (hasVideo && !hasInitialized.current) {
      const screenSize = getScreenSize();
      setCurrentVideoSrc(screenSize.width < 768 ? mobileSrc : videoSrc);
      hasInitialized.current = true;
    }
  }, []);

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
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

      {hasVideo && currentVideoSrc && (

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
            key={currentVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`video`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "16/9",
              opacity: isVideoLoading ? 0.3 : 1,
              transition: "opacity 0.3s ease-in-out",
            }}
            onLoadedData={handleVideoCanPlay}
            poster={videoPoster}
          >
            <source src={currentVideoSrc} type="video/mp4" />
          </video>

        </>

      )}

    </motion.section>

  );

}
