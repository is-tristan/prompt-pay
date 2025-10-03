import Banner from "@/components/ui/reusables/banner";

// Images
const legalCover = "/covers/legal-pages-cover.webp";

export default function SarPage() {
    
    return (
        <>
            <Banner
                backgroundImage={legalCover}
                eyebrow="Subject Access Request"
                heading="Your Data, Your Rights"
                buttonTextOne="Contact us"
                buttonTextLinkOne="/contact"
                buttonClassOne="primary"
            />

            <section className="row">

                <div className="container" style={{ gap: "1rem", maxWidth: "60rem" }}>

                    <p>The EU General Data Protection Regulation (GDPR) grants you the right to access your personal data held by Prompt Pay Capital LTD. These requests are known as Subject Access Requests (SAR). In accordance with Section 45 of the GDPR, we will provide confirmation that we are processing your personal data, provide details regarding the processing of your personal data, and provide you with a copy of the personal data we hold.</p>

                    <h2>Making a Subject Access Request</h2>

                    <p>Subject Access Requests must be submitted in writing. We aim to respond to your request within one month of receiving your Subject Access Request and proof of identity. In some cases (where requests are complex or numerous), we may take up to an additional two months. If this is the case, we will inform you.</p>

                    <p>Please email your request to:</p>

                    <p><a href="mailto:support@promptpaycapital.com" style={{ fontWeight: "700", textDecoration: "underline" }}>support@promptpaycapital.com</a></p>

                    <p>Please include your proof of identity or any relevant documentation confirming your entitlement to act on behalf of the data subject (such as a signed form of authority or power of attorney).</p>

                    <p>Our Data Protection Officer may request additional information to verify your identity, ensuring that we are providing your personal data only to you.</p>

                </div>

            </section>

        </>

    );
}