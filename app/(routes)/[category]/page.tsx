import Product from "@/components/product";
import { getProductsByCategory } from "@/lib/actions";
import categories, { CategoryType } from "@/lib/categories";
import { ProductType } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, IconButton, Stack, Heading, Text, Grid, GridItem, HStack, Image, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { LuHeart } from "react-icons/lu";


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

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const category = decodeURIComponent((await params)?.category)?.replaceAll("_", " ");
    const description = categories.find(c => c.category === category)?.description;
    const products = (await getProductsByCategory(category))?.Items as ProductType[];

    return (
        <>
            <Container maxW="6xl" py="12" pt={{ base: "6" }}>
                <Breadcrumb.Root>
                    <Breadcrumb.List flexWrap={"wrap"}>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link _active={{ ring: "none" }} color="inherit" _hover={{ color: "accent" }} as={Link} href="/">Home</Breadcrumb.Link>
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
                        {description}
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
        </>
    );
};

export default CategoryPage;