import { getCategories, getProducts, getProductById } from "@/lib/utils";
import { Container, Breadcrumb, RatingGroup, IconButton, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { LuHeart } from "react-icons/lu";
import Form from "next/form";

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
        productId: string
    }>
}

export default async ({ params, searchParams }: CategoryPageProps) => {
    const category = decodeURIComponent((await params).category)?.replaceAll("_", " ");
    const productTitle = decodeURIComponent((await params).product)?.replaceAll("_", " ");
    const productId = decodeURIComponent(((await searchParams)?.productId));
    const product = await getProductById(productId, category);
    const relatedProducts = (await getProducts(category))?.filter((product) => product?.id.toString() !== productId.toString());

    return (
        <>
            <Container maxW="6xl" my="12">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link as={Link} href="/">Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link as={Link} href={`/${category}`}>{category}</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link as={Link} href={`/${category}/${productTitle}`}>{productTitle}</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Box mt={8}>

                    <Image
                        src={product?.imageUrls?.[0]}
                        alt={product?.title}
                        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "16px" }}
                    />

                    <h1>{productTitle}</h1>

                    <div>
                        <p><strong>Description:</strong> {product?.description}</p>
                        <p><strong>Price:</strong> ${product?.price}</p>
                        <p><strong>Category:</strong> {product?.category}</p>
                        <RatingGroup.Root readOnly count={5} defaultValue={3} size="sm">
                            <p><strong>Category:</strong> {product?.benefits}</p>
                            <RatingGroup.HiddenInput />
                            <RatingGroup.Control />
                        </RatingGroup.Root>

                        <IconButton
                            aria-label="Add to Wishlist"
                            variant={"ghost"}
                            size="lg"
                            mt={4}
                        >
                            <LuHeart />
                        </IconButton>
                    </div>
                </Box>

                <Box mt={8} textAlign="center">
                    <Box display="inline-flex" alignItems="center" gap={4}>
                        <Button
                            colorScheme="teal"
                            size="sm"
                        >
                            -
                        </Button>
                        <Box as="span" fontSize="lg" fontWeight="bold">
                            1 {/* Replace with dynamic quantity */}
                        </Box>
                        <Button
                            colorScheme="teal"
                            size="sm"
                        >
                            +
                        </Button>
                    </Box>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        ml={4}
                    >
                        Add to Cart
                    </Button>
                </Box>

                <Box mt={12}>
                    <h2>Related Products</h2>
                    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} mt={4}>
                        {relatedProducts?.map((relatedProduct) => (
                            <Box
                                key={relatedProduct.id}
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                textAlign="center"
                                p={4}
                            >
                                <Image
                                    src={relatedProduct?.imageUrls?.[0]}
                                    alt={relatedProduct?.title}
                                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                />
                                <h3>{relatedProduct?.title}</h3>
                                <p>${relatedProduct?.price}</p>
                                <Link href={`/${category}/${relatedProduct?.title?.replaceAll(" ", "_")}?productId=${relatedProduct?.id}`} passHref>
                                    <Button colorScheme="teal" size="sm" mt={2}>
                                        View Product
                                    </Button>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box mt={12}>
                    <h2>Product Reviews</h2>
                    <Box mt={4}>
                        {[
                            { author: "John Doe", rating: 4, comment: "Great product, highly recommend!" },
                            { author: "Jane Smith", rating: 5, comment: "Absolutely loved it, will buy again!" },
                            { author: "Alice Johnson", rating: 3, comment: "It's okay, could be better." }
                        ].length ? (
                            [
                                { author: "John Doe", rating: 4, comment: "Great product, highly recommend!" },
                                { author: "Jane Smith", rating: 5, comment: "Absolutely loved it, will buy again!" },
                                { author: "Alice Johnson", rating: 3, comment: "It's okay, could be better." }
                            ].map((review, index) => (
                                <Box
                                    key={index}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    p={4}
                                    mb={4}
                                >
                                    <h3><strong>{review.author}</strong></h3>
                                    <RatingGroup.Root readOnly count={5} defaultValue={review.rating} size="sm">
                                        <RatingGroup.HiddenInput />
                                        <RatingGroup.Control />
                                    </RatingGroup.Root>
                                    <p>{review.comment}</p>
                                </Box>
                            ))
                        ) : (
                            <p>No reviews yet. Be the first to review this product!</p>
                        )}
                    </Box>

                    <Box mt={8}></Box>
                    <h3>Add a Review</h3>
                    <Form
                        action={"/"}
                    // onSubmit={(e) => {
                    //     e.preventDefault();
                    //     const formData = new FormData(e.currentTarget);
                    //     const newReview = {
                    //         author: formData.get("author") as string,
                    //         rating: parseInt(formData.get("rating") as string, 10),
                    //         comment: formData.get("comment") as string,
                    //     };
                    //     console.log("New Review Submitted:", newReview);
                    //     // Add logic to handle the review submission (e.g., API call)
                    //     e.currentTarget.reset();
                    // }}
                    >
                        <Box mb={4}>
                            <label htmlFor="author">Name</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                required
                                style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        </Box>
                        <Box mb={4}>
                            <label htmlFor="rating">Rating</label>
                            <select
                                id="rating"
                                name="rating"
                                required
                                style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
                            >
                                <option value="">Select Rating</option>
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </Box>
                        <Box mb={4}>
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows={4}
                                required
                                style={{ width: "100%", padding: "8px", marginTop: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        </Box>
                        <Button type="submit" colorScheme="teal">
                            Submit Review
                        </Button>
                    </Form>
                </Box>
            </Container>
        </>
    )
}