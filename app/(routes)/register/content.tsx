"use client"

import { Alert, Box, Button, Clipboard, Container, Field, Grid, Heading, HStack, Icon, Image, Input, List, RadioGroup, Stack, Text, Textarea } from '@chakra-ui/react';
import { useCart } from '@/components/cart';
import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import Link from 'next/link';
import { FaBookReader, FaCar, FaPlaneDeparture } from 'react-icons/fa';
import Form from "next/form";
import categories from '@/lib/categories';
import { Fade } from 'react-awesome-reveal';
import { GrMoney } from 'react-icons/gr';
import { BsPersonCheckFill } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import Head from 'next/head';
import Script from 'next/script';

const RegistrationPage = () => {
    const cart = useCart();
    const retailerDetails = {
        name: process.env.NEXT_PUBLIC_VENDOR_NAME,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: "07068453179",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    };

    const benefits =
        [
            {
                title: "Multi-source Income",
                description: "Sustainable income from different sources such as 20% Company bonus, 20% Sales Profit, Multilevel bonuses, etc",
                icon: <GrMoney color="white" />,
            },
            {
                title: "Villa & Car Award",
                description: "Improved standard of living with Kedi villa and car award.Kedi business is higly rewarding in many ways.",
                icon: <FaCar color="white" />,
            },
            {
                title: "Travels & Tours",
                description: "With Kedi you have access to free international travels for global exposure",
                icon: <FaPlaneDeparture color="white" />,
            },
            {
                title: "Secured Future",
                description: "This is another big reason why you need to join Kedi business.Access to Kedi mutual fund and HMO plan",
                icon: <BsPersonCheckFill color="white" />,
            },
            {
                title: "Scholarship Award",
                description: "Your children are giving scholarship to further their education globally.This is incredible!",
                icon: <PiStudentFill color="white" />,
            },
            {
                title: "Free Training",
                description: "We have centers across Nigeria where you can be trained free of charge on how to run the business effectively.",
                icon: <FaBookReader color="white" />,
            },
        ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Become A Kedi Distributor",
        "description": "Register to become a Kedi distributor and enjoy benefits like multi-source income, villa & car awards, free training, and more.",
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
                    "name": "What is the registration fee?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The registration fee is ₦12,000."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What benefits do I get as a Kedi distributor?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You get multi-source income, villa & car awards, free training, scholarship awards, and more."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I register?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pay the registration fee, fill the form, and submit your payment receipt via WhatsApp for verification."
                    }
                }
            ]
        }
    };

    const handleFormSubmission = (event: React.FormEvent) => {
        event.preventDefault();

        const fullName = (document.querySelector('input[name="full_name"]') as HTMLInputElement)?.value;
        const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value;
        const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
        const phoneNumber = (document.querySelector('input[name="tel"]') as HTMLInputElement)?.value;
        const stateOfOrigin = (document.querySelector('input[name="state_of_origin"]') as HTMLInputElement)?.value;
        const address = (document.querySelector('textarea[name="address"]') as HTMLTextAreaElement)?.value;

        console.log({
            fullName,
            email,
            gender,
            phoneNumber,
            stateOfOrigin,
            address,
        });

        if (!fullName || !email || !gender || !phoneNumber || !stateOfOrigin || !address) {
            alert("Please fill in all required fields.");
            return;
        }

        const message = `*Registration Request For Kedi Distributorship:*\n\n *Personal Information:*\n\n*Full Name:* ${fullName}\n*Email:* ${email}\n*Gender:* ${gender}\n*Phone Number:* ${phoneNumber}\n*State Of Origin:* ${stateOfOrigin}\n*Address:* ${address}\n\n Kindly proceed to sending your receipt of payment here`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `${retailerDetails.whatsapp}&text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <Box bg="white"
                py="12"
                lineHeight={"2"}>
                <Container maxW="6xl">
                    <Stack py="12" alignItems="center" gap="0">
                        <Heading
                            size={{ base: "3xl", md: "3xl" }}
                            fontFamily={"merriweather"}
                            w="80%"
                            textAlign="center"
                        >
                            Become A Kedi Distributor Today
                        </Heading>


                        <HStack
                            fontWeight="black"
                            mt="-4"
                            color={"accent"}
                            justifyContent={"center"}
                            fontSize={{ base: "3xl", md: "5xl" }}>
                            With Just &#8358;12,000
                        </HStack>
                    </Stack>
                </Container>
            </Box>

            <Container
                maxW={"6xl"}
                bg="accent"
                p={{ base: "6", md: "12" }}
                rounded="xl"
                mt="-20">
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap="14">

                    <Form action={"#"} onSubmit={handleFormSubmission}>
                        <Heading color="white" size="4xl" mb="6">Fill the Form</Heading>
                        <Stack gap="6" color={"white"}>
                            <Field.Root required>
                                <Field.Label color="white">Full Name</Field.Label>
                                <Input variant={"subtle"} rounded={"lg"} bg="blue.600" name="full_name" placeholder="Enter your full name" />
                            </Field.Root>
                            <Field.Root required>
                                <Field.Label color="white">Email</Field.Label>
                                <Input variant={"subtle"} rounded={"lg"} bg="blue.600" name="email" placeholder="Enter your Email" />
                            </Field.Root>
                            <Field.Root required gap="6">
                                <Field.Label color="white">Select Your Gender</Field.Label>
                                <RadioGroup.Root defaultValue="1">
                                    <HStack gap="6">
                                        {[
                                            { label: "Male", value: "Male" },
                                            { label: "Female", value: "Female" },
                                            { label: "Others", value: "Others" },
                                        ]?.map((item) => (
                                            <RadioGroup.Item key={item.value} value={item.value}>
                                                <RadioGroup.ItemHiddenInput name="gender" />
                                                <RadioGroup.ItemIndicator />
                                                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                                            </RadioGroup.Item>
                                        ))}
                                    </HStack>
                                </RadioGroup.Root>
                            </Field.Root>

                            <Field.Root required>
                                <Field.Label color="white">Phone Number</Field.Label>
                                <Input rounded={"lg"} type="tel" variant={"subtle"} bg="blue.600" inputMode='decimal' name="tel" placeholder="+2340000000000" />
                            </Field.Root>
                            <Field.Root required>
                                <Field.Label color="white">State Of Origin</Field.Label>
                                <Input rounded={"lg"} type="text" variant={"subtle"} bg="blue.600" name="state_of_origin" placeholder="Enter your state of origin" />
                            </Field.Root>
                            <Field.Root required>
                                <Field.Label color="white">Location</Field.Label>
                                <Textarea rounded={"lg"} placeholder="Enter your residential address" variant={"subtle"} bg="blue.600" name="address">
                                </Textarea>
                            </Field.Root>
                            <Field.Root>
                                <Button
                                    rounded={"lg"}
                                    type="submit"
                                    color="accent"
                                    variant={"subtle"}
                                    bg="white">
                                    Proceed To Submittion
                                </Button>
                                <Field.HelperText color="white">You will be redirected to WhatsApp to submit the form</Field.HelperText>
                            </Field.Root>
                        </Stack>
                    </Form>

                    <Stack gap="6" order={{ base: "-1", md: "1" }}>
                        <Heading color="white">Kindly Follow The Instructions Below To Register </Heading>
                        <List.Root listStylePos={"inside"} gap="4" color="gray.200" listStyleType={"decimal"}>
                            <List.Item lineHeight={"2"}>
                                Pay a Once off Registration fee of &#8358;12,000 to the account provided below.
                                <Alert.Root rounded="xl" variant={"solid"} bg="blue.200" my="6" borderStart={"lg"} borderStartColor={"accent"}>
                                    <Alert.Indicator color="accent" />
                                    <Alert.Content>
                                        <Alert.Title color="accent" fontSize="md" fontWeight={"bold"}>
                                            Kedi Distributor&apos;s Account Information
                                        </Alert.Title>
                                        <Alert.Description>
                                            <Stack gap="0" mt="4">
                                                <HStack alignItems="start">
                                                    <Heading mb="4" size="sm">Account Name:</Heading>
                                                    <Text>{process.env.NEXT_PUBLIC_VENDOR_NAME}</Text>
                                                </HStack>
                                                <HStack alignItems="start">
                                                    <Heading mb="4" size="sm">Bank:</Heading>
                                                    <Text>{process.env.NEXT_PUBLIC_BANK}</Text>
                                                </HStack>
                                                <HStack alignItems="start">
                                                    <Heading mb="4" size="sm">Account Number:</Heading>
                                                    <Text>{process.env.NEXT_PUBLIC_ACC_NUMBER}</Text>
                                                    <Clipboard.Root value={process.env.NEXT_PUBLIC_ACC_NUMBER} timeout={1000}>
                                                        <Clipboard.Trigger asChild>
                                                            <Button variant="ghost" size="xs" color="gray.900" _hover={{ color: "white", bg: "accent" }}>
                                                                <Clipboard.Indicator />
                                                                <Clipboard.CopyText />
                                                            </Button>
                                                        </Clipboard.Trigger>
                                                    </Clipboard.Root>
                                                </HStack>
                                            </Stack>
                                        </Alert.Description>
                                    </Alert.Content>
                                </Alert.Root>
                            </List.Item>

                            <List.Item lineHeight={"2"}>
                                After payment, fill the registration form. Upon submission, send your receipt of payment to this <b>{retailerDetails.phone}</b> WhatsApp number for verification.
                                Your form will be processed and feedback will be sent to you via WhatsApp. (Including your complete starter KIT and IDENTITY Number).
                            </List.Item>

                            <List.Item lineHeight={"2"}>
                                You are encouraged to get few of Kedi Products for a try - Use the products, recommend the product to others.
                                <Button
                                    variant={"ghost"}
                                    rounded="xl"
                                    color="white"
                                    w="fit"
                                    mt="4"
                                    _hover={{ bg: "blue.muted", color: "accent", _dark: { color: "white" } }}
                                    asChild
                                    size="lg">
                                    <Link href={`/${categories[0]?.category?.replaceAll(" ", "_")}`}>
                                        Visit Our Shop
                                        <LuArrowRight />
                                    </Link>
                                </Button>
                            </List.Item>
                        </List.Root>
                    </Stack>
                </Grid>
            </Container>

            <Box
                bg="white"
                pt={{ base: "10", md: "20" }}
                mt="20"
                pb={{ base: "24", md: "52" }}>
                <Container maxW="6xl">
                    <Fade direction="up">
                        <Image
                            src="/kedi_distributor.jpg"
                            alt={`${retailerDetails?.name} is a Kedi healthcare distributor`}
                            rounded={"full"}
                            objectPosition={"top"}
                            boxSize={40}
                            mx="auto"
                            mb="6"
                        />
                    </Fade>
                    <Fade direction="up">
                        <Heading
                            as="h2"
                            size={{ base: "3xl", md: "5xl" }}
                            fontWeight="bold"
                            fontFamily="merriweather"
                            textAlign="center"
                            mb="8"
                            w={{ base: "80%", md: "full" }}
                            mx="auto"
                        >
                            Why You Need To Register Now?
                        </Heading>
                    </Fade>

                    <Fade delay={1000}>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                            gap="6"
                        >
                            {benefits?.map((feature, index) => (
                                <Stack
                                    key={index}
                                    p="10"
                                    gap="6"
                                    borderWidth="sm"
                                    borderColor="border"
                                    rounded="xl"
                                    bg="accent"
                                    shadow="xs"
                                    textAlign="center"
                                >
                                    <Icon
                                        mx="auto"
                                        fill="white"
                                        boxSize={"20"}
                                        bg="blue.600"
                                        rounded="full"
                                        p="4"
                                        size={"xl"}>
                                        {feature.icon}
                                    </Icon>
                                    <Heading
                                        as="h3"
                                        size="xl"
                                        color="blue.50"
                                        fontWeight="semibold">
                                        {feature.title}
                                    </Heading>
                                    <Text color="blue.300">{feature.description}</Text>
                                </Stack>
                            ))}
                        </Grid>
                    </Fade>
                </Container>
            </Box>

            {/* jsonld */}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </>
    );
};

export default RegistrationPage;