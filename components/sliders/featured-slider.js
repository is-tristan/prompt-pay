"use client";

// Next
import { useRef } from "react";

// Components
import Buttons from "@/components/ui/reusables/buttons";

// Styles
import "@/styles/ui/sliders/featured-slider.scss";
import "@splidejs/react-splide/css";

// Icons
import { ArrowLeft, ArrowRight } from "@carbon/react/icons";
// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Images
const integrationsImage = "/images/features/thumbnail-integrations.png";
const powerfulDashboardImage =
  "/images/features/thumbnail-powerful-dashboard.png";
const globalPaymentsImage = "/images/features/thumbnail-global-payments.png";
const businessReadyImage = "/images/features/thumbnail-business-ready.png";
const liveSupportImage = "/images/features/thumbnail-live-support.png";

export default function FeatureSlider() {
  const splideRef = useRef(null);

  const cloverSlides = [
    {
      id: 1,
      image: integrationsImage,
      alt: "Integrations Feature Image",
      title: "Integrations",
      text: "Nulla nisi mauris, sodales sit amet justo id, sodales volutpat turpis.",
      link: "#",
      linkLabel: "Learn More",
    },
    {
      id: 2,
      image: powerfulDashboardImage,
      alt: "Powerful Dashboard Image",
      title: "Powerful Dashboard",
      text: "Nulla nisi mauris, sodales sit amet justo id, sodales volutpat turpis.",
      link: "#",
      linkLabel: "Learn More",
    },
    {
      id: 3,
      image: globalPaymentsImage,
      alt: "Global Payments Image",
      title: "Global Payments",
      text: "We make accepting payments simple. Your customers will love just how easy it is.",
      link: "#",
      linkLabel: "Learn More",
    },
    {
      id: 4,
      image: businessReadyImage,
      alt: "Business Ready Image",
      title: "Business Ready",
      text: "Nulla nisi mauris, sodales sit amet justo id, sodales volutpat turpis.",
      link: "#",
      linkLabel: "Learn More",
    },
    {
      id: 5,
      image: liveSupportImage,
      alt: "Live Support Image",
      title: "24/7 Live Support",
      text: "Nulla nisi mauris, sodales sit amet justo id, sodales volutpat turpis.",
      link: "#",
      linkLabel: "Learn More",
    },
  ];

  const options = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "4rem",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: true,
    padding: { left: "25%", right: "25%" },
    speed: 350,
    breakpoints: {
      2559: {
        padding: { left: "15%", right: "15%" },
        gap: "3rem",
      },
      1399: {
        perPage: 1,
      },
      768: {
        padding: { left: "7.5%", right: "7.5%" },
        gap: "0.75rem",
      },
    },
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

  return (
    <div className="sliderWrapper featureSliderWrapper">
      <Splide
        ref={splideRef}
        options={options}
        aria-label="Feature Slider"
        className={`splideSlider featureSlider`}
      >
        {cloverSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <article
              className="featureSliderCard"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="featureSliderContent">
                <h3>{slide.title}</h3>

                <p>{slide.text}</p>

                <Buttons
                  btnOneText={slide.linkLabel}
                  btnOneLink={slide.link}
                  btnOneClass="textLink"
                />
              </div>
            </article>
          </SplideSlide>
        ))}
      </Splide>

      <div className="customArrows">
        <button
          className="customArrow customArrowPrev hidden-s hidden-m"
          onClick={handlePrevClick}
          aria-label="Previous slide"
          type="button"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          className="customArrow customArrowNext hidden-s hidden-m"
          onClick={handleNextClick}
          aria-label="Next slide"
          type="button"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
