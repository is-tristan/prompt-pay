// Components
import Banner from "@/components/ui/reusables/banner";
import Heading from "@/components/ui/reusables/heading";
import Buttons from "@/components/ui/reusables/buttons";
import ContactForm from "@/components/ui/reusables/contact-form";

// Styles
import styles from "@/styles/pages/careers/career-single.module.scss";

// Icons
import { Location, FinancialAssets, Result } from "@carbon/react/icons";

// Images
const careerSingleCover = "/covers/career-single-cover.webp";

export async function generateStaticParams() {
    try {
        const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
          query GetAllCareerSlugs {
            careers {
              edges {
                node {
                  slug
                }
              }
          }
        `,
            }),
        });

        const result = await response.json();

        if (result.data?.careers?.edges) {
            return result.data.careers.edges.map((edge) => ({
                slug: edge.node.slug,
            }));
        }
    } catch (error) {
        console.error("Error generating static params:", error);
    }

    return [];
}

export default async function CareerGrid({ params }) {
    const { slug } = params ? await params : {};

    if (!slug) {
        return (

            <div className={styles.careersPage}>

                <section className={`row ${styles.careerNotFoundSection}`} style={{ minHeight: '50vh' }}>

                    <div className={`container centered ${styles.careerNotFoundContainer}`}>

                        <Heading level="h2" className="hasFullStop" title="Careers Not Found" text="Sorry, there are currently no career opportunities available." />

                    </div>

                </section>

            </div>

        );

    }

    let careersData = null;
    try {
        const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `query careers {
            careers {
                edges {
                    node {
                        careerFields {
                        location
                        roleType
                        salary
                    }
                        slug
                        title
                        excerpt
                        content
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
        } else if (result.data && result.data.careers) {
            const foundCareer = result.data.careers.edges.find(
                (edge) => edge.node.slug === slug,
            );
            careersData = foundCareer ? foundCareer.node : null;
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    if (!careersData) {

        return (

            <>

                <div className={styles.careersPage}>

                    <section className={`row ${styles.careerNotFoundSection}`}>

                        <div className={`container centered ${styles.careerNotFoundContainer}`}>

                            <Heading level="h2" className="hasFullStop" title="Careers Not Found" text="Sorry, there are currently no career opportunities available." />

                        </div>

                    </section>

                </div>

            </>

        );

    }

    return (

        <div className={styles.careersPage}>

            <Banner
                backgroundImage={careerSingleCover}
                eyebrow="Join Prompt Pay Capital"
                heading={careersData.title}
                buttonTextOne="Learn More"
                buttonTextLinkOne="#career-details"

            />

            <section id="career-details" className={`row ${styles.careerSingleSection}`}>

                <div className={`container noPaddingBottom ${styles.careerContentHeader}`}>

                    <div className={styles.careerGridItemMeta}>

                        <div className={styles.careerMetaItem}>

                            <Location size={16} />

                            <span>{careersData.careerFields.location}</span>

                        </div>


                        <div className={styles.careerMetaItem}>

                            <FinancialAssets size={16} />

                            <span>{careersData.careerFields.salary}</span>

                        </div>

                        <div className={styles.careerMetaItem}>

                            <Result size={16} />

                            <span>{careersData.careerFields.roleType}</span>

                        </div>

                    </div>


                </div>

                <div className={`container ${styles.careerContentContainer}`}>

                    <Heading hasAnimation={false} level="h2" className="hasFullStop" title="About the role" />

                    <div className={styles.careerContent} dangerouslySetInnerHTML={{ __html: careersData.content }}></div>

                </div>

            </section>

            <section className={`row ${styles.careerContactSection}`}>

                <div className={`container centered ${styles.careerContactContainer}`}>

                    <Heading level="h2" title="Interested in this role?" text="If you are interested in applying for this position, please get in touch with us using the form below." />

                    <ContactForm data={careersData.title} hasEnquiryType={false} hasCompanyName={false} hasUrlField={true} />

                </div>

            </section>

        </div>

    );

}