"use client"

// Next
import Image from "next/image";
import { useRef } from "react";

// Components
import Buttons from "@/components/ui/reusables/buttons";

// Styles
import "@/styles/ui/sliders/product-slider.scss";
import "@/styles/ui/sliders/splide-styles.scss";
import '@splidejs/react-splide/css';

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Icons
import { ArrowLeft, ArrowRight } from '@carbon/react/icons';

// Images
const cloverProductImage = "/products/clover-flex-thumbnail.png";

export default function ProductSlider() {

    const splideRef = useRef(null);

    const cloverSlides = [
        {
            id: 1,
            image: cloverProductImage,
            alt: "Clover Flex POS Image",
            title: "Clover Flex",
            text: "<p>The Clover Flex is a sales-ready card reader allowing you to take payments on the go.</p> <p>Remotely onboard and set up new payment methods such as Apple Pay, Alipay and Android Pay. </p> <p>Manage employee permissions, inventory and other business insights quickly with digestible data on hand.</p> <p>Scale-up with the accessories from the Clover hardware range.</p>",
            link: "/products/clover-flex",
            linkLabel: "Learn More"
        },
        {
            id: 2,
            image: cloverProductImage,
            alt: "Clover Flex POS Image",
            title: "Clover Flex",
            text: "<p>The Clover Flex is a sales-ready card reader allowing you to take payments on the go.</p> <p>Remotely onboard and set up new payment methods such as Apple Pay, Alipay and Android Pay. </p> <p>Manage employee permissions, inventory and other business insights quickly with digestible data on hand.</p> <p>Scale-up with the accessories from the Clover hardware range.</p>",
            link: "/products/clover-flex",
            linkLabel: "Learn More"
        },
        {
            id: 3,
            image: cloverProductImage,
            alt: "Clover Flex POS Image",
            title: "Clover Flex",
            text: "<p>The Clover Flex is a sales-ready card reader allowing you to take payments on the go.</p> <p>Remotely onboard and set up new payment methods such as Apple Pay, Alipay and Android Pay. </p> <p>Manage employee permissions, inventory and other business insights quickly with digestible data on hand.</p> <p>Scale-up with the accessories from the Clover hardware range.</p>",
            link: "/products/clover-flex",
            linkLabel: "Learn More"
        },
    ];

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '4rem',
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
                gap: '3rem',
            },
            1200: {
                perPage: 2,
                padding: { left: "15%", right: "15%" },
                arrows: false,
            },
            768: {
                perPage: 1,
                padding: { left: "7.5%", right: "7.5%" },
                gap: '0.75rem',
            },
        },
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

        <div className="sliderWrapper productSliderWrapper">

            <Splide ref={splideRef} options={options} aria-label="Products Slider" className={`splideSlider productSlider`}>

                {cloverSlides.map((slide) => (

                    <SplideSlide key={slide.id}>

                        <article className="productCard">

                            <div className="productContent">

                                <h3 className="productTitle">{slide.title}</h3>

                                <p className="productText" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: slide.text }} />

                                <Buttons btnOneText={slide.linkLabel} btnOneLink={slide.link} btnOneClass="primary hasAnimation" />

                            </div>

                            <div className={`productImage fill`}>

                                <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />

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

                ))}

            </Splide>

        </div>

    );
};