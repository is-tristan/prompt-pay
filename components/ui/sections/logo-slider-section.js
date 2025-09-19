"use client"

// Next
import Image from "next/image";

// Styles
import "@/styles/components/reusables/logo-slider.scss";

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function FeatureSlider() {

    const sliderSpeed = "0.4";

    // Function to shuffle array randomly
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Function to generate logo data from external folder
    function generateLogoData() {
        const logoFiles = [
            'apple-pay-logo.svg',
            'bigcommerce-logo.svg',
            'clover-logo.svg',
            'discover-logo.svg',
            'liberis-logo.svg',
            'magento-logo.svg',
            'mastercard-logo.svg',
            'samsung-pay-logo.svg',
            'shopify-logo.svg',
            'visa-logo.svg',
            'woocommerce-logo.svg',
            'worldpay-logo.svg'
        ];

        // Shuffle the logos for random order on each page load
        const shuffledLogos = shuffleArray(logoFiles);

        return shuffledLogos.map((filename, index) => {
            const name = filename.replace('-logo.svg', '').replace(/-/g, ' ');
            const brandName = name.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            return {
                id: index + 1,
                name: brandName,
                filename: filename,
                image: `/logos/external/${filename}`,
                alt: `${brandName} Logo`
            };
        });
    }

    const logoSlides = generateLogoData();

    const options = {
        type: 'loop',
        perPage: 6,
        perMove: 1,
        gap: '3rem',
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: false,
        padding: { left: "7.5%", right: "7.5%" },
        fixedWidth: "7.5rem",
        fixedHeight: "5rem",
        autoScroll: {
            speed: sliderSpeed,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        breakpoints: {
            768: {
                perPage: 3,
            },
        },
    }

    return (

        <section className="row logoSliderSection">

            <div className="container noPaddingBottom centered">

                <h3 className="logoSliderHeading">More than <span style={{ color: "var(--primary)" }}>1,000,000+</span> Partners around the globe.</h3>

            </div>

            <div className="container overflowSlider noPaddingTop">

                <div className="logoSliderWrapper">

                    <Splide options={options} extensions={{ AutoScroll }} aria-label="Logo Slider" className={`logoSlider`}>

                        {logoSlides.map((slide) => (

                            <SplideSlide key={slide.id}>

                                <div className="logoSlide">

                                    <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />

                                </div>

                            </SplideSlide>

                        ))}

                    </Splide>

                    <Splide options={{ ...options, autoScroll: { speed: (sliderSpeed * -1) } }} extensions={{ AutoScroll }} aria-label="Logo Slider" className={`logoSlider`}>

                        {logoSlides.map((slide) => (

                            <SplideSlide key={slide.id}>

                                <div className="logoSlide">

                                    <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />

                                </div>

                            </SplideSlide>

                        ))}

                    </Splide>

                </div>

            </div>

        </section>

    );
};