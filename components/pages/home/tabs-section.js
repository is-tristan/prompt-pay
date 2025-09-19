// Next
import Image from "next/image";

// Components
import Heading from "@/components/ui/reusables/heading";
import ProductSlider from "@/components/sliders/products-slider";

// Background Images
const dots = "/backgrounds/background-dots-top-right.png";

export default function HomeTabs() {

    return (

        <section className={`row homeTabs`}>

            <Image src={dots} alt="" className="bgTopRight" fill sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: "contain", objectPosition: "right top", zIndex: "-1" }} />

            <div className={`container noPaddingBottom centered`}>

                <Heading className="hasFullStop" eyebrow="Powerfull Technology" title="Revolutionary products to help your business, flow" />

            </div>

            <div className={`container noPaddingTop overflowSlider`}>

                <ProductSlider />

            </div>

        </section>
    )
}