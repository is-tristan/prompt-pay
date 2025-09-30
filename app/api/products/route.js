export async function GET() {
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
                `
            })
        });

        const result = await response.json();

        if (result.errors) {
            console.error('GraphQL errors in API route:', result.errors);
            return Response.json({ error: 'GraphQL errors occurred' }, { status: 500 });
        }

        // Reverse the order of products
        if (result.data && result.data.products && result.data.products.edges) {
            result.data.products.edges = result.data.products.edges.reverse();
        }

        // Set cache headers
        const response_headers = new Headers();
        response_headers.set('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

        return Response.json(result, { headers: response_headers });
    } catch (error) {
        console.error('Fetch error in API route:', error);
        return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

// Also support POST for backward compatibility
export async function POST() {
    return GET();
}

// Opt out of static generation for this route
export const dynamic = 'force-dynamic';