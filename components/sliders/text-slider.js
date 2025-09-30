"use client";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Next
import Image from "next/image";
// Styles
import styles from "@/styles/ui/sliders/text-slider.module.scss";
import "@splidejs/react-splide/css";

export default function TextSlider() {
  const options = {
    type: "loop",
    perPage: 7,
    perMove: 1,
    gap: "2rem",
    arrows: false,
    pagination: false,
    drag: false,
    fixedWidth: "17.5rem",
    autoScroll: {
      speed: 0.66,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    responsive: {
      1280: {
        perPage: 5,
      },
      768: {
        perPage: 3,
      },
      480: {
        perPage: 2,
      },
    },
  };

  const worldPaySlides = [
    {
      id: 1,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
    },
    {
      id: 2,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
    },
    {
      id: 3,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
    },
    {
      id: 4,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
    },
    {
      id: 5,
      image: "/logos/external/worldpay-logo.svg",
      alt: "Worldpay Logo",
    },
  ];

  const cloverSlides = [
    {
      id: 1,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
      logoMark: "/logos/logo-mark.svg",
    },
    {
      id: 2,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
      logoMark: "/logos/logo-mark.svg",
    },
    {
      id: 3,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
    },
    {
      id: 4,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
    },
    {
      id: 5,
      image: "/logos/external/clover-logo.svg",
      alt: "Clover Logo",
    },
  ];

  return (
    <div className={`row ${styles.textSliderRow}`} aria-hidden="true">
      <div className={`${styles.textSliderContainer} ${styles.textSliderOne}`}>
        <Splide
          options={options}
          extensions={{ AutoScroll }}
          aria-label="Worldpay Slider"
          className={`${styles.textSlider}`}
        >
          {worldPaySlides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className={styles.textSlideItem}>
                <span>Powered by</span>

                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={96}
                  height={32}
                  loading="lazy"
                />

                <Image
                  src="/logos/logo-mark.svg"
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  className={styles.logoMark}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className={`${styles.textSliderContainer} ${styles.textSliderTwo}`}>
        <Splide
          options={{ ...options, direction: "rtl" }}
          extensions={{ AutoScroll }}
          aria-label="Clover Slider"
          className={`${styles.textSlider}`}
        >
          {cloverSlides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className={styles.textSlideItem}>
                <span>Powered by</span>

                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={96}
                  height={32}
                  loading="lazy"
                />

                <Image
                  src="/logos/logo-mark.svg"
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  className={styles.logoMark}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
