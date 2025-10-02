"use client";

// Next
import Image from "next/image";

// Styles
import styles from "@/styles/ui/sliders/logo-slider.module.scss";

// Data
import slideData from "@/data/logo-slider.json";

// Logo Mark
import logoMark from "@/public/logos/logo-mark.svg";

export default function logoSlider() {
  // Function to triple the slides for seamless infinite scrolling
  const multiplySlides = (slides) => {
    return [...slides, ...slides, ...slides, ...slides, ...slides];
  };

  const worldpaySlides = multiplySlides(slideData[0].worldpay);
  const cloverSlides = multiplySlides(slideData[0].clover);

  return (

    <div className={`row ${styles.logoSliderRow}`} aria-hidden="true">

      <div className={`${styles.logoSliderContainer} ${styles.logoSliderOne}`}>

        <div className={`${styles.logoSliderTrack}`}>

          {worldpaySlides.map((slide, index) => (

            <div className={styles.logoSlideItem} key={`worldpay-${slide.id}-${index}`}>

              <span>Powered by</span>

              <Image src={slide.image} className={styles.logo} alt={slide.alt} width={96} height={32} loading="lazy" />

              <Image src={logoMark} className={styles.logoMark} alt="Logo mark" width={32} height={32} loading="lazy" aria-hidden="true" />

            </div>

          ))}

        </div>

      </div>

      <div className={`${styles.logoSliderContainer} ${styles.logoSliderTwo}`}>

        <div className={`${styles.logoSliderTrack}`}>

          {cloverSlides.map((slide, index) => (

            <div className={styles.logoSlideItem} key={`clover-${slide.id}-${index}`}>

              <span>Powered by</span>

              <Image src={slide.image} className={styles.logo} alt={slide.alt} width={96} height={32} loading="lazy" />

              <Image src={logoMark} className={styles.logoMark} alt="Logo mark" width={32} height={32} loading="lazy" aria-hidden="true" />

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}
