// Components
import Heading from "@/components/ui/reusables/heading";
import Buttons from "@/components/ui/reusables/buttons";

// Styles
import styles from "@/styles/pages/careers/career-grid.module.scss";

// Icons
import { Location, FinancialAssets, Result } from "@carbon/react/icons";

export default async function CareerGrid() {
    let careersData = [];
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
        } else if (result.data?.careers?.edges) {
            careersData = result.data.careers.edges.map(edge => edge.node);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    if (careersData.length === 0) {

        return (

            <section id="openPositions" className={`row ${styles.careerNotFoundSection}`}>

                <div className={`container centered ${styles.careerNotFoundContainer}`}>

                    <Heading level="h2" className="hasFullStop" title="No Careers Available" text="Sorry, there are currently no career opportunities available." />

                </div>

            </section>

        );
    }

    return (

        <section id="openPositions" className={`row`}>

            <div className={"container centered noPaddingBottom"}>

                <Heading level="h2" className="hasFullStop" eyebrow="Current Roles" title="Our careers" />

            </div>

            <div className={"container noPaddingTop"}>

                <div className={styles.careerGrid}>

                    {careersData.map((career) => (

                        <article key={career.slug} className={styles.careerGridItem}>

                            <div className={styles.careerGridItemHeading}>

                                <h3>{career.title}</h3>

                                <div dangerouslySetInnerHTML={{ __html: career.excerpt }} />

                            </div>

                            {career.careerFields.location || career.careerFields.salary || career.careerFields.roleType ? (

                                <div className={styles.careerGridItemMeta}>

                                    {career.careerFields.location && (

                                        <div className={styles.careerMetaItem}>

                                            <Location size={16} />

                                            <span>{career.careerFields.location}</span>

                                        </div>

                                    )}

                                    {career.careerFields.salary && (

                                        <div className={styles.careerMetaItem}>

                                            <FinancialAssets size={16} />

                                            <span>£{career.careerFields.salary}</span>

                                        </div>

                                    )}

                                    {career.careerFields.roleType && (

                                        <div className={styles.careerMetaItem}>

                                            <Result size={16} />

                                            <span>{career.careerFields.roleType}</span>

                                        </div>

                                    )}

                                </div>

                            ) : null}

                            <Buttons btnOneText="Apply now" btnOneClass="primary" btnOneLink={`/careers/${career.slug}`} />

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}