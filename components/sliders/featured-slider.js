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
const fastFunding = "/images/features/thumbnail-fast-funding.webp";
const integrationsImage = "/images/features/thumbnail-integrations.webp";
const powerfulDashboardImage = "/images/features/thumbnail-powerful-dashboard.webp";
const globalPaymentsImage = "/images/features/thumbnail-global-payments.webp";
const businessReadyImage = "/images/features/thumbnail-business-ready.webp";
const liveSupportImage = "/images/features/thumbnail-live-support.webp";

export default function FeatureSlider() {
  const splideRef = useRef(null);

  const cloverSlides = [
    {
      id: 1,
      image: fastFunding,
      alt: "Fast Funding Feature Image",
      title: "Fast Funding",
      text: "Many businesses don't realize they can get funding based on their card payments—and that's exactly what Prompt Pay Capital offers. Through our trusted partners, you can access cash quickly.",
      link: "/contact",
      linkLabel: "Sign up today",
    },
    {
      id: 2,
      image: globalPaymentsImage,
      alt: "Global Payments Image",
      title: "Global Payments",
      text: "We make accepting payments simple and stress-free. With fast setup, secure transactions, and flexible payment options, you can start taking payments anytime, anywhere.",
      link: "/contact",
      linkLabel: "Sign up today",
    },
    {
      id: 3,
      image: powerfulDashboardImage,
      alt: "Powerful Dashboard Image",
      title: "Powerful Dashboard",
      text: "Empower your business with our partners' powerful dashboards. With a clean, intuitive interface, tracking sales, understanding customer behavior, and managing inventory becomes effortless.",
      link: "/contact",
      linkLabel: "Sign up today",
    },
    {
      id: 4,
      image: integrationsImage,
      alt: "Integrations Feature Image",
      title: "Integrations",
      text: "Connect your business effortlessly with our partners' powerful integrations. Securely process payments and manage sales, inventory, and customer data with intuitive POS systems. ",
      link: "/contact",
      linkLabel: "Sign up today",
    },
    {
      id: 5,
      image: businessReadyImage,
      alt: "Ecommerce Ready Image",
      title: "Ecommerce Ready",
      text: "Seamlessly integrate your online store with our partners' advanced e-commerce solutions. Accept secure payments, manage sales and inventory effortlessly, and offer customers a smooth checkout experience.",
      link: "/contact",
      linkLabel: "Sign up today",
    },
    {
      id: 6,
      image: liveSupportImage,
      alt: "Live Support Image",
      title: "24/7 Live Support",
      text: "Your business never stops & neither does our support. Every product we offer, from card machines and POS systems to online gateways and payment solutions, comes with round-the-clock assistance.",
      link: "/contact",
      linkLabel: "Sign up today",
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
