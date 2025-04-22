import { getCategories, getProducts } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { LuHeart } from "react-icons/lu";


interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>
}

export async function generateStaticParams() {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    return categories.map((category: string) => {
        return {
            category
        }
    });
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const category = decodeURIComponent((await params).category)?.replaceAll("_", " ");

    return (
        <>
            <Container maxW="6xl">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link as={Link} href="/">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link as={Link} href={`/${category}`}>{category}</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <section
                    style={{
                        background: "linear-gradient(135deg, #6B73FF, #000DFF)",
                        color: "white",
                        textAlign: "center",
                        padding: "2rem 0",
                        borderRadius: "8px",
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{category}</h1>
                        <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                            Explore our wide range of products in the {category} category.
                        </p>
                    </div>
                </section>

                <section
                    style={{
                        marginTop: "2rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {(await getProducts(category))?.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                                padding: "1rem",
                                textAlign: "center",
                                background: "white",
                            }}
                        >
                            <img
                                src={product.imageUrls?.[0]}
                                alt={product.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                }}
                            />
                            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                                <Link href={`${product?.category?.replaceAll(" ", "_")}/${product?.title}?productId=${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    {product.title}
                                </Link>
                            </h2>
                            <p style={{ marginTop: "0.5rem" }}>{product.description}</p>
                            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>${product.price}</p>
                            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}></div>
                            <RatingGroup.Root count={5} defaultValue={3} size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>
                            <IconButton
                                aria-label="Like"
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "1.5rem",
                                }}
                            ><LuHeart /></IconButton>
                        </div>
                    ))}
                </section>
            </Container >
        </>
    );
};

export default CategoryPage;