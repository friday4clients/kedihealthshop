import { CategoryType } from "./categories"
import { toTitleCase } from "./functions"
import { ProductType } from "./utils"


export const getCategoryJSONLD = async (category: CategoryType, products: ProductType[]) => {

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": toTitleCase(category.category),
        "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${category.category.toLowerCase()?.replaceAll(" ", "_")}`,
        "description": [category.description.toLowerCase()],
        "image": "/logo.webp",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": products?.map(product => {
                return {
                    "@type": "Product",
                    "name": (product?.title as string),
                    "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "_"))}/${encodeURIComponent((product?.title as string)?.replaceAll(" ", "_"))}?product_id=${encodeURIComponent(product?.product_id as string)}`,
                    "image": product?.img_url as string,
                    "description": (product?.description as string),
                    "brand": {
                        "@type": "Brand",
                        "name": "Kedi Heathcare"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "NGN",
                        "price": product?.price as string,
                        "availability": "https://schema.org/InStock"
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
        "url": `${process.env.APP_URL}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "-"))}/${encodeURIComponent((product?.title as string)?.replaceAll(" ", "-"))}?productId=${encodeURIComponent(product?.product_id as string)}`,
        "image": product?.img_url,
        "description": (product?.description as string),
        "brand": {
            "@type": "Brand",
            "name": "Forever Living Products"
        },
        "offers": {
            "@type": "Offer",
            "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent((product?.category as string)?.replaceAll(" ", "_"))}/${encodeURIComponent((product?.title as string)?.replaceAll(" ", "_"))}?product_id=${encodeURIComponent(product?.product_id as string)}`,
            "priceCurrency": "NGN",
            "price": product?.price as string,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": process.env.NEXT_PUBLIC_HOSTNAME
            }
        }
    }

}

