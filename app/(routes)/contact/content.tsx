"use client"

import { Box, Container, Field, Grid, Button, GridItem, Group, Heading, HStack, Input, Stack, Textarea, Separator, Text, VisuallyHidden, Em } from '@chakra-ui/react';
import Link from 'next/link';
import Form from "next/form";
import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import Script from 'next/script';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": process.env.NEXT_PUBLIC_SITE_NAME,
    "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/contact`,
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "07068453179",
        "email": process.env.NEXT_PUBLIC_EMAIL,
        "contactType": "Customer Service",
        "areaServed": "Global",
        "availableLanguage": ["English"]
    },
    "sameAs": [
        process.env.NEXT_PUBLIC_FACEBOOK_URL,
        process.env.NEXT_PUBLIC_WHATSAPP_URL,
        process.env.NEXT_PUBLIC_TWITTER_URL,
        process.env.NEXT_PUBLIC_INSTAGRAM_URL
    ]
};


const ContactUsPage = () => {
    const handleSendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const fullName = form.full_name.value;
        const phoneNumber = form.tel.value;
        const subject = form.subject.value;
        const message = form.address.value;

        const mailtoLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${fullName}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;

        form.reset();
    };

    return (
        <Box bgSize="cover" bgImg="linear-gradient(to bottom,rgba(0 0 0/0.9), rgba(0 0 0/0.8)), url(https://i.pinimg.com/736x/6a/5d/6f/6a5d6f7449e3dcf0e44ddf90066f2987.jpg)" color="white" h="">

            <VisuallyHidden>
                <Em>best kedi products for immune system support</Em>

                <Em>kedi herbal remedies for digestion</Em>

                <Em>kedi supplements for women&apo;s health</Em>

                <Em>how to spot fake kedi products</Em>
                <Em>kedi health products for stress relief</Em>

                <Em>kedi supplements for energy and vitality</Em>
                <Em>kedi capsules for blood circulation</Em>

                <Em>kedi detox tea benefits and side effects</Em>
                <Em>{process.env.NEXT_PUBLIC_SITE_NAME} kedi shop nigeria</Em>

                <Em>reviews of {process.env.NEXT_PUBLIC_SITE_NAME} kedi store</Em>

                <Em>buy kedi products from trusted seller</Em>

                <Em>kedi health care official partner nigeria</Em>
            </VisuallyHidden>

            <Container h={"full"} maxW={"6xl"}>
                <Grid
                    h="full"
                    pl={"0"}
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                    <GridItem py="8" bg="transparent" borderRight={{ base: "none", md: "sm" }}>
                        <Form action={"#"} onSubmit={handleSendMessage} className='w-full'>
                            <Container maxW={"6xl"} pl={"0"}>
                                <Stack w="full" gap="4" alignItems={"center"} color="blue.100">
                                    <Heading mb="6" color="white" fontFamily="merriweather" lineHeight={"1.2"} size={{ base: "4xl", md: "5xl" }}>
                                        Contact {process.env.NEXT_PUBLIC_SITE_NAME}
                                    </Heading>
                                    <Group w="full" flexDir={{ base: "column", md: "row" }}>
                                        <Field.Root required>
                                            <Field.Label color="colorPalette.100">Full Name</Field.Label>
                                            <Input variant={"subtle"} bg="transparent" border="sm" name="full_name" />
                                        </Field.Root>
                                        <Field.Root required>
                                            <Field.Label color="colorPalette.100">Phone Number</Field.Label>
                                            <Input variant={"subtle"} bg="transparent" border="sm" inputMode='decimal' name="tel" />
                                        </Field.Root>
                                        <Field.Root required>
                                            <Field.Label color="colorPalette.100">Subject</Field.Label>
                                            <Input variant={"subtle"} bg="transparent" border="sm" name="subject" />
                                        </Field.Root>
                                    </Group>
                                    <Field.Root required>
                                        <Field.Label color="colorPalette.100">Message</Field.Label>
                                        <Textarea h="40" variant={"subtle"} bg="transparent" border="sm" name="address">
                                        </Textarea>
                                    </Field.Root>
                                    <Button
                                        type="submit"
                                        fontWeight="bold"
                                        rounded="xl"
                                        bg="accent"
                                        color="white"
                                        w={{ md: "fit" }}
                                        transition={"all 500ms"}
                                        _active={{ transform: "scale(0.9)" }}
                                        _hover={{ bg: "blue.solid" }}
                                    >Send Message</Button>
                                </Stack>
                            </Container>
                        </Form>
                        <HStack justifyContent={"center"} my="10" w="full">
                            <Separator
                                w="6" borderColor="gray.solid" />
                            <Text color="gray.solid" flexShrink="0">Or</Text>
                            <Separator
                                w="6" borderColor="gray.solid" />
                        </HStack>
                        <Stack gap="4"
                            bg="transparent"
                            textStyle={"sm"}
                            color="blue.400"
                            textAlign={"center"}>
                            <Heading color="white" as="h3" size="md">
                                Contact Us On
                            </Heading>
                            <HStack gap="6" justifyContent={"center"}>
                                <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_FACEBOOK_URL!} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook color="white" size="20" />
                                </Link>
                                <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_WHATSAPP_URL!} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp color="white" size="20" />
                                </Link>
                                <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_TWITTER_URL!} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram color="white" size="20" />

                                </Link>
                                <Link className="hover:opacity-70" href={process.env.NEXT_PUBLIC_INSTAGRAM_URL!} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter color="white" size="20" />
                                </Link>
                            </HStack>
                        </Stack>
                    </GridItem>
                    <GridItem pl={{ base: "0", md: "10" }} py="12" color="white" bg="transparent">
                        <Heading color="white">Contact Information</Heading>
                        <Stack mt="10" gap="4">
                            <HStack alignItems={"center"} gap="4">
                                <LuMail color="white" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Email address</Heading>
                                    <Text color="gray.500">{process.env.NEXT_PUBLIC_EMAIL}</Text>
                                </Stack>
                            </HStack>

                            <HStack alignItems={"center"} gap="4">
                                <LuPhone color="white" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Phone Numbers</Heading>
                                    <Text color="gray.500" >{process.env.NEXT_PUBLIC_PHONE_NUMBERS}</Text>
                                </Stack>
                            </HStack>

                            <HStack alignItems={"center"} gap="4">
                                <LuMapPin color="white" size="40" />
                                <Stack gap="0">
                                    <Heading color="white" size="md">Location</Heading>
                                    <Text color="gray.500" >{process.env.NEXT_PUBLIC_LOCATION}</Text>
                                </Stack>
                            </HStack>


                            {/* map */}
                            <Box mt="6" border="sm" w="full" rounded="md" overflow="hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.7114943424187!2d7.025586789831893!3d4.833890541048704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd18ffa6f253%3A0xe25baa696261f96c!2sKedi%20Health%20Shop!5e0!3m2!1sen!2sch!4v1757760159000!5m2!1sen!2sch"
                                    width="100%"
                                    height="450"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">

                                </iframe>
                            </Box>
                        </Stack>
                    </GridItem>
                </Grid>
            </Container>

            {/* jsonld */}
            <Script
                id="contact-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </Box >
    );
};

export default ContactUsPage;