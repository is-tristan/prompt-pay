"use client";

// Next
import Image from "next/image";
import { useRef, useState } from "react";

// Components
import Buttons from "@/components/ui/reusables/buttons";

// Styles
import "@/styles/ui/sliders/product-slider.scss";
import "@/styles/ui/sliders/splide-styles.scss";
import "@splidejs/react-splide/css";

// Icons
import { ArrowLeft, ArrowRight, ChevronDown } from "@carbon/react/icons";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Product Data
import ProductData from "@/data/products.json";

export default function ProductSlider() {
  const splideRef = useRef(null);
  const [activeTab, setActiveTab] = useState("cloverTab");
  const [isInfoOpen, setIsInfoOpen] = useState(null);

  const toggleInfo = (id) => {
    if (isInfoOpen === id) {
      setIsInfoOpen(null);
    } else {
      setIsInfoOpen(id);
    }
  };

  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "4rem",
    autoplay: true,
    interval: 7500,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: true,
    padding: { left: "25%", right: "25%" },
    speed: 350,
    breakpoints: {
      1919: {
        padding: { left: "20%", right: "20%" },
        gap: "3rem",
      },
      1200: {
        perPage: 2,
        padding: { left: "15%", right: "15%" },
        arrows: false,
      },
      768: {
        perPage: 1,
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

    <>

      <div className="container tabNav centered">

        <div className={`tabNavItem ${activeTab === "cloverTab" ? "active" : ""}`} data-tab="cloverTab" onClick={() => setActiveTab("cloverTab")} > Clover </div>

        <div className={`tabNavItem ${activeTab === "worldPayTab" ? "active" : ""}`} data-tab="worldPayTab" onClick={() => setActiveTab("worldPayTab")} > Worldpay </div>

      </div>

      <div className="sliderWrapper productSliderWrapper">

        <Splide ref={splideRef} options={options} aria-label="Products Slider" className={`splideSlider productSlider`}>

          {activeTab === "cloverTab" ? ProductData[0].clover.map((slide) => (

            <SplideSlide key={slide.id}>

              <article className="productCard">

                <div className={`productImage fill`}>

                  <Image
                    src={slide.productImage}
                    alt={slide.productName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />

                </div>

                <div className="productContent">

                  <h3 className="productTitle">{slide.productName}</h3>

                  <p className="productText">{slide.description}</p>

                  <div className={`additionalInfo`}>

                    <button
                      className={`additionalInfoToggle ${isInfoOpen === slide.id ? "open" : ""}`}
                      onClick={() => toggleInfo(slide.id)}
                      aria-expanded={isInfoOpen === slide.id ? "true" : "false"}
                      aria-controls={`additionalInfo-${slide.id}`}
                      type="button"
                    >

                      <span> {isInfoOpen === slide.id ? "Less Info" : "More Info"} </span>

                      <ChevronDown size={16} />

                    </button>

                    <div
                      className={`additionalInfoInner`}
                      style={{ display: isInfoOpen === slide.id ? "block" : "none" }}
                      id={`additionalInfo-${slide.id}`}
                    >

                      <ul dangerouslySetInnerHTML={{ __html: slide.features.join("") }} />

                    </div>

                  </div>

                  <Buttons
                    btnOneText="Learn More"
                    btnOneLink={slide.slug}
                    btnOneClass="primary slideBtn hasAnimation"
                  />

                </div>

              </article>

              <div className="arrows">

                <button
                  className="productSliderArrows productSliderArrows--prev hidden-s hidden-m"
                  onClick={handlePrevClick}
                  aria-label="Previous slide"
                  type="button"
                >

                  <ArrowLeft size={24} />

                </button>

                <button
                  className="productSliderArrows productSliderArrows--next hidden-s hidden-m"
                  onClick={handleNextClick}
                  aria-label="Next slide"
                  type="button"
                >

                  <ArrowRight size={24} />

                </button>

              </div>

            </SplideSlide>

          )) : activeTab === "worldPayTab" ? ProductData[0].worldpay.map((slide) => (
            <SplideSlide key={slide.id}>

              <article className="productCard">

                <div className={`productImage fill`}>
                  <Image
                    src={slide.productImage}
                    alt={slide.productName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                <div className="productContent">

                  <h3 className="productTitle">{slide.productName}</h3>

                  <p className="productText">{slide.description}</p>

                  <div className={`additionalInfo`}>

                    <button
                      className={`additionalInfoToggle ${isInfoOpen === slide.id ? "open" : ""}`}
                      onClick={() => toggleInfo(slide.id)}
                      aria-expanded={isInfoOpen === slide.id ? "true" : "false"}
                      aria-controls={`additionalInfo-${slide.id}`}
                      type="button"
                    >

                      <span> {isInfoOpen === slide.id ? "Less Info" : "More Info"} </span>

                      <ChevronDown size={16} />

                    </button>

                    <div
                      className={`additionalInfoInner`}
                      style={{ display: isInfoOpen === slide.id ? "block" : "none" }}
                      id={`additionalInfo-${slide.id}`}
                    >

                      <ul dangerouslySetInnerHTML={{ __html: slide.features.join("") }} />

                    </div>

                  </div>

                  <Buttons
                    btnOneText="Learn More"
                    btnOneLink={slide.slug}
                    btnOneClass="primary slideBtn hasAnimation"
                  />

                </div>

              </article>

              <div className="arrows">

                <button
                  className="productSliderArrows productSliderArrows--prev hidden-s hidden-m"
                  onClick={handlePrevClick}
                  aria-label="Previous slide"
                  type="button"
                >

                  <ArrowLeft size={24} />

                </button>

                <button
                  className="productSliderArrows productSliderArrows--next hidden-s hidden-m"
                  onClick={handleNextClick}
                  aria-label="Next slide"
                  type="button"
                >

                  <ArrowRight size={24} />

                </button>

              </div>

            </SplideSlide>

          )) : null}

        </Splide>

      </div>

    </>

  );

}
