import { CategoryType } from "./categories"
import { toTitleCase } from "./functions"
import { ProductType } from "./utils"


export const getCategoryJSONLD = async (category: CategoryType, products: ProductType[]) => {

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": toTitleCase(category.category),
        "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${category.category?.replaceAll(" ", "_")}`,
        "description": [category.description],
        "image": "/logo.webp",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": products?.map(product => {
                return {
                    "@type": "Product",
                    "name": (product?.title as string),
                    "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category?.replaceAll(" ", "_") as string))}/${encodeURIComponent((product?.title?.replaceAll(" ", "_") as string))}?product_id=${product?.product_id}`,
                    "image": product?.img_url as string,
                    "description": (product?.description as string),
                    "brand": {
                        "@type": "Brand",
                        "name": "Kedi Heathcare"
                    },
                    "imageObject": {
                        "@type": "ImageObject",
                        "contentUrl": product?.img_url as string,
                        "height": 800,
                        "width": 800,
                        "datePublished": new Date().toISOString(),
                        "description": product?.description,
                        "name": product?.title
                    },
                    "review": Array.from({ length: 5 })?.map(review => ({
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Anonymous"
                        },
                        "datePublished": new Date(),
                        "reviewBody": "Great product",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": product?.rating,
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    })),
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": product?.rating,
                        "reviewCount": [2, 4, 5, 7, 3, 6, 1][Math.floor(Math.random() * 7)]
                    },
                    "offers": {
                        "@type": "Offer",
                        "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "_"))}/${encodeURIComponent((product?.title?.replaceAll(" ", "_") as string))}?product_id=${product?.product_id}`,
                        "priceCurrency": "NGN",
                        "price": product?.price as string,
                        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
                        "itemCondition": "https://schema.org/NewCondition",
                        "availability": "https://schema.org/InStock",
                        "seller": {
                            "@type": "Organization",
                            "name": process.env.NEXT_PUBLIC_SITE_NAME
                        }
                    }
                }
            })
        }
    }
}


export const getProductJSONLD = async (product: ProductType) => {

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": (product?.title as string),
        "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "_"))}/${encodeURIComponent((product?.title?.replaceAll(" ", "_") as string))}?product_id=${product?.product_id}`,
        "image": product?.img_url,
        "description": (product?.description as string),
        "brand": {
            "@type": "Brand",
            "name": process.env.NEXT_PUBLIC_SITE_NAME
        },
        "imageObject": {
            "@type": "ImageObject",
            "contentUrl": product?.img_url as string,
            "height": 800,
            "width": 800,
            "datePublished": new Date().toISOString(),
            "description": product?.description,
            "name": product?.title
        },
        "review": Array.from({ length: 5 })?.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Anonymous"
            },
            "datePublished": new Date(),
            "reviewBody": "Great product",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": product?.rating,
                "bestRating": "5",
                "worstRating": "1"
            }
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product?.rating,
            "reviewCount": [2, 4, 5, 7, 3, 6, 1][Math.floor(Math.random() * 7)]
        },
        "offers": {
            "@type": "Offer",
            "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "_"))}/${encodeURIComponent((product?.title?.replaceAll(" ", "_") as string))}?product_id=${product?.product_id}`,
            "priceCurrency": "NGN",
            "price": product?.price as string,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": process.env.NEXT_PUBLIC_SITE_NAME
            }
        }
    }

}

