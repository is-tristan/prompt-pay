// Components
import Heading from "@/components/ui/reusables/heading";
import Buttons from "@/components/ui/reusables/buttons";

export default function WhoWeAre() {

    return (

        <section id="who-we-are" className="row whoWeAre">

            <div className="container centered">

                <Heading
                    className="hasFullStop"
                    eyebrow="WHO WE ARE"
                    title="Turning transactions into real growth"
                />

                <div className="textBlock">

                    <p>At Prompt Pay Capital, we keep it simple: accept cards, pay less, and keep more revenue. We provide advanced payment technology powered by Worldpay and Clover, along with modern e-commerce solutions and web gateways. <strong>Clients save up to 80%</strong> on processing fees and benefit from in-person service, installation, and a free audit to reveal savings before switching.</p>

                    <p>With transparent pricing and no hidden fees, we also deliver tools like Syncvue and CasinoPal for insights beyond typical support. Because we work hands-on with hardware and gateways every day, we know how small adjustments can drive major results for your business.</p>

                </div>

                <Buttons
                    btnOneText="Contact us"
                    btnOneLink="/contact"
                    btnOneClass="primary hasAnimation"
                    btnTwoText="Sign up today"
                    btnTwoLink="#"
                    btnTwoClass="light"
                />

            </div>

        </section>

    );

}