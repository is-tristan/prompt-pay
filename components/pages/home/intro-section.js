// Components
import Heading from "@/components/ui/reusables/heading";
import Buttons from "@/components/ui/reusables/buttons";

export default function IntroSection() {

    return (

        <section className="row introSection">

            <div className="container centered noPaddingBottom">

                <Heading
                    className="hasFullStop"
                    eyebrow="Welcome to Prompt Pay Capital"
                    title="Maximising every payment for lasting growth"
                    text="Prompt Pay helps UK businesses cut unnecessary card processing costs, boost cash flow, and access powerful tools that make every transaction count. From smarter payment systems to revenue-driving add-ons like loyalty, financing, and analytics, we don't just save you money, we help you make more of it."
                />

                <Buttons
                    btnOneClass="primary hasAnimation"
                    btnOneText="View Products"
                    btnOneLink="#products"
                    btnTwoText="Explore Features"
                    btnTwoLink="#features"
                    btnTwoClass="light"
                />

            </div>

        </section>

    )

}
