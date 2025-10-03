import Banner from "@/components/ui/reusables/banner";

// Images
const legalCover = "/covers/legal-pages-cover.webp";

export default function RefundsPage() {
    
    return (
        <>
            <Banner
                backgroundImage={legalCover}
                eyebrow="Refunds & Cancellations"
                heading="Hassle-free refunds and cancellations"
                buttonTextOne="Contact us"
                buttonTextLinkOne="/contact"
                buttonClassOne="primary"
            />

            <section className="row">

                <div className="container" style={{ gap: "1rem", maxWidth: "60rem" }}>

                    <p>Your Statutory rights are included, you can return your items via courier within 30 calendar days of receiving your order in accordance with our ‘30 Day Money Back Guarantee' offer, as advertised on our website, for a full refund. Equipment must be returned in its original packaging and not have any missing parts or components to qualify for a full refund.</p>

                    <p>Once we receive your item, a refund process is initiated immediately. The way your refund is processed depends on your original payment method. If you paid by credit or debit card, refunds will be sent to the card-issuing bank within five business days of receipt of the returned item or cancellation request. Your Direct Debit will also be cancelled if already in place. Please contact the card-issuing bank with questions about when the credit will be posted to your account or contact Prompt Pay Capital more information.</p>

                    <h2>Contact Us</h2>

                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:</p>

                    <ul>

                        <li>Prompt Pay Capital</li>
                        <li>Email: <a href="mailto:info@promptpaycapital.com">info@promptpaycapital.com</a></li>

                    </ul>

                </div>

            </section>

        </>

    );
}