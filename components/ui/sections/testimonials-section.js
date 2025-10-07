"use client";

import Image from "next/image";

// Next
import { useRef, useState, useEffect } from "react";

// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import "@/styles/ui/reusables/testimonials.scss";
import "@/styles/ui/sliders/splide-styles.scss";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Icons
import { ArrowLeft, ArrowRight, PlayFilled, CloseOutline } from "@carbon/react/icons";

// Data
import TestimonialsData from "@/data/testimonials.json";

export default function TestimonialsSection() {
  const splideRef = useRef(null);

  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "0",
    autoplay: true,
    interval: 7500,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: true,
  };

  const handlePrevClick = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go("<");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go(">");
    }
  };

  const [activeDialogId, setActiveDialogId] = useState(null);
  const dialogRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDialogId && dialogRefs.current[activeDialogId]) {
        const dialog = dialogRefs.current[activeDialogId];
        if (event.target === dialog) {
          closeVideoModal();
        }
      }
    };

    if (activeDialogId && dialogRefs.current[activeDialogId]) {
      dialogRefs.current[activeDialogId].showModal();
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDialogId]);

  const openVideoModal = (slideId) => {
    setActiveDialogId(slideId);
  };

  const closeVideoModal = () => {
    if (activeDialogId && dialogRefs.current[activeDialogId]) {
      dialogRefs.current[activeDialogId].close();
      const video = dialogRefs.current[activeDialogId].querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    setActiveDialogId(null);
  };

  return (

    <section id="testimonials" className="row testimonialsSection">

      <div className="container spaceBetween testimonialsHeader">

        <Heading eyebrow="LOVED BY OUR CLIENTS" title="Success stories from our valued customers." />


        <div className="testimonialGoogleCard">

          <Image
            src="/logos/external/google-reviews-badge.svg"
            alt="Google Reviews Badge"
            width={128}
            height={28}
            loading="lazy"
          />

          <span><strong>4.9</strong> Based on <strong>234+</strong> reviews</span>

        </div>

      </div>

      <div className="container noPaddingTop sliderWrapper testimonialsSliderWrapper">

        <Splide ref={splideRef} options={options} aria-label="Feature Slider" className={`splideSlider testimonialsSlider`}>

          {TestimonialsData.map((slide) => (

            <SplideSlide key={slide.id}>

              <article className="testimonialCard">

                <div className="testimonialImage">

                  <button
                    className="testimonialModalButton"
                    aria-label={`Play testimonial video from ${slide.name} of ${slide.business}`}
                    type="button"
                    onClick={() => openVideoModal(slide.id)}
                  />

                  <Image
                    src={slide.thumbnail}
                    alt={`${slide.name} Thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />

                  <div className="testimonialPlayIcon"><PlayFilled size={48} /></div>

                </div>

                <div className="testimonialContent">

                  <p className="testimonialQuote">{slide.quote}</p>

                  <div className="testimonialMeta">

                    <div className="testimonialMetaText">

                      <h4>{slide.name}</h4>

                      <p>{slide.business}</p>

                    </div>

                    <div className="testimonialMetaLogo">

                      <Image
                        src={slide.businessLogo}
                        alt={`${slide.business} Logo`}
                        width={128}
                        height={48}
                        loading="lazy"
                      />

                    </div>

                  </div>

                </div>

              </article>

              <dialog className="testimonialDialog" ref={(el) => dialogRefs.current[slide.id] = el} style={{ aspectRatio: slide.aspectRatio ? slide.aspectRatio : "16/9" }}>

                <button className="dialogClose" aria-label="Close testimonial dialog" type="button" onClick={closeVideoModal}><CloseOutline size={24} /></button>

                <div className="dialogContent">

                  <video
                    src={slide.videoUrl}
                    className="dialogVideo"
                    title={`Testimonial video from ${slide.name} of ${slide.business}`}
                    poster={slide.thumbnail}
                    controls
                    preload="none"
                    style={{ width: "100%", height: "auto", aspectRatio: slide.aspectRatio ? slide.aspectRatio : "16/9" }}
                  />

                </div>

              </dialog>

            </SplideSlide>

          ))}

        </Splide>

        <div className="customArrows">

          <button className="customArrow customArrowPrev hidden-s hidden-m" onClick={handlePrevClick} aria-label="Previous slide" type="button">

            <ArrowLeft size={24} />

          </button>

          <button className="customArrow customArrowNext hidden-s hidden-m" onClick={handleNextClick} aria-label="Next slide" type="button">

            <ArrowRight size={24} />

          </button>

        </div>

      </div>

    </section>

  );

}
