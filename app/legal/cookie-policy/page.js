import Banner from "@/components/ui/reusables/banner";

// Images
const legalCover = "/covers/legal-pages-cover.webp";

export default function PrivacyPolicyPage() {

    return (
        <>
            <Banner
                backgroundImage={legalCover}
                eyebrow="Cookie Policy"
                heading="Our use of cookies"
                buttonTextOne="Contact us"
                buttonTextLinkOne="/contact"
                buttonClassOne="primary"
            />

            <section className="row">

                <div className="container" style={{ gap: "1rem", maxWidth: "60rem" }}>

                    <p>This Cookie Policy explains how Prompt Pay Capital uses cookies and similar technologies on our website. By using our website, you agree to the use of cookies in accordance with this policy.</p>

                    <h2>What Are Cookies?</h2>

                    <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently, enhance user experience, and provide website owners with useful information.</p>

                    <h2>Types of Cookies We Use</h2>

                    <ul>

                        <li><strong>Essential Cookies:</strong> These cookies are necessary for the basic functionality of our website, such as enabling secure login and remembering your preferences.</li>
                        <li><strong>Performance Cookies:</strong> These cookies allow us to track website usage, monitor performance, and improve the way our website works.</li>
                        <li><strong>Functionality Cookies:</strong> These help us remember your preferences and personalize your experience.</li>
                        <li><strong>Targeting/Advertising Cookies:</strong> These may be used to deliver more relevant advertising to you, track campaign effectiveness, and limit the number of times you see a particular ad.</li>

                    </ul>

                    <h2>Third-Party Cookies</h2>

                    <p>In some cases, third-party service providers may place cookies on your device when you use our website. These cookies may collect information about your browsing activities across different websites and online services.</p>

                    <h2>How We Use Cookies</h2>

                    <p>We use cookies to:</p>

                    <ul>

                        <li>Ensure that our website functions properly.</li>
                        <li>Analyze how visitors interact with our website.</li>
                        <li>Improve the performance, content, and user experience of our website.</li>
                        <li>Personalize services and communications.</li>

                    </ul>

                    <h2>Managing Cookies</h2>

                    <p>You have the right to accept or reject cookies. Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. Please note that disabling cookies may affect the functionality and features of our website.</p>

                    <h2>Changes to This Policy</h2>

                    <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any updates will be posted on this page with a revised effective date.</p>

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