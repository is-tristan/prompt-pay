"use client";

// React
import { useState } from "react";

// Components
import Loader from "@/components/misc/loader";

export default function HomeBanner({ src = "/videos/prompt-pay-banner-video.mp4", poster = "/videos/posters/prompt-pay-marketing-video-poster.webp" }) {

  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

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
          autoPlay
          muted
          loop
          playsInline
          preload="none"
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
          poster={poster}
          src={src}
        >
        </video>
      </div>
    </section>
  );
}
