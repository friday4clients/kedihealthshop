import Testimonials from '@/components/testimonial';
import { Box, Button, Container, Em, Grid, GridItem, Heading, Image, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import Link from 'next/link';
import Script from 'next/script';
import { LuArrowRight } from 'react-icons/lu';

export const metadata = {
    title: "About Us",
    description: `Learn more about ${process.env.NEXT_PUBLIC_SITE_NAME}, Kedi Healthcare, and our mission to bring health and wellness solutions to communities worldwide.`,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": process.env.NEXT_PUBLIC_SITE_NAME,
    "url": process.env.NEXT_PUBLIC_HOSTNAME,
    "logo": `${process.env.NEXT_PUBLIC_HOSTNAME}/logo.webp`,
    "description": "Learn more about our mission to bring health and wellness solutions to communities worldwide.",
    "sameAs": [
        `https://www.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK_URL}`,
        `https://www.twitter.com/${process.env.NEXT_PUBLIC_TWITTER_URL}`,
        `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2347068453179",
        "contactType": "Customer Service"
    }
};

const retailerDetails = {
    name: process.env.NEXT_PUBLIC_VENDOR_NAME,
    email: process.env.NEXT_PUBLIC_EMAIL,
    phone: "07068453179",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL,
};

const AboutUsPage = () => {
    return (
        <>
            <VisuallyHidden>
                <Em>Kedi</Em>
                <Em>Kedi Health</Em>
                <Em>Kedi Healthcare</Em>
                <Em>Kedi Health care</Em>
                <Em>Kedi Health consultant</Em>
            </VisuallyHidden>
            <VisuallyHidden>
                <Em>buy original kedi products online nigeria</Em>

                <Em>kedi vitanature supplement price in nigeria</Em>

                <Em>kedi cordyceps capsules for energy</Em>

                <Em>kedi constipation relief tea review</Em>

                <Em>kedi herbal toothpaste where to buy</Em>

                <Em>kedi immune booster supplements lagos</Em>

                <Em>affordable kedi health products abuja</Em>

                <Em>genuine kedi weight loss tea nigeria</Em>
            </VisuallyHidden>
            
            <Box bg="accent" lineHeight={"2"}>
                <Container maxW="6xl" h={{ base: "full", md: "calc(100vh - 55px)" }}>
                    <Grid
                        pb="6"
                        gap={{ base: "4", md: "10" }}
                        h="full"
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                        <Stack py="12" alignItems="left" gap="6">
                            <Heading
                                size={{ base: "3xl", md: "5xl" }}
                                color="white"
                                fontFamily={"merriweather"}
                            >About {process.env.NEXT_PUBLIC_SITE_NAME}</Heading>
                            <Text textAlign={{ base: "left" }} color="blue.200">
                                {process.env.NEXT_PUBLIC_SITE_NAME} is proud to be a trusted partner and distributor of Kedi Healthcare Industries Hong-Kong Limited, located in Hong-Kong China, bringing health and wellness solutions to communities far and wide. Our mission is to empower individuals and families by providing access to high-quality, scientifically-backed healthcare products. Join us on this journey to make a positive impact on lives through innovation and dedication.
                            </Text>
                            <Heading
                                display={{ base: "none", md: "block" }}
                                mt="6"
                                size={{ base: "sm", md: "xl" }}
                                color="white"
                                fontFamily={"merriweather"}
                            >- {retailerDetails?.name}</Heading>
                            <Link color="accent" href={`/register`}>
                                <Button
                                    display={{ base: "none", md: "flex" }}
                                    color="white"
                                    rounded="xl"
                                    w="fit"
                                    borderColor="accent"
                                    size="lg">
                                    Become a Distributor
                                    <LuArrowRight />
                                </Button>
                            </Link>
                        </Stack>

                        <Stack gap="4" h="full" py="2">
                            <Image
                                src="/kedi_distributor.jpg"
                                alt={`${retailerDetails?.name} is a Kedi healthcare distributor`}
                                rounded={"xl"}
                                objectPosition={"top"}
                                border="xl"
                                borderColor={{ base: "white", md: "accent" }}
                                w="full"
                                h="full"
                            />
                            <Heading
                                display={{ md: "none" }}
                                mt="6"
                                size={{ base: "lg", md: "2xl" }}
                                color="white"
                                fontFamily={"merriweather"}
                            >{retailerDetails?.name}</Heading>
                            <Text display={{ md: "none" }} color="gray.200">- Kedi Distributor</Text>

                            <Link color="accent" href={`/register`}>
                                <Button
                                    display={{ md: "none" }}
                                    color="white"
                                    rounded="xl"
                                    w="fit"
                                    borderColor="accent"
                                    size="lg">
                                    Become a Distributor
                                    <LuArrowRight />
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Container>
            </Box >

            <Box bg="white" py="12" pt={{ base: "20", md: "80" }} lineHeight={"2"}>
                <Container maxW="6xl">
                    <Grid gap={{ base: "4", md: "0" }} templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
                        <GridItem
                            display="flex"
                            alignItems="center"
                            h="full"
                            justifyContent={{ md: "center" }}>
                            <Heading w="1/2" size="4xl" color="accent">
                                <em>About Kedi</em>
                            </Heading>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Text>
                                The word KEDI is a Chinese language meaning &quot;Science is unlimited&quot;. <em>Kedi healthcare</em> is a giant Multi-level marketing company of our time, entered Nigeria in 2005, utilized the period to accomplish all due process in line with all rules and regulation in the country and commenced operation specifically on 10th June, 2006 very much in contrast with other Multi-level companies
                            </Text>
                            <Text mt="4">
                                As part of her overall strategy to build a formidable force in the field of life sciences, <em>KEDI</em> has invested tremendously in research and development by partnering with Research and Development Institutes and Manufacturing Companies across the world to continuously connote a culture that combines an endorsement of globally acceptable standards in healthcare industry practices with a genuine concern for the availability of potent but affordable medical products and equipment to meet the needs of her customers and form a powerful synergy based on a set of values in Africa and beyond. Our product lines have covered Herbal Medicine/TCM, Food Supplements, Personal Care and Medical Device.
                            </Text>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>

            <Box bg="white" py="12" lineHeight={"2"}>
                <Container maxW="6xl">
                    <Grid gap={{ base: "4", md: "0" }} templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
                        <GridItem colSpan={2}>
                            <Text>
                                Making people&apos;s lives better by unleashing the power of healthcare, <em>KEDI Healthcare</em> aims to setup Traditional Chinese Medicine Pharmaceutical Factories, Traditional Chinese Medicine Hospitals and Chinese Herbal Medicine Research Institutes worldwide                            </Text>
                        </GridItem>
                        <GridItem
                            order={{ base: "-1", md: "1" }}
                            display="flex"
                            alignItems="center"
                            h="full"
                            justifyContent={{ md: "center" }}>
                            <Heading w="1/2" size="4xl" color="accent">
                                Kedi&apos;s Vision
                            </Heading>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>

            <Box bg="white" py="12" lineHeight={"2"}>
                <Container maxW="6xl">
                    <Grid gap={{ base: "4", md: "0" }} templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
                        <GridItem
                            display="flex"
                            alignItems="center"
                            h="full"
                            justifyContent={{ md: "center" }}>
                            <Heading w="1/2" size="4xl" color="accent">
                                Kedi&apos;s Mission
                            </Heading>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Text>
                                <em>KEDI Healthcare</em> commits itself to promoting Traditional Chinese Medicine (TCM) culture worldwide, introducing the quintessence of Chinese Medicine and contributing to the wellbeing of mankind.                            </Text>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>

            <Box bg="white" py="12" lineHeight={"2"}>
                <Container maxW="6xl">
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
                        <GridItem colSpan={2}>
                            <Text>
                                To provide our customers with healthcare solutions to suit their needs and to provide these solutions at an affordable price.
                            </Text>
                        </GridItem>
                        <GridItem
                            order={{ base: "-1", md: "1" }}
                            display="flex"
                            alignItems="center"
                            h="full"
                            justifyContent={{ md: "center" }}>
                            <Heading w="1/2" size="4xl" color="accent">
                                Kedi&apos;s Goal
                            </Heading>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>

            <Testimonials />

            {/* jsonld */}
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            ></Script>
        </>
    );
};

export default AboutUsPage;
