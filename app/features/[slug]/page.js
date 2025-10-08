// Components
import ProductSection from "@/components/pages/products/product-section";
import TextSlider from "@/components/sliders/logo-slider";
import Buttons from "@/components/ui/reusables/buttons";
import Heading from "@/components/ui/reusables/heading";
import ContactSection from "@/components/ui/sections/contact-section";
import TestimonialsSection from "@/components/ui/sections/testimonials-section";

// Styles
import styles from "@/styles/pages/features/feature.module.scss";

// Generate static params for all features
export async function generateStaticParams() {
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetAllFeatureSlugs {
            features {
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

    if (result.data?.features?.edges) {
      return result.data.features.edges.map((edge) => ({
        slug: edge.node.slug,
      }));
    }
  } catch (error) {
    console.error("Error generating static params:", error);
  }

  return [];
}

export default async function FeaturePage({ params }) {
  const { slug } = await params;
  let featureData = null;
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                    query GetAllFeatures {
                        features {
                            edges {
                                node {
                                    id
                                    slug
                                    title
                                    featureCategories {
                                        edges {
                                            node {
                                                slug
                                                taxonomyName
                                                name
                                            }
                                        }
                                    }
                                    featureFields {
                                        firstRow {
                                            featureHeading
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
    } else if (result.data && result.data.features) {
      const foundfeature = result.data.features.edges.find(
        (edge) => edge.node.slug === slug,
      );
      featureData = foundfeature ? foundfeature.node : null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const featureCategory = featureData?.featureCategories?.edges?.[0]?.node?.slug || null;

  if (!featureData) {

    return (

      <>

        <div className={styles.productPage}>

          <section className={`row ${styles.featureNotFoundSection}`}>

            <div className={`container centered ${styles.featureNotFoundContainer}`} style={{ minHeight: "100vh" }}>

              <Heading hasAnimation={false} level="h2" className="hasFullStop" eyebrow="Error 404" title="Feature Not Found" text="Sorry, the feature you are looking for does not exist." />

              <Buttons btnOneText="Back to features" btnOneLink="/features" btnOneClass="primary hasAnimation" />

            </div>

          </section>

        </div>

      </>

    );

  }

  return (

    <>

      <ProductSection
        hasAnimation={false}
        rowClassName={"productHeader"}
        containerClassName={`${styles.featureHeader}`}
        image={featureData.featuredImage?.node?.mediaItemUrl || ""}
        imageAlt={featureData.featuredImage?.node?.altText || featureData.title || ""}
        eyebrow={`Discover ${featureData.title}`}
        headingLevel="h2"
        heading={featureData.featureFields?.firstRow?.featureHeading || ""}
        listItems={[featureData.featureFields?.firstRow?.itemTitle1 ? { label: featureData.featureFields.firstRow.itemTitle1, description: featureData.featureFields.firstRow.itemDescription1, } : null, featureData.featureFields?.firstRow?.itemTitle2 ? { label: featureData.featureFields.firstRow.itemTitle2, description: featureData.featureFields.firstRow.itemDescription2, } : null, featureData.featureFields?.firstRow?.itemTitle3 ? { label: featureData.featureFields.firstRow.itemTitle3, description: featureData.featureFields.firstRow.itemDescription3, } : null,]}
        featureCategory={featureCategory}
      />

      <ProductSection
        rowClassName={"hasImage"}
        containerClassName={"rowReverse noPaddingTop"}
        image={featureData.featureFields?.secondRow?.image?.node?.mediaItemUrl || ""}
        imageAlt={featureData.featureFields?.secondRow?.image?.node?.altText || featureData.title || ""}
        eyebrow={`Discover ${featureData.title}`} headingLevel="h2" heading={featureData.featureFields?.secondRow?.secondHeading || ""} listItems={[featureData.featureFields?.secondRow?.itemTitle1 ? { label: featureData.featureFields.secondRow.itemTitle1, description: featureData.featureFields.secondRow.itemDescription1, } : null, featureData.featureFields?.secondRow?.itemTitle2 ? { label: featureData.featureFields.secondRow.itemTitle2, description: featureData.featureFields.secondRow.itemDescription2, } : null, featureData.featureFields?.secondRow?.itemTitle3 ? { label: featureData.featureFields.secondRow.itemTitle3, description: featureData.featureFields.secondRow.itemDescription3, } : null,]} />

      <TextSlider />

      <TestimonialsSection />

      <ContactSection />

    </>

  );

}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 300; // Revalidate every 5 minutes
