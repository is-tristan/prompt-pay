"use client";

// React
import { useEffect, useRef, useState } from "react";

// Components
import Loader from "@/components/misc/loader";

// Utils
import getScreenSize from "@/utils/screen-size";

export default function FullwidthVideoSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(undefined);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  const videoSrc = "/videos/prompt-pay-marketing-video.mp4";
  const mobileVideoSrc = "/videos/prompt-pay-marketing-video-mobile.mp4";
  const posterSrc = "/videos/posters/prompt-pay-marketing-video-poster.webp";

  useEffect(() => {
    if (shouldLoadVideo) {
      const screenSize = getScreenSize();
      setCurrentVideoSrc(screenSize.width >= 768 ? videoSrc : mobileVideoSrc);
    }
  }, [shouldLoadVideo]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect(); // Stop observing once we've loaded
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // Start loading 200px before it comes into view
        threshold: 0,
      },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <section
      ref={sectionRef}
      className="row fullwidthVideoSection"
      aria-hidden="true"
      style={{ position: "relative" }}
    >

      {isVideoLoading && shouldLoadVideo && (

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
            width: "100%",
            textAlign: "center",
          }}
        >

          <Loader loadingText="Loading video..." />

        </div>

      )}

      <video
        ref={videoRef}
        src={currentVideoSrc}
        poster={posterSrc}
        playsInline
        autoPlay={shouldLoadVideo}
        loop
        muted
        className="fullwidthVideo"
        preload="none"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "calc(100vh - var(--headerHeight))",
          objectFit: "cover",
          objectPosition: "center center",
          aspectRatio: "16/9",
          opacity: shouldLoadVideo && !isVideoLoading ? 1 : 0.7,
          transition: "opacity 0.3s ease-in-out",
        }}
        onCanPlay={handleVideoCanPlay}
        onLoadStart={handleVideoLoadStart}
        onWaiting={() => setIsVideoLoading(true)}
        onPlaying={() => setIsVideoLoading(false)}
      >
        {shouldLoadVideo && currentVideoSrc && <source src={currentVideoSrc} type="video/mp4" />}

      </video>

    </section>

  );

}
