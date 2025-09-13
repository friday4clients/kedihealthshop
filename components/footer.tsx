import categories from "@/lib/categories";
import { Box, Container, Grid, Stack, Link as CLink, Heading, Text, HStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin, LuArrowUp } from "react-icons/lu";

const Footer = async () => {

    return (
        <Box bg="accent" color="blue.emphasized" py="12" pb="4" >
            <Container maxW="6xl">
                <IconButton position="fixed" bottom="4" right="4" asChild color="accent" shadow={"0 0 15px #777"} zIndex="docked" boxSize={"10"} rounded="full">
                    <CLink
                        href="#"
                        aria-label="Scroll to top"
                    >
                        <LuArrowUp />
                    </CLink>
                </IconButton>
                <Stack gap="4"
                    textStyle={"sm"}
                    color="blue.400"
                    textAlign={"center"}
                    mb="12">
                    <Heading color="white" as="h3" size="md">
                        Follow Us
                    </Heading>
                    <HStack gap="6" justifyContent={"center"}>
                        <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_FACEBOOK_URL!} target="_blank" rel="noopener noreferrer">
                            <FaFacebook color="white" size="40" />
                        </Link>
                        <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_WHATSAPP_URL!} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp color="white" size="40" />
                        </Link>
                        {/* <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_TWITTER_URL!} target="_blank" rel="noopener noreferrer">
                            <FaInstagram color="white" size="40" />

                        </Link>
                        <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_INSTAGRAM_URL!} target="_blank" rel="noopener noreferrer">
                            <FaTwitter color="white" size="40" />
                        </Link> */}
                    </HStack>
                </Stack>



                {/* map */}
                <Box my="12" border="sm" w="full" rounded="md" overflow="hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.7114943424187!2d7.025586789831893!3d4.833890541048704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd18ffa6f253%3A0xe25baa696261f96c!2sKedi%20Health%20Shop!5e0!3m2!1sen!2sch!4v1757760159000!5m2!1sen!2sch"
                        width="100%"
                        height="450"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                    gap="6"
                >
                    <Stack>
                        <Heading color="white" as="h3" size="md" mb="4">
                            About Us
                        </Heading>
                        <Text color="blue.50">
                            {process.env.NEXT_PUBLIC_SITE_NAME} is your trusted store for affordable and high-quality Kedi products. We are committed to your wellness and satisfaction.
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
                        <Link href="/checkout">
                            Checkout
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/#services">
                            Services
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                        <Link href="/book_appointment">
                            Book Appointment
                        </Link>
                        <Link href="/register">
                            Become a Kedi Distributor
                        </Link>
                    </Stack>
                    <Stack gap="2" textStyle={"sm"} color="blue.400"
                        className="*:hover:!text-white">
                        <Heading color="white" as="h3" size="md" mb="4">
                            Shop
                        </Heading>
                        {categories.map((category, index) => (
                            <Link key={index} href={`/${category.category.replaceAll(" ", "_")}`}>
                                {category.category}
                            </Link>
                        ))}
                    </Stack>
                    <Stack gap="4" textStyle={"sm"} color="blue.400">
                        <Heading color="white" as="h3" size="md">
                            Contact Us
                        </Heading>
                        <Stack mt="" gap="4">
                            <HStack alignItems={"center"} gap="4">
                                <LuMail color="white" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Email address</Heading>
                                    <Text color="blue.400">{process.env.NEXT_PUBLIC_EMAIL}</Text>
                                </Stack>
                            </HStack>

                            <HStack alignItems={"center"} gap="4">
                                <LuPhone color="white" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Phone Numbers</Heading>
                                    <Text color="blue.400" >{process.env.NEXT_PUBLIC_PHONE_NUMBERS}</Text>
                                </Stack>
                            </HStack>

                            <HStack alignItems={"center"} gap="4">
                                <LuMapPin color="white" size="32" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Location</Heading>
                                    <Text color="blue.400" >{process.env.NEXT_PUBLIC_LOCATION}</Text>
                                </Stack>
                            </HStack>
                        </Stack>
                    </Stack>
                </Grid>
                <Text
                    textStyle={"xs"}
                    textAlign="center"
                    mt="8" color="blue.400">
                    © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.
                    Developed&nbsp;by&nbsp;
                    <Link className="!font-bold !text-white" href="https://api.whatsapp.com/send?phone=2348173406386" target="_blank" rel="nofollow">Izidor Precious</Link>
                </Text>
            </Container>
        </Box >
    )
}

export default Footer;