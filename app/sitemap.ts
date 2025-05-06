import { getProductsByCategory } from '@/lib/actions';
import categories from '@/lib/categories';
import { ProductType } from '@/lib/utils';
import type { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const _categories: Partial<MetadataRoute.Sitemap> = categories?.map(category => {
        return {
            url: `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent(category.category?.replaceAll(" ", "_"))}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,

        }
    }).filter(Boolean);

    const products = categories?.map(async (c) => {
        const prods = (await getProductsByCategory(c.category))?.Items as ProductType[];
        const prodList = prods?.map(p => (
            {
                url: `${process.env.NEXT_PUBLIC_HOSTNAME}/${encodeURIComponent(c.category?.replaceAll(" ", "_"))}/${encodeURIComponent(p?.title?.replaceAll(" ", "_"))}?product_id=${p?.product_id}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 1,
            }
        ));
        return prodList;
    });

    const pAll = await Promise.all(products);
    const p: MetadataRoute.Sitemap[number][] = pAll.flat().filter((item) =>
        item !== undefined && (item.lastModified instanceof Date) || (item.lastModified instanceof String)
    );


    const maps: MetadataRoute.Sitemap = [{
        url: process.env.NEXT_PUBLIC_HOSTNAME as string,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,

    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/register`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },

    ...(_categories.filter((category): category is MetadataRoute.Sitemap[number] => category !== undefined)),
    ...p

    ];


    return maps;
}