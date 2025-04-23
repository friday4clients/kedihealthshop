import { Button, Container, Heading, Image, Text, Icon, Box, Grid, GridItem, HStack, Highlight, Stat, Separator, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { getCategories, getStore } from "@/lib/utils";
import { getProducts } from "@/lib/utils";
import { LuArrowRight } from "react-icons/lu";
import HeroCarousel from "@/components/hero_carousel";
import { BiBadgeCheck, BiSolidBadge, BiSupport } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";



export default async function Home() {

  const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();
  const store: Awaited<ReturnType<typeof getStore>> = await getStore();

  return (
    <>
      {/* // hero section */}
      <Box
        bg="white"
        h={{ base: "calc(100vh - 55px)", md: "vh" }}
        p="2">
        <Grid
          gap="4"
          h="full"
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <GridItem
            pt="2"
            h="full"
            px={{ base: "4", md: "12" }}>

            {/* nav links */}
            <HStack
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              gap="12">
              <Image src="/logo.png" alt="kedicares logo" w="20" />

              <HStack gap="4">
                <Link href="/">
                  Home
                </Link>
                <Link href="/about">
                  Category
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
              </HStack>
            </HStack>

            <Box mt="8">
              <Heading
                as="h1"
                size="5xl"
                fontWeight={"black"}
                fontFamily={"merriweather"}
                mb="6">
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
                  Your Number One Store For Affordable Kedi Products
                </Highlight>
              </Heading>
              <HStack gap="4">
                <Button
                  variant={"solid"}
                  color="white"
                  bg="accent"
                  _hover={{ bg: "blue.muted" }}
                  size="lg">
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  color="accent"
                  _hover={{ bg: "blue.50" }}
                  borderColor="accent"
                  size="lg">
                  Learn More
                </Button>
              </HStack>

              <HStack
                w="fit"
                mt="12"
                h="20"
                gap="6"
                border="sm"
                borderColor="gray.200"
                p="6"
                py="12"
                rounded="lg"
                overflow={"hidden"}
                justifyContent={"start"}>
                <Stat.Root>
                  <Stat.Label>Products Sold</Stat.Label>
                  <Stat.ValueText
                    textStyle="3xl"
                    fontWeight={"black"}
                    color="accent">500</Stat.ValueText>
                </Stat.Root>
                <Separator
                  h="vh"
                  borderColor="gray.200"
                  orientation={"vertical"} />
                <Stat.Root w="fit">
                  <Stat.Label>Monthly&nbsp;Visitors</Stat.Label>
                  <Stat.ValueText
                    textStyle="3xl"
                    fontWeight={"black"}
                    color="accent"
                  >200</Stat.ValueText>
                </Stat.Root>
              </HStack>
            </Box>

          </GridItem>

          {/* col 2 */}
          <GridItem
            maxW={"full"}
            rounded="xl"
            h="full"
            overflow={"hidden"}
            display={{ base: "none", md: "block" }}>
            <Stack
              h="full"
              justifyContent={"center"}
              alignItems={"center"}
              rounded="xl"
            >

              <HeroCarousel />
            </Stack>
          </GridItem>
        </Grid>
      </Box>

      {/* Featured Categories Section */}
      <Box py="32">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size={{ base: "3xl", md: "5xl" }}
            fontWeight={"bold"}
            w="2/3"
            mx="auto"
            mb="8"
            fontFamily={"merriweather"}
            textAlign="center">
            Explore Our Categories
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap="0"
            className="md:*:nth-[odd]:!border-r *:nth-[3]:!border-b *:md:nth-[3]:!border-0 *:nth-[1]:!border-b *:nth-[2]:!border-b !rounded-xl !overflow-hidden"
          >
            {categories.slice(0, 4).map((category, index) => (
              <Stack
                key={index}
                p={{ base: "8", md: "12" }}
                borderColor={"gray.200"}
                // borderRadius="lg"
                bg="white"
                // shadow="0 0 15px {colors.gray.100}"
                gap="3"
              >
                <Heading
                  as="h3"
                  size="2xl"
                  w={{ base: "70%", md: "1/2" }}
                  fontWeight={"semibold"}>
                  {category}
                </Heading>
                <Text>
                  Discover a wide range of products in the {category} category, carefully curated to meet your needs and preferences.
                </Text>
                <Heading
                  size="sm"
                >Products</Heading>

                <Grid templateColumns="repeat(2, 1fr)" gap="4">
                  {store[category]?.slice(0, 2).map((product) => (
                    <Link href={`/${category.replaceAll(" ", "_")}/${product.title.replaceAll(" ", "_")}?product_id=${encodeURIComponent(product.id)}`}>
                      <Stack
                        key={product.id}
                        p="4"
                        border="sm"
                        borderColor="gray.100"
                        borderRadius="lg"
                        overflow="hidden"
                        h="full"
                        bg="gray.50"
                      >
                        <Image
                          src={product.imageUrls?.[0]}
                          alt={product.title}
                          w="1/2"
                          display={"block"}
                          mx="auto"
                          objectFit="contain"
                          mb="2"
                        />
                        <Text fontWeight="semibold" fontSize="sm">
                          {product.title}
                        </Text>
                      </Stack>
                    </Link>
                  ))}
                </Grid>
                <Button
                  variant="solid"
                  color="accent"
                  bg="blue.50"
                  size="sm"
                  w="fit"
                  className="group"
                  mt="4"
                  asChild
                >
                  <Link href={`/${category.replaceAll(" ", "_")}`}>
                    View All Products
                    <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
                  </Link>
                </Button>
              </Stack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py="32">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            mb="8"
          >
            Why Choose Us
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="6"
            className="*:nth-[odd]:!translate-y-12"
          >
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
                p="6"
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
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py="12" bg="white">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            mb="8"
          >
            Our Services
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="6"
          >
            {[
              {
                title: "Home Delivery",
                description:
                  "Enjoy the convenience of having your favorite Kedi products delivered right to your doorstep.",
                icon: "/delivery_icon.svg",
              },
              {
                title: "In-Store Purchase",
                description:
                  "Visit our store to explore a wide range of products and get personalized assistance.",
                icon: "/instore_icon.svg",
              },
              {
                title: "Health Consultations",
                description:
                  "Get expert advice and consultations to choose the best products for your health needs.",
                icon: "/consultation_icon.svg",
              },
            ].map((service, index) => (
              <Stack
                key={index}
                p="6"
                borderWidth="sm"
                borderColor="border"
                borderRadius="lg"
                bg="white"
                shadow="xs"
                textAlign="center"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  boxSize="50px"
                  mx="auto"
                  mb="4"
                />
                <Heading as="h3" size="lg" fontWeight="semibold" mb="2">
                  {service.title}
                </Heading>
                <Text color="gray.600">{service.description}</Text>
              </Stack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py="12" bg="blue.100">
        <Container maxW="6xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            alignItems="center"
            gap="6"
          >
            <Box>
              <Heading
                as="h2"
                size="3xl"
                fontWeight="bold"
                fontFamily="merriweather"
                mb="4"
              >
                Ready to Transform Your Health?
              </Heading>
              <Text color="gray.700" mb="6">
                Discover the benefits of Kedi products today. Join thousands of satisfied customers who trust Kedicares for their wellness journey.
              </Text>
              <Button
                variant="solid"
                color="white"
                bg="accent"
                _hover={{ bg: "blue.muted" }}
                size="lg"
              >
                Get Started
              </Button>
            </Box>
            <Image
              src="/call_to_action_image.jpg"
              alt="Call to Action"
              borderRadius="lg"
              shadow="md"
            />
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py="12" bg="white">
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
            {[
              {
                question: "What are Kedi products?",
                answer:
                  "Kedi products are high-quality health and wellness products designed to improve your overall well-being.",
              },
              {
                question: "How can I place an order?",
                answer:
                  "You can place an order directly on our website or contact our support team for assistance.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Yes, we offer international shipping to many countries. Please check our shipping policy for more details.",
              },
            ].map((faq, index) => (
              <Box key={index}>
                <Heading as="h3" size="md" mb="2">
                  {faq.question}
                </Heading>
                <Text color="gray.600">{faq.answer}</Text>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.50" py="12">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            mb="8"
          >
            What Our Customers Say
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="6"
          >
            {[
              {
                name: "Jane Doe",
                feedback:
                  "Kedi products have changed my life! The quality and affordability are unmatched.",
                image: "/customer1.jpg",
              },
              {
                name: "John Smith",
                feedback:
                  "I love shopping here. The customer service is excellent, and the products are top-notch.",
                image: "/customer2.jpg",
              },
              {
                name: "Emily Johnson",
                feedback:
                  "Highly recommend! The variety of products and the prices are amazing.",
                image: "/customer3.jpg",
              },
            ].map((testimonial, index) => (
              <Stack
                key={index}
                p="6"
                borderWidth="sm"
                borderColor="border"
                borderRadius="lg"
                bg="white"
                shadow="xs"
                textAlign="center"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  boxSize="100px"
                  borderRadius="full"
                  mx="auto"
                  mb="4"
                />
                <Text fontWeight="semibold" mb="2">
                  {testimonial.name}
                </Text>
                <Text color="gray.600">{testimonial.feedback}</Text>
              </Stack>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box bg="blue.50" py="12">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            mb="6"
          >
            Stay Updated
          </Heading>
          <Text textAlign="center" mb="8" color="gray.600">
            Subscribe to our newsletter to receive the latest updates and offers.
          </Text>
          <HStack
            as="form"
            maxW="lg"
            mx="auto"
            gap="4"
          >
            <Box flex="1">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #CBD5E0",
                  outline: "none",
                }}
                required
              />
            </Box>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              px="8"
              bg="accent"
              _hover={{ bg: "blue.muted" }}
            >
              Subscribe
            </Button>
          </HStack>
        </Container>
      </Box>


    </>
  );
}

const ImmuneWellnessIcon = () => {
  return (
    <svg
      fill="accent"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M27.42,10.57A1.66,1.66,0,0,0,26.17,10h0a1.66,1.66,0,0,0-1.25.56c-11.76,13.39-5,24,0,29.07a1.66,1.66,0,0,0,1.19.49h0a1.77,1.77,0,0,0,1.24-.54C32.3,34.48,38.83,23.93,27.42,10.57Z"></path>
        <path d="M15.66,28.3C13,26.79,9.37,25.92,4.56,26.24a1.27,1.27,0,0,0-1,.53h0a1.34,1.34,0,0,0-.24,1.08c3,14,13,14.75,18.77,13.94a1.35,1.35,0,0,0,.64-.3A23.14,23.14,0,0,1,15.66,28.3Z"></path>
        <path d="M36.34,28.3c2.69-1.51,6.29-2.38,11.1-2.06a1.27,1.27,0,0,1,1,.53h0a1.34,1.34,0,0,1,.24,1.08c-3,14-13,14.75-18.77,13.94a1.35,1.35,0,0,1-.64-.3A23.14,23.14,0,0,0,36.34,28.3Z"></path>
        <path d="M15.38,25c.32-4.56,1.2-6.62,1.61-7.35a22.71,22.71,0,0,0-6.43-3.46,1.28,1.28,0,0,0-1.08.09h0a1.34,1.34,0,0,0-.64.88,21.65,21.65,0,0,0-.25,8.41A22.93,22.93,0,0,1,15.38,25Z"></path>
        <path d="M43.31,15.13a1.29,1.29,0,0,0-.64-.88h0a1.28,1.28,0,0,0-1.08-.09,22.79,22.79,0,0,0-6.42,3.46c.4.73,1.29,2.79,1.6,7.35a22.93,22.93,0,0,1,6.8-1.43A21.27,21.27,0,0,0,43.31,15.13Z"></path>
      </g>
    </svg>
  );
};