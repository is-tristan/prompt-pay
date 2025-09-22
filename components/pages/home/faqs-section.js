// Components
import Heading from "../../ui/reusables/heading";
import Buttons from "@/components/ui/reusables/buttons";
import Faqs from "@/components/ui/reusables/faqs";

export default function FaqsSection() {

    const faqs = [
        {
            question: "How does the processing work?",
            answer: "When a customer buys online or in-store, our partners securely transmit payment details to the processor, which authorizes the transaction and transfers funds to your account—all PCI compliant. Offer flexible options like credit/debit cards, contactless, mobile wallets, and Buy Now, Pay Later, plus multi-currency support for international sales. Integrations with e-commerce platforms and accounting tools, combined with real-time reporting, give you control, actionable insights, and the efficiency to grow your business confidently."
        },
        {
            question: "How do the payouts work?",
            answer: "Once a payment is approved, funds are securely transferred to your merchant account daily, giving you fast, predictable access to your revenue. All transfers are fully PCI compliant and encrypted, ensuring complete security for your business and customers. Real-time dashboards provide full visibility into each payment, while multi-currency support and detailed reporting help you manage cash flow effortlessly. With streamlined, reliable payouts, you gain operational control, actionable insights, and the confidence to grow your business."
        },
        {
            question: "Can I integrate with my website?",
            answer: "Yes, our payment processing solution can be easily integrated into your website using our APIs and SDKs. We provide comprehensive documentation and support to help you through the integration process."
        },
        {
            question: "Will I have a dashboard for sales?",
            answer: "Yes, our platform provides a comprehensive dashboard that gives you real-time insights into your sales performance. You can track key metrics, view transaction history, and generate reports to help you make informed business decisions."
        },
        {
            question: "Is there any 24/7 live chat or support?",
            answer: "Yes, we offer 24/7 live chat and support to assist you with any questions or issues you may have."
        },
        {
            question: "How can I manage my devices?",
            answer: "Our platform allows you to easily manage your devices through the dashboard. You can add, remove, and configure devices as needed to ensure optimal performance and security."
        },
    ]

    return (

        <section id="faq" className="row faqsSection">

            <div className="container spaceBetween noPaddingBottom">

                <Heading
                    className="hasFullStop centerText"
                    eyebrow="FREQUENTLY ASKED QUESTIONS"
                    title="Quick answers, even faster payments"
                />

                <Buttons
                    btnOneClass="primary hasAnimation"
                    btnOneText="See all FAQs"
                    btnOneLink="/faqs"
                />

            </div>

            <div className="container noPaddingTop">

                <Faqs faqs={faqs} />

            </div>

        </section>
    )

}