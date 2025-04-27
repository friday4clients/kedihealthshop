import { getCategories, getProducts, getProductById } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, Image, Box, Button, Grid, Stack, GridItem, Heading, Text, FormatNumber, HStack, List, Separator } from "@chakra-ui/react";
import Link from "next/link";
import { LuMinus, LuPlus } from "react-icons/lu";
import dynamic from "next/dynamic";
import ProductActions from "./product_actions";


const Reviews = dynamic(() => import("@/components/reviews"));
const Product = dynamic(() => import("@/components/product"));
const Share = dynamic(() => import("@/components/share"));

export async function generateStaticParams() {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    const params = categories.map(async (category: string) => {
        const params = (await getProducts(decodeURIComponent(category.replaceAll("_", " ")))).map((product) => {
            return {
                category,
                product: product.title
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

export default async ({ params, searchParams }: CategoryPageProps) => {
    const category = decodeURIComponent((await params).category)?.replaceAll("_", " ");
    const productTitle = decodeURIComponent((await params).product)?.replaceAll("_", " ");
    const productId = decodeURIComponent(((await searchParams)?.product_id));
    const product = await getProductById(productId, category);
    const relatedProducts = (await getProducts(category))?.filter((product) => product?.id.toString() !== productId.toString());
    const link = `/${category}/${productTitle}`;

    return (
        <>
            <Container maxW="6xl" my="12">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
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
                    <GridItem bg="gray.100" rounded="xl">
                        <Stack h="full" w="full" justifyContent="center" alignItems="center" py="6">
                            <Image
                                src={product?.imageUrls?.[0]}
                                w="fit"
                                alt={product?.title} />
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Stack gap="4">
                            <Heading w={{ base: "80%", md: "full" }} size={{ base: "3xl", md: "4xl" }}>{product?.title}</Heading>
                            <RatingGroup.Root readOnly colorPalette={"yellow"} count={5} defaultValue={3} size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>
                            <Heading color="accent" size="lg">
                                <FormatNumber value={product?.price!} currency="NGN" style="currency" />
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
                <Text mt="4">{product?.description?.repeat(5)}</Text>

                <Heading mt="8">Benefits</Heading>
                <List.Root listStylePos={"inside"}>
                    {product?.benefits?.map((benefit, index) => {
                        return (
                            <List.Item key={index}>{benefit}</List.Item>
                        )
                    })}
                </List.Root>

                {/* reviews */}
                <Reviews />

                <Box mt={12}>
                    <Heading mt="8">Related Products</Heading>
                    <Grid display="grid" templateColumns={{ md: "repeat(3, 1fr)" }} gap={2} mt={4}>
                        {relatedProducts?.map((relatedProduct, index) => (
                            <GridItem key={index}>
                                <Product info={relatedProduct} />
                            </GridItem>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </>
    )
}