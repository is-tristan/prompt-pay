// Components
import ProductHeader from "@/components/pages/products/product-header";
import { ProductCards } from "@/components/pages/products/product-cards";
import ProductSection from "@/components/pages/products/product-section";
import ContactSection from "@/components/ui/sections/contact-section";

// Images
const dashboardImage = "/images/products/misc/dashboard-alt-image.webp";
const paymentGatewayImage = "/images/products/misc/payment-gateway-image.webp";
const onlinePaymentsImage = "/images/products/misc/online-payments-image.webp";
const tapToPay = "/images/products/misc/tap-to-pay-image.webp";

export default function CloverProductsPage() {

    return (

        <>

            <ProductHeader
                eyebrow="Explore Clover Products"
                title="Flexible POS systems tailored to your business"
                text="Find a Clover device that's right for your needs, and customize it for your business. Our cloud-based system means everything you need is at your fingertips."
            />

            <ProductSection
                rowClassName="hasImage"
                containerClassName="rowReverse noPaddingTop"
                eyebrow="Dashboard"
                heading="Manage your payments, team, and more"
                text="Suspendisse eu pretium dui, vitae pharetra sem. Nunc a ex arcu. Fusce ut tincidunt nunc. Quisque tristique sit amet eros at aliquam. Nullam accumsan nulla tortor, nec tristique felis fermentum non. Proin feugiat risus ligula, vitae suscipit risus cursus a. Aliquam sit amet ultrices sem, ut suscipit augue."
                image={dashboardImage}
                hasBtns={false}
            />

            <ProductSection
                rowClassName="hasImage"
                containerClassName="noPaddingTop"
                eyebrow="Gateway"
                heading="Secure payment processing"
                text="Suspendisse eu pretium dui, vitae pharetra sem. Nunc a ex arcu. Fusce ut tincidunt nunc. Quisque tristique sit amet eros at aliquam. Nullam accumsan nulla tortor, nec tristique felis fermentum non. Proin feugiat risus ligula, vitae suscipit risus cursus a. Aliquam sit amet ultrices sem, ut suscipit augue."
                image={paymentGatewayImage}
                hasBtns={false}
            />

            <ProductSection
                rowClassName="hasImage"
                containerClassName="rowReverse noPaddingTop"
                eyebrow="Ecommerce"
                heading="Accept payments online and in-app"
                text="Suspendisse eu pretium dui, vitae pharetra sem. Nunc a ex arcu. Fusce ut tincidunt nunc. Quisque tristique sit amet eros at aliquam. Nullam accumsan nulla tortor, nec tristique felis fermentum non. Proin feugiat risus ligula, vitae suscipit risus cursus a. Aliquam sit amet ultrices sem, ut suscipit augue."
                image={onlinePaymentsImage}
                hasBtns={false}
            />

            <ProductSection
                rowClassName="hasImage"
                containerClassName="noPaddingTop"
                eyebrow="Tap to Pay"
                heading="Accept contactless payments"
                text="Suspendisse eu pretium dui, vitae pharetra sem. Nunc a ex arcu. Fusce ut tincidunt nunc. Quisque tristique sit amet eros at aliquam. Nullam accumsan nulla tortor, nec tristique felis fermentum non. Proin feugiat risus ligula, vitae suscipit risus cursus a. Aliquam sit amet ultrices sem, ut suscipit augue."
                image={tapToPay}
                hasBtns={false}
            />

            <ProductCards category="clover" />

            <ContactSection />

        </>

    )


}