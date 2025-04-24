import { getCategories } from "@/lib/utils";
import { Box, Container, Grid, Stack, Heading, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = async () => {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    return (
        <Box bg="accent" color="blue.emphasized" py="12" pb="4" >
            <Container maxW="6xl">
                <Stack gap="4"
                    textStyle={"sm"}
                    color="blue.400"
                    textAlign={"center"}
                    mb="12">
                    <Heading color="white" as="h3" size="md">
                        Follow Us
                    </Heading>
                    <HStack gap="6" justifyContent={"center"}>
                        <Link className="hover:opacity-70" href={process.env.FACEBOOK_URL!} target="_blank" rel="noopener noreferrer">
                            <FaFacebook color="white" size="40" />
                        </Link>
                        <Link className="hover:opacity-70" href={process.env.WHATSAPP_URL!} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp color="white" size="40" />
                        </Link>
                        <Link className="hover:opacity-70" href={process.env.TWITTER_URL!} target="_blank" rel="noopener noreferrer">
                            <FaInstagram color="white" size="40" />

                        </Link>
                        <Link className="hover:opacity-70" href={process.env.INSTAGRAM_URL!} target="_blank" rel="noopener noreferrer">
                            <FaTwitter color="white" size="40" />
                        </Link>
                    </HStack>
                </Stack>
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                    gap="6"
                >
                    <Stack>
                        <Heading color="white" as="h3" size="md" mb="4">
                            About Us
                        </Heading>
                        <Text color="blue.50">
                            Kedicares is your trusted store for affordable and high-quality Kedi products. We are committed to your wellness and satisfaction.
                        </Text>
                    </Stack>

                    <Stack gap="2" textStyle={"sm"} color="blue.400"
                        className="*:hover:!text-white">
                        <Heading color="white" as="h3" size="md" mb="4">
                            Quick Links
                        </Heading>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/services">
                            Services
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                        <Link href="/partner">
                            Become a Kedi Partner
                        </Link>
                    </Stack>
                    <Stack gap="2" textStyle={"sm"} color="blue.400"
                        className="*:hover:!text-white">
                        <Heading color="white" as="h3" size="md" mb="4">
                            Shop
                        </Heading>
                        {categories.map((category, index) => (
                            <Link key={index} href={`/${category.replaceAll(" ", "_")}`}>
                                {category}
                            </Link>
                        ))}
                    </Stack>
                    <Stack gap="4" textStyle={"sm"} color="blue.400">
                        <Heading color="white" as="h3" size="md">
                            Contact Us
                        </Heading>
                        <Text color="blue.400">Email: support@kedicares.com</Text>
                        <Text color="blue.400">Phone: +123 456 7890</Text>
                        <Text color="blue.400">Address: 123 Wellness Street, City, Country</Text>
                    </Stack>
                </Grid>
                <Text
                    textStyle={"xs"}
                    textAlign="center"
                    mt="8" color="blue.400">
                    © {new Date().getFullYear()} Kedicares. All rights reserved.
                    Developed&nbsp;by&nbsp;
                    <Link className="!font-bold !text-white" href="https://fj4lio.vercel.app" target="_blank" rel="nofollow">Friday Joshua</Link>
                </Text>
            </Container>
        </Box >
    )
}

export default Footer;