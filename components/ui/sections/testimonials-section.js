"use client"

// Next
import { useRef } from "react";
import Image from "next/image";

// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import "@/styles/ui/reusables/testimonials.scss";

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Icons
import { ArrowLeft, ArrowRight } from '@carbon/react/icons';

// Data
import TestimonialsData from "@/data/testimonials.json";

export default function TestimonialsSection() {

    const splideRef = useRef(null);

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '0',
        autoplay: true,
        interval: 7500,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
        pagination: true,
    }

    const handlePrevClick = () => {
        if (splideRef.current?.splide) {
            splideRef.current.splide.go('<');
        }
    };

    const handleNextClick = () => {
        if (splideRef.current?.splide) {
            splideRef.current.splide.go('>');
        }
    };

    return (

        <section id="testimonials" className="row testimonialsSection">

            <div className="container spaceBetween testimonialsHeader">

                <Heading eyebrow="LOVED BY OUR CLIENTS" title="Success stories from our valued customers." />

                <div className="testimonialGoogleCard">

                    <Image src="/logos/external/google-reviews-badge.svg" alt="Google Reviews Badge" width={128} height={28} loading="lazy" />

                    <span><strong>4.9</strong> Based on <strong>234+</strong> reviews</span>

                </div>

            </div>

            <div className="container noPaddingTop sliderWrapper testimonialsSliderWrapper">

                <Splide ref={splideRef} options={options} aria-label="Feature Slider" className={`splideSlider testimonialsSlider`}>

                    {TestimonialsData.map((slide) => (

                        <SplideSlide key={slide.id}>

                            <article className="testimonialCard">

                                <div className="testimonialImage">

                                    <Image src={slide.thumbnail} alt={`${slide.name} Thumbnail`} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />

                                </div>

                                <div className="testimonialContent">

                                    <p className="testimonialQuote">{slide.quote}</p>

                                    <div className="testimonialMeta">

                                        <div className="testimonialMetaText">

                                            <h4>{slide.name}</h4>

                                            <p>{slide.business}</p>

                                        </div>

                                        <div className="testimonialMetaLogo">

                                            <Image src={slide.businessLogo} alt={`${slide.business} Logo`} width={128} height={48} loading="lazy" />

                                        </div>

                                    </div>

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

        </section>


    );
};