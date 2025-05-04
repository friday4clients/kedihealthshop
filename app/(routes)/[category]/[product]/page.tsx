import { ProductType } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, Image, Box, Grid, Stack, GridItem, Heading, Text, FormatNumber, List, Separator, Accordion } from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ProductActions from "./product_actions";
import categories, { CategoryType } from "@/lib/categories";
import { getProduct, getProductsByCategory } from "@/lib/actions";
import { Fade } from "react-awesome-reveal";
import Script from "next/script";
import { toTitleCase } from "@/lib/functions";
import { getProductJSONLD } from "@/lib/jsonld";


const Product = dynamic(() => import("@/components/product"));
const Share = dynamic(() => import("@/components/share"));

export async function generateStaticParams() {

    const params = categories.map(async (c: CategoryType) => {
        const params = ((await getProductsByCategory(decodeURIComponent(c.category.replaceAll("_", " "))))?.Items as ProductType[])?.map((product) => {
            return {
                category: product?.category,
                product: product?.title
            }
        });
        return params;
    });

    const _params = await Promise.all(params);
    return _params.flat();
}


interface CategoryPageProps {
    params: Promise<{
        category: string,
        product: string
    }>,
    searchParams: Promise<{
        product_id: string
    }>
}

export async function generateMetadata({ searchParams }: CategoryPageProps) {
    const productId = decodeURIComponent((await searchParams)?.product_id);
    const product = await getProduct(productId) as ProductType;
    const kws = product?.title;
    const category = product?.category;

    return {
        authors: [{ name: 'Friday Joshua', url: "https://fj4lio.vercel.app" }],
        creator: 'Friaday Joshua',
        publisher: 'Friday Joshua',
        metadataBase: new URL(process.env.NEXT_PUBLIC_HOSTNAME as string),
        title: `${product?.title} | ${toTitleCase(category)}`,
        description: product?.description as string,
        keywords: [kws],
        twitter: {
            card: "summary",
            title: ` ${product?.title} | ${toTitleCase(category)} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
            description: product?.description,
            site: `${process.env.NEXT_PUBLIC_HOSTNAME}/${product?.category?.replaceAll(" ", "_")}/${product?.title?.replaceAll(" ", "_")}?product_id=${product?.product_id}`,
            images: [product?.img_url],
        },
        openGraph: {
            title: `${product?.title} | ${toTitleCase(category)} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
            description: product?.description,
            url: `${process.env.NEXT_PUBLIC_HOSTNAME}/${product?.category?.replaceAll(" ", "_")}/${product?.title?.replaceAll(" ", "_")}?product_id=${product?.product_id}`,
            siteName: process.env.NEXT_PUBLIC_SITE_NAME,
            images: [
                {
                    url: product?.img_url,
                    width: 800,
                    height: 600,
                },
                {
                    url: product?.img_url,
                    width: 1800,
                    height: 1600,
                    alt: product?.title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        other: {
            title: `${product?.title} | ${toTitleCase(category)} | ${process.env.NEXT_PUBLIC_SITE_NAME!}`
        }
    }
}


export default async function Page({ params, searchParams }: CategoryPageProps) {
    const category = decodeURIComponent((await params).category)?.replaceAll("_", " ");
    const productTitle = decodeURIComponent((await params).product)?.replaceAll("_", " ");
    const productId = (decodeURIComponent((await searchParams)?.product_id));
    const product = await getProduct(productId) as ProductType;
    const relatedProducts = ((await getProductsByCategory(category))?.Items as ProductType[])?.filter((product) => product?.product_id !== productId);
    const link = `${process.env.NEXT_PUBLIC_HOSTNAME}/${product?.category?.replaceAll(" ", "_")}/${product?.title?.replaceAll(" ", "_")}?product_id=${product?.product_id}`;
    const jsonLd = await getProductJSONLD(product);

    return (
        <>
            <Container maxW="6xl" my="12" mt="8">
                <Breadcrumb.Root>
                    <Breadcrumb.List flexWrap={"wrap"}>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link _active={{ ring: "none" }} color="inherit" _hover={{ color: "accent" }} as={Link} href="/">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link _active={{ ring: "none" }} color="inherit" _hover={{ color: "accent" }} as={Link} href={`/${category.replaceAll(" ", "_")}`}>{category}</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.CurrentLink color="accent">{productTitle}</Breadcrumb.CurrentLink>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Grid
                    mt="8"
                    border="1px solid {colors.gray.200}" rounded="xl"
                    p="6"
                    bg="white"
                    pr="0"
                    gap="6"
                    templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
                >
                    <GridItem bg="gray.100" rounded="xl" p="6">
                        <Stack h="full" w="full" justifyContent="center" alignItems="center" py="6">
                            <Image
                                src={product?.img_url}
                                w="fit"
                                h="full"
                                alt={product?.title} />
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Stack gap="4">
                            <Heading w={"80%"} size={{ base: "3xl", md: "4xl" }}>{product?.title}</Heading>
                            <Heading size="sm">{product?.pack_size}</Heading>
                            <RatingGroup.Root readOnly colorPalette={"yellow"} count={5} defaultValue={parseFloat(product?.rating)} size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>

                            <Heading color="accent" size="lg">
                                {!isNaN(Number(product?.price)) ? <FormatNumber value={Number(product?.price)} currency="NGN" style="currency" /> : product?.price}
                            </Heading>
                            <Stack mt="6">
                                <Heading size="xs">Share to</Heading>
                                <Share
                                    product={product!}
                                    link={link}
                                />
                            </Stack>

                            <Separator borderColor={"gray.100"} />
                            <ProductActions product={product!} />
                        </Stack>
                    </GridItem>
                </Grid>

                <Heading mt="8">Description</Heading>
                <Text mt="4" lineHeight={"1.8"}>{product?.description}</Text>

                <Heading mt="8">Benefits</Heading>
                <List.Root listStylePos={"inside"}>
                    {typeof (product?.benefits) === "string" ? [product?.benefits] : product?.benefits?.map((benefit, index) => {
                        return (
                            <List.Item lineHeight={"1.8"} key={index}>{benefit}</List.Item>
                        )
                    })}
                </List.Root>

                {product?.functions?.length ?
                    <>
                        <Heading mt="8">Functions</Heading>
                        <List.Root listStylePos={"inside"}>
                            {typeof (product?.functions) === "string" ? [product?.functions] : product?.functions?.map((func, index) => {
                                return (
                                    <List.Item lineHeight={"1.8"} key={index}>{func}</List.Item>
                                )
                            })}
                        </List.Root>
                    </> :
                    null
                }

                <Accordion.Root
                    mt="10"
                    variant={"subtle"}
                    size="lg"
                    collapsible
                    defaultValue={[product?.ingredients?.[0] as string]}>
                    <Grid gap={{ base: "4", md: "6" }} templateColumns={{ base: "1fr", md: "1fr 1fr" }}>

                        {product?.ingredients?.length ?
                            <GridItem>
                                <Accordion.Item
                                    bg="white"
                                    _open={{ bg: "white" }}
                                    rounded="xl"
                                    py="2"
                                    key={"ingredients"}
                                    value={product?.ingredients?.[0] as string}>
                                    <Accordion.ItemTrigger
                                        cursor={"pointer"}>
                                        <Heading _hover={{ color: "accent" }} flex="1" as="h3" size="md">
                                            Ingredients
                                        </Heading>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody>
                                            <List.Root listStylePos={"inside"}>
                                                {(product?.ingredients as string[])?.map((i, j) => {
                                                    return (
                                                        <List.Item lineHeight={"1.8"} key={j}>{i}</List.Item>
                                                    )
                                                })}
                                            </List.Root>
                                        </Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </GridItem>
                            : null
                        }

                        {product?.precautions?.length ?
                            <GridItem>
                                <Accordion.Item
                                    bg="white"
                                    _open={{ bg: "white" }}
                                    rounded="xl"
                                    py="2"
                                    key={"precautions"}
                                    value={product?.precautions?.[0] as string}>
                                    <Accordion.ItemTrigger
                                        cursor={"pointer"}>
                                        <Heading _hover={{ color: "accent" }} flex="1" as="h3" size="md">
                                            Precautions
                                        </Heading>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody>
                                            <List.Root listStylePos={"inside"}>
                                                {typeof (product?.precautions === "string") ? [product?.precautions] : (product?.precautions as string[])?.map((i, j) => {
                                                    return (
                                                        <List.Item lineHeight={"1.8"} key={j}>{i}</List.Item>
                                                    )
                                                })}
                                            </List.Root>
                                        </Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </GridItem>
                            : null
                        }

                        {product?.usage?.length ?
                            <GridItem>
                                <Accordion.Item
                                    bg="white"
                                    _open={{ bg: "white" }}
                                    rounded="xl"
                                    py="2"
                                    key={"usage"}
                                    value={product?.usage?.[0] as string}>
                                    <Accordion.ItemTrigger
                                        cursor={"pointer"}>
                                        <Heading _hover={{ color: "accent" }} flex="1" as="h3" size="md">
                                            How To Use {product?.title}
                                        </Heading>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody>
                                            <List.Root listStylePos={"inside"}>
                                                {(typeof (product?.usage) === "string" ? [product?.usage] : product?.usage as string[])?.map((i, j) => {
                                                    return (
                                                        <List.Item lineHeight={"1.8"} key={j}>{i}</List.Item>
                                                    )
                                                })}
                                            </List.Root>
                                        </Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </GridItem>
                            : null
                        }

                        {product?.storage?.length ?
                            <GridItem>
                                <Accordion.Item
                                    bg="white"
                                    _open={{ bg: "white" }}
                                    rounded="xl"
                                    py="2"
                                    key={"storage"}
                                    value={product?.storage as string}>
                                    <Accordion.ItemTrigger
                                        cursor={"pointer"}>
                                        <Heading _hover={{ color: "accent" }} flex="1" as="h3" size="md">
                                            How To Store {product?.title}
                                        </Heading>
                                        <Accordion.ItemIndicator />
                                    </Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Accordion.ItemBody>
                                            {product?.storage}
                                        </Accordion.ItemBody>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </GridItem>
                            : null
                        }

                    </Grid>
                </Accordion.Root>

                <Box mt={12}>
                    <Heading mt="8">Related Products</Heading>
                    <Grid display="grid" templateColumns={{ md: "repeat(3, 1fr)" }} gap={2} mt={4}>
                        <Fade cascade triggerOnce>
                            {relatedProducts?.map((relatedProduct, index) => (
                                <GridItem key={index}>
                                    <Product info={relatedProduct} />
                                </GridItem>
                            ))}
                        </Fade>
                    </Grid>
                </Box>

            </Container>

            {/* jsonld */}
            <Script
                id="product-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </>
    )
}