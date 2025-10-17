"use client";

// React
import { useState, useEffect, useRef } from "react";

// Components
import Loader from "@/components/misc/loader";

// Utils
import getScreenSize from "@/utils/screen-size";

export default function HomeBanner({ src = "/videos/prompt-pay-banner-video.mp4", mobileSrc = "/videos/prompt-pay-banner-video-mobile.mp4", poster = "/videos/posters/prompt-pay-marketing-video-poster.webp" }) {

  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only set video source once on mount
    if (!hasInitialized.current) {
      const screenSize = getScreenSize();
      setVideoSrc(screenSize.width < 768 ? mobileSrc : src);
      hasInitialized.current = true;
    }
  }, []);

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  // Don't render video until we have the correct source
  if (!videoSrc) {
    return null;
  }

  return (
    <section id="banner" className={`row homeBanner videoBanner`}>
      <div
        className={`container noPaddingTop noPaddingBottom videoContainer`}
        style={{ position: "relative" }}
      >
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
              textAlign: "center",
              width: "100%",
            }}
          >
            <Loader loadingText="Loading video..." />
          </div>
        )}

        <video
          key={videoSrc}
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
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
