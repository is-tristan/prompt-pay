// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/pages/products/product-nav.module.scss";

export async function ProductNav({ currentUrl = "", categoryFilter = null }) {
    let productData;

    try {
        const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query Products {
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
                                        menuImage {
                                            node {
                                                mediaItemUrl
                                                altText
                                            }
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
            console.error("GraphQL errors in ProductNav:", result.errors);
            return <div>Error loading products</div>;
        }

        productData = result.data;
    } catch (error) {
        console.error("Fetch error in ProductNav:", error);
        return <div>Error loading products</div>;
    }

    // Filter products by category if categoryFilter is provided
    let filteredProducts = productData.products.edges.reverse();

    if (categoryFilter) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.node.productCategories.edges.some(
                (category) => category.node.slug === categoryFilter,
            );
        });
    }

    return (

        <section className={`row ${styles.productNav}`}>

            <div className={`${styles.productNavContainer} noPaddingBottom`}>

                {filteredProducts.map((product) => (

                    <div key={product.node.id} className={styles.productNavItem}>

                        <Link
                            href={`/products/${product.node.slug}`}
                            className={`${styles.productNavLink}${currentUrl === `/products/${product.node.slug}` ? ` ${styles.active}` : ""}`}
                        >

                            {product.node.productFields.menuImage && (

                                <div className={styles.productNavImage}>

                                    {product.node.productFields.menuImage.node.mediaItemUrl ?

                                        <Image
                                            src={product.node.productFields.menuImage.node.mediaItemUrl ? product.node.productFields.menuImage.node.mediaItemUrl : null}
                                            width={48 || 96} height={48 || 96}
                                            sizes={"(max-width: 1200px) 48px, 96px"}
                                            alt={product.node.productFields.menuImage.node.altText ? product.node.productFields.menuImage.node.altText : product.node.title}
                                            loading="lazy"
                                        /> : product.node.title
                                    }

                                </div>
                            )}

                            <span className={styles.productNavTitle}>

                                {product.node.title}

                            </span>

                        </Link>

                    </div>

                ))}

            </div>

        </section>

    );

}
