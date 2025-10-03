// Next
import Image from 'next/image';
import Link from 'next/link';

// Components
import Buttons from '@/components/ui/reusables/buttons';
import Heading from '@/components/ui/reusables/heading';

// Styles
import styles from '@/styles/pages/products/product-cards.module.scss';

export async function ProductCards({ category = null }) {
    try {
        const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                                    featuredImage {
                                        node {
                                            mediaItemUrl
                                            altText
                                        }
                                    }
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
                                        cardDescription
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
                `
            })
        });

        const result = await response.json();

        if (result.errors) {
            console.error('GraphQL errors:', result.errors);
            return <div>Error loading products</div>;
        }

        // Get products from result
        let products = result.data?.products?.edges || [];

        // Reverse the order of products
        products = products.reverse();

        // Filter by category if specified
        if (category) {
            products = products.filter(({ node: product }) => {
                return product.productCategories?.edges?.some(
                    ({ node: cat }) => cat.slug === category || cat.name === category
                );
            });
        }

        if (products.length === 0) {
            return <div className={styles.noProducts}>No products found</div>;
        }

        return (

            <section className="row">

                <div className="container centered noPaddingTop noPaddingBottom" style={{ marginBottom: '1rem' }}>

                    <Heading className={"hasFullStop "} eyebrow={"All Products"} title={"Explore our range of products"} text={"Discover our diverse selection of products designed to meet your needs. From innovative solutions to everyday essentials, we have something for everyone."} />

                </div>

                <div className="container centered noPaddingTop noPaddingBottom">

                    <div className={styles.productCards}>

                        {products.map(({ node: product }) => (

                            <article key={product.id} className={styles.productCard}>

                                <Link className={styles.productCardLink} href={`/products/${product.slug}`}></Link>

                                {product.featuredImage?.node?.mediaItemUrl && (

                                    <div className={`${styles.cardImage}`}>

                                        <Image
                                            src={product.featuredImage?.node?.mediaItemUrl}
                                            alt={product.featuredImage?.node?.altText || product.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className={styles.productCardImage}
                                        />

                                    </div>

                                )}

                                {product.title && (

                                    <div className={styles.productCardContent}>

                                        <h3 className={styles.productCardTitle}>{product.title}</h3>

                                        {product.productFields?.cardDescription && (

                                            <p className={styles.productCardDescription}>{product.productFields?.cardDescription}</p>

                                        )}

                                        <Buttons btnOneText="Learn More" BtnOneLink={`/products/${product.slug}`} btnOneClass={"primary"} />

                                    </div>

                                )}

                            </article>

                        ))}

                    </div>

                </div>

            </section>
        );

    } catch (error) {
        console.error('Fetch error:', error);
        return <div>Error loading products</div>;
    }
}
