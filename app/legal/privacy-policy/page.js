import Banner from "@/components/ui/reusables/banner";

// Images
const legalCover = "/covers/legal-pages-cover.webp";

export default function PrivacyPolicyPage() {
    
    return (
        <>
            <Banner
                backgroundImage={legalCover}
                eyebrow="Privacy Policy"
                heading="Your privacy is our priority"
                buttonTextOne="Contact us"
                buttonTextLinkOne="/contact"
                buttonClassOne="primary"
            />

            <section className="row">

                <div className="container" style={{ gap: "1rem", maxWidth: "60rem" }}>

                    <p><strong>Effective Date:</strong> October 2, 2025</p>

                    <p>At Prompt Pay Capital, we respect your privacy and are committed to protecting any personal information that you provide to us. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.</p>

                    <h2>Information We Collect</h2>

                    <p>We may collect the following types of information when you use our website or contact us:</p>

                    <ul>

                        <li>Personal details such as your name, email address, phone number, and company information.</li>
                        <li>Information you provide through contact forms, email communication, or when registering interest in our services.</li>
                        <li>Technical data such as your IP address, browser type, device information, and pages you visit on our website.</li>


                    </ul>

                    <h2>How We Use Your Information</h2>

                    <p>We use the information we collect to:</p>

                    <ul>

                        <li>Respond to your enquiries and provide customer support.</li>
                        <li>Deliver and improve our services.</li>
                        <li>Send important updates, administrative information, and promotional communications (if you have opted in).</li>
                        <li>Comply with legal and regulatory obligations.</li>

                    </ul>

                    <h2>How We Share Your Information</h2>

                    <p>Prompt Pay Capital does not sell, rent, or trade personal information to third parties. We may share information with trusted service providers and partners who assist us in operating our website and delivering our services, under strict confidentiality agreements. Information may also be disclosed if required by law or to protect the rights, property, or safety of Prompt Pay Capital and its users.</p>

                    <h2>Data Security</h2>

                    <p>We take appropriate technical and organizational measures to protect your personal information against loss, misuse, unauthorized access, alteration, and disclosure. While we strive to safeguard your data, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

                    <h2>Data Retention</h2>

                    <p>We only keep your personal information for as long as necessary to fulfil the purposes outlined in this policy or as required by law.</p>

                    <h2>Cookies and Tracking</h2>

                    <p>Our website may use cookies and similar technologies to enhance user experience, analyze performance, and provide relevant content. You can manage or disable cookies through your browser settings, though some features of the website may not function properly without them.</p>

                    <h2>Your Rights</h2>

                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>

                    <ul>

                        <li>The right to access and request a copy of your data.</li>
                        <li>The right to correct or update inaccurate information.</li>
                        <li>The right to request the deletion of your data.</li>
                        <li>The right to restrict or object to the processing of your information.</li>
                        <li>The right to withdraw consent at any time (where processing is based on consent).</li>

                    </ul>

                    <p>To exercise any of these rights, please contact us using the details below.</p>

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