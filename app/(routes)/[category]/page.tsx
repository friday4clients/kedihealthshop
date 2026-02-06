import SearchBar from "@/components/searchbar";
import { getProductsByCategory } from "@/lib/actions";
import categories, { CategoryType } from "@/lib/categories";
import { getCategoryJSONLD } from "@/lib/jsonld";
import { ProductType } from "@/lib/utils";
import { Container, Breadcrumb, Stack, Heading, Text, Grid, GridItem, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Script from "next/script";
import { Fade } from "react-awesome-reveal";
import SearchNotFound from "./Search404";

const Product = dynamic(() => import("@/components/product"));

interface CategoryPageProps {
    params: Promise<{
        category: string;
        search?: string;
    }>;
    searchParams: Promise<{
        search?: string;
    }>;
}

export async function generateStaticParams() {

    return categories?.map((category: CategoryType) => {
        return {
            category: category.category
        }
    });
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const category = (await params).category;
    const desc = categories.find(c => c.category === category)?.description;

    return {
        authors: [{ name: 'Friday Joshua', url: "https://fj4lio.vercel.app" }],
        creator: 'Friaday Joshua',
        publisher: 'Friday Joshua',
        metadataBase: new URL(process.env.NEXT_PUBLIC_HOSTNAME as string),
        title: `${decodeURIComponent(category.replaceAll("_", " "))} Products`,
        description: desc,
        keywords: [decodeURIComponent(category.replaceAll("_", " ")), "Kedi Healthcare", "Kedi", "Healthcare", "Healthcare product"],
        twitter: {
            card: "summary",
            title: ` ${decodeURIComponent(category.replaceAll("_", " "))} Products | ${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare`,
            description: desc,
            site: `${process.env.NEXT_PUBLIC_HOSTNAME}/${category?.replaceAll(" ", "_")}`,
            images: [""],
        },
        openGraph: {
            title: `${decodeURIComponent(category.replaceAll("_", " "))} Products | ${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare`,
            description: desc,
            url: `${process.env.NEXT_PUBLIC_HOSTNAME}/${category?.replaceAll(" ", "_")}`,
            siteName: process.env.NEXT_PUBLIC_SITE_NAME,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_HOST_NAME}/logo.webp`,
                    width: 800,
                    height: 600,
                },
                {
                    url: `${process.env.NEXT_PUBLIC_HOST_NAME}/logo.webp`,
                    width: 1800,
                    height: 1600,
                    alt: `${category} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        other: {
            title: `${decodeURIComponent(category.replaceAll("_", " "))} Products | ${process.env.NEXT_PUBLIC_SITE_NAME!} | Kedi Healthcare`
        }
    }
}


const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
    const _category = decodeURIComponent((await params)?.category)?.replaceAll("_", " ");
    const category = categories.find(c => c.category === _category) as CategoryType;
    let products = (await getProductsByCategory(category?.category))?.Items as ProductType[];
    products = (products || [])?.sort((a, b) => {
        if (a?.title < b?.title) return -1;
        if (a?.title > b?.title) return 1;
        return 0;
    });

    const jsonLd = await getCategoryJSONLD(category, products);

    // Search bar state and handler
    const searchValue = (await searchParams)?.search?.toLowerCase() || "";
    const filteredProducts = products?.filter(product =>
        product.title.toLowerCase().includes(searchValue) ||
        product?.description?.toLowerCase()?.includes(searchValue) ||
        product?.price?.toString().toLowerCase().startsWith(searchValue)
    );

    return (
        <>
            <Container maxW="6xl" py="12" pos="relative" pt={{ base: "6" }}>
                <HStack justify="space-between">
                    <Breadcrumb.Root>
                        <Breadcrumb.List flexWrap={"wrap"}>
                            <Breadcrumb.Item>
                                <Breadcrumb.Link asChild _active={{ ring: "none" }} color="gray.500" _hover={{ color: "accent" }}>
                                    <Link href="/">Home</Link>
                                </Breadcrumb.Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Separator />
                            <Breadcrumb.Item>
                                <Breadcrumb.CurrentLink color="accent">{category?.category}</Breadcrumb.CurrentLink>
                            </Breadcrumb.Item>
                        </Breadcrumb.List>
                    </Breadcrumb.Root>

                </HStack>

                <Stack gap="4" mt="12">
                    <Heading fontWeight="bold" size="4xl" fontFamily={"merriweather"}>{category?.category}</Heading>
                    <Text>
                        {category?.description}
                    </Text>
                </Stack>

                <HStack pos="sticky" top="14" bg="gray.100" zIndex="docked" justify={"space-between"}>
                    <Heading my="8" size="xl">All products</Heading>

                    {/* search bar here */}
                    <SearchBar />
                </HStack>

                {/* search 404 */}
                {searchValue && !filteredProducts?.length && (
                    <SearchNotFound searchValue={searchValue} />
                )}

                <Grid
                    templateColumns={{ md: "1fr 1fr 1fr" }}
                    gap="4"
                >
                    <Fade triggerOnce cascade>
                        {filteredProducts?.map((product, index) => {
                            return (
                                <GridItem key={index}>
                                    <Product info={product} />
                                </GridItem>
                            )
                        })}
                    </Fade>
                </Grid>
            </Container>

            {/* jsonld */}
            <Script
                id="category-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </>
    );
};



export default CategoryPage;