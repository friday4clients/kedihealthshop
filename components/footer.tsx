import { getCategories } from "@/lib/utils";
import { Box, Container, Grid, Stack, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = async () => {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    return (
        <Box bg="gray.900" color="white" py="12" >
            <Container maxW="6xl">
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                    gap="6"
                >
                    <Stack>
                        <Heading as="h3" size="md" mb="4">
                            About Us
                        </Heading>
                        <Text color="gray.400">
                            Kedicares is your trusted store for affordable and high-quality Kedi products. We are committed to your wellness and satisfaction.
                        </Text>
                    </Stack>
                    <Stack>
                        <Heading as="h3" size="md" mb="4">
                            Quick Links
                        </Heading>
                        <Link href="/" color="gray.400">
                            Home
                        </Link>
                        <Link href="/about" color="gray.400">
                            About
                        </Link>
                        <Link href="/services" color="gray.400">
                            Services
                        </Link>
                        <Link href="/contact" color="gray.400">
                            Contact
                        </Link>
                        <Link href="/partner" color="gray.400">
                            Become a Kedi Partner
                        </Link>
                    </Stack>
                    <Stack>
                        <Heading as="h3" size="md" mb="4">
                            Categories
                        </Heading>
                        {categories.slice(0, 4).map((category, index) => (
                            <Link key={index} href={`/category/${category}`} color="gray.400">
                                {category}
                            </Link>
                        ))}
                    </Stack>
                    <Stack>
                        <Heading as="h3" size="md" mb="4">
                            Contact Us
                        </Heading>
                        <Text color="gray.400">Email: support@kedicares.com</Text>
                        <Text color="gray.400">Phone: +123 456 7890</Text>
                        <Text color="gray.400">Address: 123 Wellness Street, City, Country</Text>
                    </Stack>
                </Grid>
                <Text textAlign="center" mt="8" color="gray.600">
                    © {new Date().getFullYear()} Kedicares. All rights reserved.
                </Text>
            </Container>
        </Box >
    )
}

export default Footer;