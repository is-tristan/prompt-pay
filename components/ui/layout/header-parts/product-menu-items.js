"use client";

// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Loader from "@/components/misc/loader";

// Styles
import styles from "@/styles/ui/layout/product-menu.module.scss";

export default function ProductMenuItems({ currentUrl = "", categoryFilter = null }) {

    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products', {
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
                    console.error('API error in ProductMenuItems:', result.error);
                    setError('Error loading products');
                } else if (result.data && result.data.products) {
                    setProductData(result.data);
                } else {
                    setError('No products data found');
                }
            } catch (error) {
                console.error('Fetch error in ProductMenuItems:', error);
                setError('Error loading products');
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <Loader className={styles.productMenuLoading} loadingText="Loading products..." />;
    }

    if (error) {
        return <div className={styles.productMenuError}>{error}</div>;
    }

    if (!productData || !productData.products) {
        return <div className={styles.productMenuError}>No products found</div>;
    }

    let filteredProducts = productData.products.edges;

    if (categoryFilter) {
        filteredProducts = productData.products.edges.filter((product) => {
            return product.node.productCategories.edges.some((category) =>
                category.node.slug === categoryFilter
            );
        });
    }

    return (

        <div className={styles.productMenuItems}>

            {filteredProducts.map((product) => (

                <div key={product.node.id} className={styles.productMenuItem}>

                    <Link
                        href={`/products/${product.node.slug}`}
                        className={`${styles.productMenuLink}${currentUrl === `/products/${product.node.slug}` ? ` ${styles.active}` : ""}`}
                    >

                        {product.node.productFields.menuImage &&

                            <div className={styles.productMenuImage}>

                                {product.node.productFields.menuImage.node.mediaItemUrl ? (

                                    <Image
                                        src={product.node.productFields.menuImage.node.mediaItemUrl ? product.node.productFields.menuImage.node.mediaItemUrl : null}
                                        width={80}
                                        height={80}
                                        sizes="80px"
                                        alt={product.node.productFields.menuImage.node.altText ? product.node.productFields.menuImage.node.altText : product.node.title}
                                        loading="lazy"
                                    />

                                ) : product.node.title}

                            </div>

                        }

                        <span className={styles.productMenuTitle}>
                            {product.node.title.replace(/^(Clover|Worldpay)\s*/i, '')}
                        </span>

                    </Link>

                </div>

            ))}

        </div>

    );
}