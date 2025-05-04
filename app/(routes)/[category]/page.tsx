import { getProductsByCategory } from "@/lib/actions";
import categories, { CategoryType } from "@/lib/categories";
import { getCategoryJSONLD } from "@/lib/jsonld";
import { ProductType } from "@/lib/utils";
import { Container, Breadcrumb, Stack, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Script from "next/script";
import { Fade } from "react-awesome-reveal";

const Product = dynamic(() => import("@/components/product"));

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>
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
        title: `${decodeURIComponent(category.replaceAll("_"," "))} Products`,
        description: desc,
        keywords: [decodeURIComponent(category.replaceAll("_", " ")), "Kedi Healthcare", "Kedi", "Healthcare", "Healthcare product"],
        twitter: {
            card: "summary",
            title: ` ${decodeURIComponent(category.replaceAll("_", " ")) } Products | ${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare`,
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



const CategoryPage = async ({ params }: CategoryPageProps) => {
    const _category = decodeURIComponent((await params)?.category)?.replaceAll("_", " ");
    const category = categories.find(c => c.category === _category) as CategoryType;
    const products = (await getProductsByCategory(category?.category))?.Items as ProductType[];

    const jsonLd = await getCategoryJSONLD(category, products);

    return (
        <>
            <Container maxW="6xl" py="12" pt={{ base: "6" }}>
                <Breadcrumb.Root>
                    <Breadcrumb.List flexWrap={"wrap"}>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link _active={{ ring: "none" }} color="gray.500" _hover={{ color: "accent" }} as={Link} href="/">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.CurrentLink color="accent">{category?.category}</Breadcrumb.CurrentLink>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Stack gap="4" mt="12">
                    <Heading fontWeight="bold" size="4xl" fontFamily={"merriweather"}>{category?.category}</Heading>
                    <Text>
                        {category?.description}
                    </Text>
                </Stack>

                <Heading my="8" size="xl">All products</Heading>

                <Grid
                    templateColumns={{ md: "1fr 1fr 1fr" }}
                    gap="4"
                >
                    <Fade triggerOnce cascade>
                        {products?.map((product, index) => {
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