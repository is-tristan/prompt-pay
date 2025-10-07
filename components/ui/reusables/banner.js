"use client";

// Framer Motion
import { motion } from "framer-motion";

// Styles
import styles from "@/styles/ui/reusables/banner.module.scss";

// Components
import Buttons from "./buttons";
import Heading from "./heading";

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

        <video
          muted
          autoPlay
          playsInline
          loop
          preload="none"
          src={videoSrc}
          poster={videoPoster}
        />

      )}

    </motion.section>

  );

}
