import { Button, Container, Heading, Image, Link as CLink, Text, Icon, Box, Grid, GridItem, HStack, Highlight, Stack, Accordion, Input, Center, Em, VisuallyHidden } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { BiBadgeCheck, BiSupport } from "react-icons/bi";
import { FaBookReader, FaCar, FaMoneyBillWave, FaPlaneDeparture } from "react-icons/fa";
import categories from "@/lib/categories";
import { getProductsByCategory } from "@/lib/actions";
import { ProductType } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Script from "next/script";
import { BsPersonCheckFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";

const HeroCarousel = dynamic(() => import("@/components/hero_carousel"));
const Testimonials = dynamic(() => import("@/components/testimonial"));
const Product = dynamic(() => import("@/components/product"));
const Cart = dynamic(() => import("@/components/cart"));


const getProducts = async (category: string) => {
  const products = (await getProductsByCategory(category))?.Items?.slice(0, 2) as ProductType[];
  products.sort((a, b) => a?.title.localeCompare(b?.title));
  return products?.map((product, index) => {
    return <Product key={index} info={product} imgH="40" />
  });
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${process.env.NEXT_PUBLIC_SITE_NAME} | Kedi Healthcare - Affordable Kedi Healthcare Products`,
  "description": `Your number one store for affordable Kedi Healthcare products. Explore our shop, learn about our services, and discover why customers trust ${process.env.NEXT_PUBLIC_HOSTNAME} for their wellness journey.`,
  "url": `${process.env.NEXT_PUBLIC_HOSTNAME!}`,
  "publisher": {
    "@type": "Organization",
    "name": `${process.env.NEXT_PUBLIC_SITE_NAME}`,
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_HOSTNAME!}/logo.webp`
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/${categories[0]?.category?.replaceAll(" ", "_")}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/about`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/contact`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQs",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/#faqs`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Services",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/#services`
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Register",
        "item": `${process.env.NEXT_PUBLIC_HOSTNAME}/register`
      }
    ]
  },
  "mainEntity": {
    "@type": "WebPageElement",
    "name": "Hero Section",
    "description": `Highlighting ${process.env.NEXT_PUBLIC_SITE_NAME} as the number one store for affordable Kedi Healthcare products`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${process.env.NEXT_PUBLIC_HOSTNAME}`,
    "query-input": "required name=search_term_string"
  }
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

export default async function Home() {


  return (
    <>
      {/* // hero section */}
      <Box
        as="main"
        bg="white"
        h={{ base: "calc(100vh - 55px)", md: "vh" }}
        p="2">

        <VisuallyHidden>
          <Em>kedi detox tea benefits and side effects</Em>
          <Em>{process.env.NEXT_PUBLIC_SITE_NAME} kedi shop nigeria</Em>

          <Em>reviews of {process.env.NEXT_PUBLIC_SITE_NAME} kedi store</Em>

          <Em>buy kedi products from trusted seller</Em>

          <Em>kedi health care official partner nigeria</Em>
          
          <Em>buy original kedi products online nigeria</Em>

          <Em>kedi vitanature supplement price in nigeria</Em>

          <Em>kedi cordyceps capsules for energy</Em>

          <Em>kedi constipation relief tea review</Em>

          <Em>kedi herbal toothpaste where to buy</Em>

          <Em>kedi immune booster supplements lagos</Em>

          <Em>affordable kedi health products abuja</Em>

          <Em>genuine kedi weight loss tea nigeria</Em>
        </VisuallyHidden>
        <Grid
          gap=""
          h="full"
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <GridItem
            pt="2"
            h="full"
            px={{ base: "4", md: "12" }}>

            {/* nav links */}
            <Slide direction="down">
              <HStack
                border="1px solid {colors.gray.200}"
                rounded="xl"
                p="4"
                bg="gray.100"
                display={{ base: "none", md: "flex" }}
                justifyContent={"space-between"}
                gap="">
                <Link href="/">
                  <Image src="/logo.webp" alt={`${process.env.NEXT_PUBLIC_SITE_NAME} logo`} w="44" h="5" />
                </Link>

                <HStack gap="4" className="*:hover:!text-blue-700">
                  <Link href={`/${categories[0]?.category?.replaceAll(" ", "_")}`}>
                    Shop
                  </Link>
                  <Link href="/about">
                    About
                  </Link>

                  <Link href="/contact">
                    Contact
                  </Link>
                  <Cart />
                </HStack>
              </HStack>
            </Slide>


            <Box mt="8">
              <Fade>
                <Heading
                  as="h1"
                  size="5xl"
                  fontWeight={"black"}
                  fontFamily={"merriweather"}
                  mb="6">
                  <Em>
                    <Highlight
                      query={"Number One"}
                      styles={{
                        color: "blue.contrast",
                        display: "block",
                        w: "fit",
                        px: "4",
                        transform: "skewX(-20deg)",
                        fontWeight: "thin",
                        bg: "accent"
                      }}
                    >
                      Your Number One Store For Affordable Kedi Healthcare Products
                    </Highlight>
                  </Em>
                </Heading>
              </Fade>

              <Fade direction="up">
                <Stack gap="4" flexDirection={{ base: "column", md: "row" }}>
                  <Button
                    variant={"solid"}
                    rounded="xl"
                    color="white"
                    bg="accent"
                    _hover={{ bg: "blue.muted", color: "accent", _dark: { color: "white" } }}
                    asChild
                    size="lg">
                    <Link href={`/${categories[0]?.category?.replaceAll(" ", "_")}`}>
                      Shop Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    color="accent"
                    rounded="xl"
                    _hover={{ bg: "blue.50" }}
                    borderColor="accent"
                    size="lg">
                    <Link color="accent" href={`/register`}>
                      Become a Distributor
                    </Link>
                  </Button>
                </Stack>
              </Fade>
            </Box>

          </GridItem>

          {/* col 2 */}
          <GridItem
            maxW={"full"}
            rounded="xl"
            h="full"
            bg="accent"
            overflow={"hidden"}
            display={{ base: "none", md: "block" }}>
            <Zoom delay={500} className="!h-full">
              <Stack
                h="full"
                justifyContent={"center"}
                alignItems={"center"}
                rounded="xl"
              >
                <HeroCarousel />
              </Stack>
            </Zoom>
          </GridItem>
        </Grid>
      </Box>

      {/* Featured Categories Section */}
      <Box py="32" id="explore">
        <Container maxW="6xl">
          <Fade direction="up">
            <Heading
              as="h2"
              size={{ base: "3xl", md: "5xl" }}
              fontWeight={"bold"}
              w="2/3"
              mx="auto"
              mb="8"
              fontFamily={"merriweather"}
              textAlign="center">
              Explore Our Shop
            </Heading>
          </Fade>

          <Fade delay={500}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap="0"
              className="md:*:nth-[odd]:!border-r *:nth-[3]:!border-b *:md:nth-[3]:!border-0 *:nth-[1]:!border-b *:nth-[2]:!border-b !rounded-xl !overflow-hidden"
            >
              {categories.slice(0, 4).map(async (category, index) => (
                <Stack
                  key={index}
                  p={{ base: "5", md: "12" }}
                  borderColor={"gray.200"}
                  bg="white"
                  gap="3"
                >
                  <Heading
                    as="h3"
                    size="2xl"
                    w={{ base: "70%", md: "1/2" }}
                    fontWeight={"semibold"}>
                    {category?.category}
                  </Heading>
                  <Text lineClamp={"5"}>
                    {category.description}
                  </Text>
                  <Heading
                    size="sm"
                  >Products</Heading>

                  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="2">
                    {await getProducts(category?.category)}
                  </Grid>
                  <Button
                    variant="solid"
                    color="accent"
                    bg="blue.50"
                    size="sm"
                    w="fit"
                    className="group"
                    rounded="xl"
                    mt="4"
                    asChild
                  >
                    <Link href={`/${category?.category?.replaceAll(" ", "_")}`}>
                      View All Products
                      <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
                    </Link>
                  </Button>
                </Stack>
              ))}
            </Grid>
          </Fade>
        </Container>
      </Box>

      {/* Features Section */}
      <Box pt={{ base: "0", md: "12" }} pb={{ base: "24", md: "52" }}>
        <Container maxW="6xl">
          <Fade direction="up">
            <Heading
              as="h2"
              size={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              fontFamily="merriweather"
              textAlign="center"
              mb="8"
              w={{ base: "50%", md: "full" }}
              mx="auto"
            >
              Why Choose Us
            </Heading>
          </Fade>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="6"
            className="md:*:nth-[odd]:!translate-y-12"
          >
            <Slide cascade>
              {[
                {
                  title: "High-Quality Products",
                  description:
                    "We offer only the best Kedi products to ensure your health and wellness.",
                  icon: <BiBadgeCheck color="white" />,
                },
                {
                  title: "Affordable Prices",
                  description:
                    "Our products are priced to fit your budget without compromising quality.",
                  icon: <FaMoneyBillWave color="white" />,
                },
                {
                  title: "Excellent Support",
                  description:
                    "Our team is always ready to assist you with any inquiries or concerns.",
                  icon: <BiSupport color="white" />,
                },
              ].map((feature, index) => (
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
                    fill="blue.400"
                    boxSize={"32"}
                    size={"2xl"}>
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
            </Slide>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={{ base: "20", md: "40" }} bg="white">
        <Container maxW="6xl">
          <Fade>
            <Heading
              as="h2"
              size={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              fontFamily="merriweather"
              textAlign="center"
              mb="16"
            >
              Our Services
            </Heading>
          </Fade>
          <Stack gap={{ base: "12", md: "20" }}
          >
            {[
              {
                title: "Home Delivery",
                description:
                  "Enjoy the convenience of having your favorite Kedi products delivered right to your doorstep.",
                icon: "/home_delivery_man.jpg",
              },
              {
                title: "In-Store Purchase",
                description:
                  "Visit our store to explore a wide range of products and get personalized assistance.",
                icon: "/instore_purchase.jpg",
              },
              {
                title: "Health Consultations",
                description:
                  "Get expert advice and consultations to choose the best products for your health needs.",
                icon: "/health_consultation.jpg",
              },
            ].map((service, index) => (
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={{ base: "3", md: "12" }}
                key={index}>
                <Slide fraction={0}>
                  <GridItem
                    order={{ base: "0", md: index === 1 ? "-1" : "0" }}
                    bgImg={`url(${service.icon})`}
                    bgSize={"cover"}
                    bgPos="center"
                    h="300px"
                    rounded="xl"
                  ></GridItem>
                </Slide>
                <GridItem>
                  <Stack
                    p="6"
                    gap={{ base: "3", md: "6" }}
                  >
                    <Heading
                      color="accent"
                      as="h3"
                      size={{ base: "2xl", md: "3xl" }}
                      fontWeight="bold" >
                      {service.title}
                    </Heading>
                    <Text
                      textStyle={{ base: "2xl", md: "5xl" }}
                      fontWeight={"lighter"}>{service.description}</Text>
                  </Stack>
                </GridItem>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box
        bg="white"
        pt={{ base: "10", md: "20" }}
        pb={{ base: "24", md: "52" }}>
        <Container maxW="6xl">
          <Fade direction="up">
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
                // mt="-4"
                color={"accent"}
                justifyContent={"center"}
                fontSize={{ base: "3xl", md: "5xl" }}>
                With Just &#8358;12,000
              </HStack>

              <Heading
                mt="0"
                size={{ base: "3xl", md: "3xl" }}
                fontFamily={"merriweather"}
                w="80%"
                textAlign="center"
              >
                And Enjoy the benefits of a
              </Heading>
            </Stack>
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

          <Center>
            <Link color="accent" href={`/register`}>
              <Button
                variant="ghost"
                color="accent"
                rounded="xl"
                mt="12"
                _hover={{ bg: "blue.50" }}
                size="xl">
                Register Now
                <LuArrowRight />
              </Button>
            </Link>
          </Center>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py="12">
        <Container maxW="6xl">
          <Stack gap="4" textAlign={"center"} alignItems={"center"}>
            <Heading
              as="h2"
              size="3xl"
              fontWeight="bold"
              fontFamily="merriweather"
              mb="4"
            >
              Ready to Transform Your Health?
            </Heading>
            <Text
              w={{ base: "90%", md: "70%" }}
              mb="6">
              Discover the benefits of Kedi Healthcare products today. Join thousands of satisfied customers who trust Kedi Healthcare products for their wellness journe.
            </Text>
            <Button
              variant="solid"
              color="white"
              rounded="xl"
              bg="accent"
              _hover={{ bg: "blue.muted", color: "accent", _dark: { color: "white" } }}
              w="fit"
              size="lg"
            >
              Shop Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <Box id="faqs" py={{ base: "20", md: "40" }} bg="white">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            mb="8"
          >
            Frequently Asked Questions
          </Heading>
          <Stack gap="6">
            <Accordion.Root
              w="full"
              variant={"subtle"}
              size="lg"
              gap="4"
              collapsible>
              {[
                {
                  question: "When did Kedi commence business in Nigeria?",
                  answer:
                    "Kedi Healthcare received CAC registration and NAFDAC approval in 2006 and began operations the same year.",
                },
                {
                  question: "Is Kedi a Nigerian company?",
                  answer:
                    "Kedi Healthcare Industries Nigeria Ltd is a wholly‑owned subsidiary of Kedi Healthcare Industries Co. (Hong Kong). Raw materials are imported from China; packaging is done locally by Fidson Healthcare PLC.",
                },
                {
                  question: "How can I place an order?",
                  answer:
                    "You can place an order by contacting our office through email, Whatsappp, or phone call, find more details in the contact us page",
                },
                {
                  question: "What kind of products does Kedi produce?",
                  answer:
                    "Kedi is a network‑marketing firm that offers nutritional supplements, herbal beverages, personal‑care items, and health‑diagnostic/therapy equipment.",
                },
                {
                  question: "What type of diseases can Kedi products help with?",
                  answer:
                    "As nutritional supplements, Kedi products may support management of diabetes, stroke, menopausal syndrome, infertility, hypertension, impotence, asthma, cancer, fibroids, and more; they are not positioned as pharmaceutical cures.",
                },
                {
                  question: "How do I store KEDI products?",
                  answer: "The storage condition for KEDI products is stated on the product label and leaflet, it is advised to have a clean, conducive and safe storage facility and follow the storage conditions stated on the product label and leaflet to avoid any form of damage.Keep the product tightly closed after opening and store same in a dry and cool place or keep delicate product in the fridge after opening, when transporting large quantity of products, ensure that the means of transportation has a proper storage facility, avoid squeezing the pack or bottles when packing the products, avoid placing the products close to the engine of the vehicle to prevent heat damage, ensure that the products does not spend too many days in transit."
                },
                {
                  question: "Are Kedi products approved by NAFDAC?",
                  answer:
                    "Yes, all Kedi products are registered and approved by NAFDAC, ensuring they meet the required safety and quality standards.",
                },
                {
                  question: "Can Kedi products be used alongside prescription medications?",
                  answer:
                    "Kedi products are nutritional supplements and can generally be used alongside prescription medications. However, it is advisable to consult your healthcare provider before combining them.",
                },
                {
                  question: "How can I become a Kedi distributor?",
                  answer:
                    "To become a Kedi distributor, you need to register with a one-time fee and purchase a starter pack. Visit our registration page for more details.",
                },
                {
                  question: "What is the refund policy for Kedi products?",
                  answer:
                    "Kedi offers a refund or exchange policy for defective or damaged products. Ensure you retain your receipt and contact customer service for assistance.",
                },
                {
                  question: "Are there any side effects of using Kedi products?",
                  answer:
                    "Kedi products are made from natural ingredients and are generally safe for use. However, individual reactions may vary, and it is recommended to follow the usage instructions provided.",
                },
                {
                  question: "Where can I find Kedi training centers?",
                  answer:
                    "Kedi has training centers across Nigeria where you can learn about the business and products. Contact our support team for the nearest center to you.",
                }
              ].map((faq, index) => (
                <Accordion.Item
                  _open={{ bg: "gray.100" }}
                  rounded="xl"
                  py="2"
                  key={index}
                  value={faq.answer}>
                  <Accordion.ItemTrigger
                    cursor={"pointer"}>
                    <Heading _hover={{ color: "accent" }} flex="1" as="h3" size="md">
                      {faq.question}
                    </Heading>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody>
                      <Text>{faq.answer}</Text>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Stack>
        </Container>

        {/* json+ld */}
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "When did Kedi commence business in Nigeria?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi Healthcare received CAC registration and NAFDAC approval in 2006 and began operations the same year."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Kedi a Nigerian company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi Healthcare Industries Nigeria Ltd is a wholly‑owned subsidiary of Kedi Healthcare Industries Co. (Hong Kong). Raw materials are imported from China; packaging is done locally by Fidson Healthcare PLC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I place an order?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can place an order by contacting our office through email, Whatsappp, or phone call, find more details in the contact us page."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of products does Kedi produce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi is a network‑marketing firm that offers nutritional supplements, herbal beverages, personal‑care items, and health‑diagnostic/therapy equipment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What type of diseases can Kedi products help with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As nutritional supplements, Kedi products may support management of diabetes, stroke, menopausal syndrome, infertility, hypertension, impotence, asthma, cancer, fibroids, and more; they are not positioned as pharmaceutical cures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I store KEDI products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The storage condition for KEDI products is stated on the product label and leaflet. It is advised to have a clean, conducive and safe storage facility and follow the storage conditions stated on the product label and leaflet to avoid any form of damage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Kedi products approved by NAFDAC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all Kedi products are registered and approved by NAFDAC, ensuring they meet the required safety and quality standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Kedi products be used alongside prescription medications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi products are nutritional supplements and can generally be used alongside prescription medications. However, it is advisable to consult your healthcare provider before combining them."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I become a Kedi distributor?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To become a Kedi distributor, you need to register with a one-time fee and purchase a starter pack. Visit our registration page for more details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the refund policy for Kedi products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi offers a refund or exchange policy for defective or damaged products. Ensure you retain your receipt and contact customer service for assistance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there any side effects of using Kedi products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi products are made from natural ingredients and are generally safe for use. However, individual reactions may vary, and it is recommended to follow the usage instructions provided."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I find Kedi training centers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kedi has training centers across Nigeria where you can learn about the business and products. Contact our support team for the nearest center to you."
                  }
                }
              ]
            })
          }}
        ></Script>
      </Box>

      {/* jsonld */}
      <Script
        id="category-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>
    </>
  );
}
