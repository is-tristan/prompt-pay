// Components
import ProductDashboard from "@/components/pages/products/product-dashboard";
import { ProductNav } from "@/components/pages/products/product-nav";
import ProductSection from "@/components/pages/products/product-section";
import TextSlider from "@/components/sliders/logo-slider";
import Buttons from "@/components/ui/reusables/buttons";
import Heading from "@/components/ui/reusables/heading";
import ComparePaymentProviders from "@/components/ui/sections/compare-payment-providers-section";
import ContactSection from "@/components/ui/sections/contact-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";

// Styles
import styles from "@/styles/pages/products/product.module.scss";

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetAllProductSlugs {
            products {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `,
      }),
    });

    const result = await response.json();

    if (result.data?.products?.edges) {
      return result.data.products.edges.map((edge) => ({
        slug: edge.node.slug,
      }));
    }
  } catch (error) {
    console.error("Error generating static params:", error);
  }

  return [];
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  let productData = null;
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                    query GetAllProducts {
                        products {
                            edges {
                                node {
                                    id
                                    slug
                                    title
                                    productCategories {
                                        edges {
                                            node {
                                                slug
                                                taxonomyName
                                                name
                                            }
                                        }
                                    }
                                    productFields {
                                        basicProductInformation {
                                            productHeading
                                            itemDescription1
                                            itemDescription2
                                            itemDescription3
                                            itemTitle1
                                            itemTitle2
                                            itemTitle3
                                        }
                                        secondRow {
                                            image {
                                                node {
                                                    mediaItemUrl
                                                }
                                            }
                                            secondHeading
                                            itemTitle1
                                            itemTitle2
                                            itemTitle3
                                            itemDescription1
                                            itemDescription2
                                            itemDescription3
                                        }
                                    }
                                    featuredImage {
                                        node {
                                            mediaItemUrl
                                            altText
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
      }),
    }, {
      // Add caching
      next: {
        revalidate: 300 // Cache for 5 minutes
      }
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
    } else if (result.data && result.data.products) {
      const foundProduct = result.data.products.edges.find(
        (edge) => edge.node.slug === slug,
      );
      productData = foundProduct ? foundProduct.node : null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const productCategory = productData?.productCategories?.edges?.[0]?.node?.slug || null;

  const currentUrl = `/products/${slug}`;

  if (!productData) {

    return (

      <>

        <div className={styles.productPage}>

          <section className={`row ${styles.productNavSection}`}>

            <ProductNav categoryFilter={productCategory} />

          </section>

          <section className={`row ${styles.productNotFoundSection}`}>

            <div className={`container centered ${styles.productNotFoundContainer}`}>

              <Heading level="h2" className="hasFullStop" title="Product Not Found" text="Sorry, the product you are looking for does not exist." />

              <Buttons btnOneText="Back to Products" btnOneLink="/products" btnOneClass="primary hasAnimation" />

            </div>

          </section>

        </div>

      </>

    );

  }

  return (

    <>

      <ProductNav currentUrl={currentUrl} categoryFilter={productCategory} />

      <ProductSection
        hasAnimation={false}
        rowClassName={"productHeader"}
        image={productData.featuredImage?.node?.mediaItemUrl || ""}
        imageAlt={productData.featuredImage?.node?.altText || productData.title || ""}
        eyebrow={`Discover ${productData.title}`}
        headingLevel="h2"
        heading={productData.productFields?.basicProductInformation?.productHeading || ""}
        listItems={[productData.productFields?.basicProductInformation?.itemTitle1 ? { label: productData.productFields.basicProductInformation.itemTitle1, description: productData.productFields.basicProductInformation.itemDescription1, } : null, productData.productFields?.basicProductInformation?.itemTitle2 ? { label: productData.productFields.basicProductInformation.itemTitle2, description: productData.productFields.basicProductInformation.itemDescription2, } : null, productData.productFields?.basicProductInformation?.itemTitle3 ? { label: productData.productFields.basicProductInformation.itemTitle3, description: productData.productFields.basicProductInformation.itemDescription3, } : null,]}
        productCategory={productCategory}
      />

      <ProductSection
        rowClassName={"hasImage"}
        containerClassName={"rowReverse noPaddingTop"}
        image={productData.productFields?.secondRow?.image?.node?.mediaItemUrl || ""}
        imageAlt={productData.productFields?.secondRow?.image?.node?.altText || productData.title || ""}
        eyebrow={`Discover ${productData.title}`} headingLevel="h2" heading={productData.productFields?.secondRow?.secondHeading || ""} listItems={[productData.productFields?.secondRow?.itemTitle1 ? { label: productData.productFields.secondRow.itemTitle1, description: productData.productFields.secondRow.itemDescription1, } : null, productData.productFields?.secondRow?.itemTitle2 ? { label: productData.productFields.secondRow.itemTitle2, description: productData.productFields.secondRow.itemDescription2, } : null, productData.productFields?.secondRow?.itemTitle3 ? { label: productData.productFields.secondRow.itemTitle3, description: productData.productFields.secondRow.itemDescription3, } : null,]} />

      <TextSlider />

      <ProductDashboard />

      <ComparePaymentProviders containerClassName="noPaddingBottom" />

      <TestimonialsSection />

      <ContactSection />

    </>

  );

}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 300; // Revalidate every 5 minutes
