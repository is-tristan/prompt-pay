"use client"

// Next
import Image from "next/image";
import { useState, useRef } from "react";

// Components
import Buttons from "@/components/ui/reusables/buttons";

// Styles
import "@/styles/ui/sliders/product-slider.scss";
import "@/styles/ui/sliders/splide-styles.scss";
import '@splidejs/react-splide/css';

// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Icons
import { ArrowLeft, ArrowRight, ChevronDown } from '@carbon/react/icons';

// Images
const cloverFlexThumbnail = "/images/products/clover-flex/clover-flex-thumbnail.png";
const cloverMiniThumbnail = "/images/products/clover-mini/clover-mini-thumbnail.png";
const cloverDuoThumbnail = "/images/products/clover-duo/clover-duo-thumbnail.png";
const dx4000Thumbnail = "/images/products/dx4000/dx4000-thumbnail.png";
const dx8000Thumbnail = "/images/products/dx8000/dx8000-thumbnail.png";
const worldPay360Thumbnail = "/images/products/worldpay-360/worldpay-360-thumbnail.png";

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

    const cloverSlides = [
        {
            id: 1,
            image: cloverFlexThumbnail,
            alt: "Clover Flex Image",
            title: "Clover Flex",
            smallText: "The Clover Flex is a sales-ready card reader allowing you to take payments on the go — anywhere — with a tap, swipe or scan.",
            listText: [
                "<li>Remote onboarding for Apple Pay, Alipay, and Android Pay</li>",
                "<li>Real-time employee permissions and inventory management</li>",
                "<li>Multi-connectivity via WiFi, mobile data, and cloud services</li>",
                "<li>Scalable with full Clover hardware accessory range</li>"
            ],
            link: "/products/clover-flex",
            linkLabel: "View Product"
        },
        {
            id: 2,
            image: cloverMiniThumbnail,
            alt: "Clover Mini Image",
            title: "Clover Mini",
            smallText: "The Clover Mini is a small and robust payment system designed to sit neatly at the point of sale.",
            listText: [
                "<li>Intuitive business management features</li>",
                "<li>Compact design with payment processing, inventory, and scheduling</li>",
                "<li>Wide range of integrated apps for customization</li>"
            ],
            link: "/products/clover-flex",
            linkLabel: "View Product"
        },
        {
            id: 3,
            image: cloverDuoThumbnail,
            alt: "Clover Station Duo Image",
            title: "Clover Station Duo",
            smallText: "Clover Station Duo A fast, dual-screen POS  Our all in one POS moves at the speed of your business. Step up your transactions with a customer-facing screen.",
            listText: [
                "<li>Dual-screen POS with 14″ HD display and 8″ customer touchscreen</li>",
                "<li>All-in-one system with cash drawer and printer</li>",
                "<li>Seamless integration with multiple Clover devices and accessories</li>",
                "<li>Customizable for your specific business needs</li>"
            ],
            link: "/products/clover-flex",
            linkLabel: "View Product"
        },
    ];

    const WorldPaySlides = [
        {
            id: 1,
            image: dx4000Thumbnail,
            alt: "DX4000 Image",
            title: "DX4000",
            smallText: "A compact Android-based terminal designed for secure, reliable, and flexible payments.",
            listText: [
                "<li>Android 10 with 5″ HD touchscreen</li>",
                "<li>Built-in thermal printer and multi-connectivity</li>",
                "<li>Supports EMV, NFC, magstripe, and digital wallets</li>",
                "<li>PCI PTS v6 certified for retail and service businesses</li>"
            ],
            link: "/products/dx4000",
            linkLabel: "View Product"
        },
        {
            id: 2,
            image: dx8000Thumbnail,
            alt: "DX8000 Image",
            title: "DX8000",
            smallText: "A high-performance handheld terminal with a large screen and full payment flexibility.",
            listText: [
                "<li>Android-based mobile terminal with 6″ touchscreen</li>",
                "<li>Integrated thermal printer and long-lasting battery</li>",
                "<li>Supports EMV, NFC, magstripe, QR codes, and digital wallets</li>",
                "<li>3GB RAM, 32GB storage, and PCI PTS v6 compliance</li>"
            ],
            link: "/products/dx8000",
            linkLabel: "View Product"
        },
        {
            id: 3,
            image: worldPay360Thumbnail,
            alt: "World Pay 360 Image",
            title: "World Pay 360",
            smallText: "A sleek dual-screen POS system designed for speed, flexibility, and customer interaction.",
            listText: [
                "<li>Dual-screen POS with HD touchscreen and customer display</li>",
                "<li>Supports contactless, EMV, magstripe, and mobile wallets</li>",
                "<li>Built-in printing and real-time inventory tracking</li>",
                "<li>Compatible with cash drawers and barcode scanners</li>"
            ],
            link: "/products/world-pay-360",
            linkLabel: "View Product"
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

        <>

            <div className="container tabNav centered">

                <div className={`tabNavItem ${activeTab === "cloverTab" ? "active" : ""}`} data-tab="cloverTab" onClick={() => setActiveTab("cloverTab")}>Clover</div>

                <div className={`tabNavItem ${activeTab === "worldPayTab" ? "active" : ""}`} data-tab="worldPayTab" onClick={() => setActiveTab("worldPayTab")}>Worldpay</div>

            </div>

            <div className="sliderWrapper productSliderWrapper">

                <Splide ref={splideRef} options={options} aria-label="Products Slider" className={`splideSlider productSlider`}>

                    {activeTab === "cloverTab" && cloverSlides.map((slide) => (

                        <SplideSlide key={slide.id}>

                            <article className="productCard">

                                <div className={`productImage fill`}>

                                    <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />

                                </div>

                                <div className="productContent">

                                    <h3 className="productTitle">{slide.title}</h3>

                                    <p className="productText">{slide.smallText}</p>

                                    <div className={`additionalInfo`}>

                                        <button
                                            className={`additionalInfoToggle ${isInfoOpen === slide.id ? "open" : ""}`}
                                            onClick={() => toggleInfo(slide.id)}
                                            aria-expanded={isInfoOpen === slide.id ? "true" : "false"}
                                            aria-controls={`additionalInfo-${slide.id}`}
                                        >
                                            <span>{isInfoOpen === slide.id ? "Less Info" : "More Info"}</span>

                                            <ChevronDown size={16} />

                                        </button>

                                        <div className={`additionalInfoInner`} style={{ display: isInfoOpen === slide.id ? "block" : "none" }} id={`additionalInfo-${slide.id}`}>

                                            <ul dangerouslySetInnerHTML={{ __html: slide.listText.join('') }} />

                                        </div>

                                    </div>

                                    <Buttons btnOneText={slide.linkLabel} btnOneLink={slide.link} btnOneClass="primary slideBtn hasAnimation" />

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

                    {activeTab === "worldPayTab" && WorldPaySlides.map((slide) => (

                        <SplideSlide key={slide.id}>

                            <article className="productCard">

                                <div className={`productImage fill`}>

                                    <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />

                                </div>

                                <div className="productContent">

                                    <h3 className="productTitle">{slide.title}</h3>

                                    <p className="productText">{slide.smallText}</p>

                                    <div className={`additionalInfo`}>

                                        <button
                                            className={`additionalInfoToggle ${isInfoOpen === slide.id ? "open" : ""}`}
                                            onClick={() => toggleInfo(slide.id)}
                                            aria-expanded={isInfoOpen === slide.id ? "true" : "false"}
                                            aria-controls={`additionalInfo-${slide.id}`}
                                        >
                                            <span>{isInfoOpen === slide.id ? "Less Info" : "More Info"}</span>

                                            <ChevronDown size={16} />

                                        </button>

                                        <div className={`additionalInfoInner`} style={{ display: isInfoOpen === slide.id ? "block" : "none" }} id={`additionalInfo-${slide.id}`}>

                                            <ul dangerouslySetInnerHTML={{ __html: slide.listText.join('') }} />

                                        </div>

                                    </div>

                                    <Buttons btnOneText={slide.linkLabel} btnOneLink={slide.link} btnOneClass="primary slideBtn hasAnimation" />

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

        </>

    );
};