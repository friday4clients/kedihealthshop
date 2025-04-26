import Product from "@/components/product";
import { getCategories, getProducts } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, IconButton, Stack, Heading, Text, Grid, GridItem, HStack, Image, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { LuHeart } from "react-icons/lu";


interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>
}

export async function generateStaticParams() {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    return categories?.map((category: string) => {
        return {
            category
        }
    });
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const category = decodeURIComponent((await params)?.category)?.replaceAll("_", " ");
    const products = await getProducts(category);

    return (
        <>
            <Container maxW="6xl" py="12">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link color="inherit" _hover={{ color: "accent" }} as={Link} href="/">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.CurrentLink color="accent">{category}</Breadcrumb.CurrentLink>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Stack gap="4" mt="12">
                    <Heading fontWeight="bold" size="4xl" fontFamily={"merriweather"}>{category}</Heading>
                    <Text>
                        Explore our wide range of products in the {category} category. Find the perfect items tailored to your needs and preferences.
                    </Text>
                </Stack>

                <Heading my="8" size="xl">All products</Heading>

                <Grid
                    templateColumns={{ md: "1fr 1fr 1fr" }}
                    gap="4"
                >
                    {products?.map((product, index) => {
                        return (
                            <GridItem key={index}>
                                <Product info={product} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default CategoryPage;