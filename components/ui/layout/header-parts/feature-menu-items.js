"use client";

// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Loader from "@/components/misc/loader";

// Styles
import styles from "@/styles/ui/layout/mega-menu.module.scss";

export default function featureMenuItems({ currentUrl = "", categoryFilter = null }) {

    const [featureData, setfeatureData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFeatures() {
            try {
                const response = await fetch('/api/features', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.error) {
                    console.error('API error in featureMenuItems:', result.error);
                    setError('Error loading features');
                } else if (result.data && result.data.features) {
                    setfeatureData(result.data);
                } else {
                    setError('No features data found');
                }
            } catch (error) {
                console.error('Fetch error in featureMenuItems:', error);
                setError('Error loading features');
            } finally {
                setLoading(false);
            }
        }

        fetchFeatures();
    }, []);

    if (loading) {
        return <Loader className={styles.featureMenuLoading} loadingText="Loading features..." />;
    }

    if (error) {
        return <div className={styles.featureMenuError}>{error}</div>;
    }

    if (!featureData || !featureData.features) {
        return <div className={styles.featureMenuError}>No features found</div>;
    }

    let filteredfeatures = featureData.features.edges;

    if (categoryFilter) {
        filteredfeatures = featureData.features.edges.filter((feature) => {
            return feature.node.featureCategories.edges.some((category) =>
                category.node.slug === categoryFilter
            );
        });
    }

    return (

        <div className={`${styles.productMenuItems} ${styles.featureMenuItems}`}>

            {filteredfeatures.map((feature) => (

                <div key={feature.node.id} className={`${styles.productMenuItem} ${styles.featureMenuItem}`}>

                    <Link
                        href={`/features/${feature.node.slug}`}
                        className={`${styles.productMenuLink} ${styles.featureMenuLink} ${currentUrl === `/features/${feature.node.slug}` ? ` ${styles.active}` : ""}`}
                    >

                        {feature.node.featureFields.menuImage &&

                            <div className={`${styles.productMenuImage} ${styles.featureMenuImage}`}>

                                {feature.node.featureFields.menuImage.node.mediaItemUrl ? (

                                    <Image
                                        src={feature.node.featureFields.menuImage.node.mediaItemUrl ? feature.node.featureFields.menuImage.node.mediaItemUrl : null}
                                        width={48}
                                        height={48}
                                        sizes="48px"
                                        alt={feature.node.featureFields.menuImage.node.altText ? feature.node.featureFields.menuImage.node.altText : feature.node.title}
                                        loading="lazy"
                                    />

                                ) : feature.node.title}

                            </div>

                        }

                        <span className={styles.featureMenuTitle}>
                            {feature.node.title.replace(/^(Clover|Worldpay)\s*/i, '')}
                        </span>

                    </Link>

                </div>

            ))}

        </div>

    );
}