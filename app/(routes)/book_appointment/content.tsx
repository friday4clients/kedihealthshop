"use client"

import { Box, Button, Container, Field, Grid, GridItem, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';
import { useCart } from '@/components/cart';
import React from 'react';
import Script from 'next/script';

const RegistrationPage = () => {
    const retailerDetails = {
        name: process.env.NEXT_PUBLIC_VENDOR_NAME,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: "07068453179",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Book an Appointment",
        "description": "Schedule an appointment with us to discuss your needs and explore our services.",
        "url": process.env.NEXT_PUBLIC_HOSTNAME,
        "publisher": {
            "@type": "Organization",
            "name": process.env.NEXT_PUBLIC_SITE_NAME,
            "url": process.env.NEXT_PUBLIC_HOSTNAME,
            "logo": {
                "@type": "ImageObject",
                "url": `${process.env.NEXT_PUBLIC_HOSTNAME}/logo.webp`
            }
        },
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I book an appointment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fill out the appointment form with your details and submit it. We will contact you to confirm your appointment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What information do I need to provide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You need to provide your full name, email, phone number, and preferred date and time for the appointment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I reschedule my appointment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you can reschedule your appointment by contacting us through the provided contact details."
                    }
                }
            ]
        }
    };

    const handleFormSubmission = (event: React.FormEvent) => {
        event.preventDefault();

        const fullName = (document.querySelector('input[name="full_name"]') as HTMLInputElement)?.value;
        const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value;
        const phoneNumber = (document.querySelector('input[name="tel"]') as HTMLInputElement)?.value;
        let preferredDate = (document.querySelector('input[name="preferred_date"]') as HTMLInputElement)?.value;
        let preferredTime = (document.querySelector('input[name="preferred_time"]') as HTMLInputElement)?.value;

        if (!fullName || !email || !phoneNumber || !preferredDate || !preferredTime) {
            alert("Please fill in all required fields.");
            return;
        }

        const date = new Date(`${preferredDate},${preferredTime}`);
        preferredDate = date.toLocaleDateString();
        preferredTime = date.toLocaleTimeString();

        const message = `*Appointment Booking Request:*\n\n*Full Name:* ${fullName}\n*Email:* ${email}\n*Phone Number:* ${phoneNumber}\n*Date:* ${preferredDate}\n*Time:* ${preferredTime}\n\n\n Kindly sumbit your appointment.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `${retailerDetails.whatsapp}&text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        // reset form
        (event.target as HTMLFormElement)?.reset();
    };

    return (
        <>
            <Box bg="accent" py="12" color="white" roundedBottomRight="5em">
                <Container h="50vh" maxW="6xl" textAlign="center">
                    <Heading
                        color="white"
                        w={{ md: "70%" }}
                        mx="auto"
                        size={{ base: "4xl", md: "5xl" }} fontFamily="merriweather">
                        Book Your Health Consultation Today
                    </Heading>
                    <Text mt="4" color="gray.200" fontSize="lg">
                        Contact us to schedule a health consultation or check-up. Our team is here to assist you.
                    </Text>
                </Container>
            </Box>

            <Container
                maxW={"6xl"}
                bg="white"
                shadow="md"
                p={{ base: "6", md: "12" }}
                rounded="2xl"
                mb="20"
                mt="-20">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                    gapX={{ base: 0, md: "12" }}
                    gapY="12">

                    <GridItem colSpan={1} >
                        <form method="POST" onSubmit={handleFormSubmission}>
                            <Heading color="gray.900" size="3xl" mb="6">Fill this form</Heading>
                            <Stack gap="6" color={"gray.900"}>
                                <Field.Root required>
                                    <Field.Label >Full Name</Field.Label>
                                    <Input variant={"subtle"} rounded={"lg"} bg="gray.50" name="full_name" placeholder="Enter your full name" />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label >Email</Field.Label>
                                    <Input variant={"subtle"} rounded={"lg"} bg="gray.50" name="email" placeholder="Enter your Email" />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label >Phone Number</Field.Label>
                                    <Input rounded={"lg"} type="tel" variant={"subtle"} bg="gray.50" inputMode='decimal' name="tel" placeholder="+2340000000000" />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label >Preferred Date</Field.Label>
                                    <Input rounded={"lg"} type="date" variant={"subtle"} bg="gray.50" name="preferred_date" />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label >Preferred Time</Field.Label>
                                    <Input rounded={"lg"} type="time" variant={"subtle"} bg="gray.50" name="preferred_time" />
                                </Field.Root>
                                <Field.Root>
                                    <Button
                                        rounded={"lg"}
                                        type="submit"
                                        color="white"
                                        variant={"subtle"}
                                        bg="accent">
                                        Book Appointment
                                    </Button>
                                    <Field.HelperText >You will be redirected to WhatsApp to confirm your appointment</Field.HelperText>
                                </Field.Root>
                            </Stack>
                        </form>
                    </GridItem>

                    <GridItem colSpan={2} order={{ base: "-1", md: "1" }}>
                        <Image
                            src="https://www.shutterstock.com/image-photo/book-your-appointment-text-on-600nw-2400843205.jpg"
                            rounded="xl"
                            h="full"
                        />
                    </GridItem>
                </Grid>
            </Container>

            {/* jsonld */}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </>
    );
};

export default RegistrationPage;