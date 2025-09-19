// Components
import FeatureSlider from "@/components/sliders/featured-slider";
import Heading from "../../ui/reusables/heading";

export default function FeaturedSection() {

    return (

        <section className="section featuredSection">

            <div className="container noPaddingTop noPaddingBottom centered" style={{ marginBottom: "1.5rem" }}>

                <Heading
                    className="hasFullStop hasMaxWidth"
                    eyebrow="REVOLUTIONARY FEATURES"
                    title="A feast of innovative features await"
                />

            </div>

            <div className="container overflowSlider noPaddingTop noPaddingBottom">

                <FeatureSlider />

            </div>

        </section>

    )

}