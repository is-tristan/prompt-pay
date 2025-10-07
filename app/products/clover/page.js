// Components
import ProductHeader from "@/components/pages/products/product-header";
import { ProductCards } from "@/components/pages/products/product-cards";
import ContactSection from "@/components/ui/sections/contact-section";

export default function CloverProductsPage() {

    return (

        <>

            <ProductHeader
                eyebrow="Explore Clover Products"
                title="Flexible POS systems tailored to your business"
                text="Find a Clover device that's right for your needs, and customize it for your business. Our cloud-based system means everything you need is at your fingertips."
            />

            <ProductCards category="clover" />

            <ContactSection />

        </>

    )


}