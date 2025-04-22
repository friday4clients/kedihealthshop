import { Button, Container, Heading, Image, Text, Icon, Box, Grid, GridItem, HStack, Highlight, Stat, Separator, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { getCategories, getStore } from "@/lib/utils";
import { getProducts } from "@/lib/utils";
import { LuArrowRight } from "react-icons/lu";

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
            display={{ base: "none", md: "block" }}
            h="full">
            <Grid
              templateColumns={"1fr 1fr"}
              templateRows={"1fr 1fr"}
              boxLines={"single"}
              rounded="2xl"
              h="full"
              overflow="hidden"
            >
              <GridItem
                bgSize="cover"
                bgRepeat={"no-repeat"}
                colSpan={2}
                bgImg="url(/lady_pointing_down.jpg)">

              </GridItem>
              <GridItem>
                {/* {store[categories[0]]?.slice(0, 2).map((product) => (
                <Box
                  key={product.id}
                  p="4"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg="gray.50"
                >
                  <Image
                    src={product.imageUrls?.[0]}
                    alt={product.title}
                    w="full"
                    h="150px"
                    objectFit="cover"
                    mb="4"
                  />
                  <Heading as="h3" size="md" mb="2">
                    {product.title}
                  </Heading>
                  <Text color="gray.600" mb="4">
                    {product.description}
                  </Text>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    size="sm"
                  >
                    View Details
                  </Button>
                </Box>
              ))} */}
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>

      {/* Featured Categories Section */}
      <Box py="12">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size="3xl"
            fontWeight={"bold"}
            w="2/3"
            fontFamily={"merriweather"}
            mx="auto"
            mb="8"
            textAlign="center">
            Explore Our Categories
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap="6"
          >
            {categories.map((category, index) => (
              <Stack
                key={index}
                p="6"
                borderWidth="sm"
                borderColor={"border"}
                borderRadius="lg"
                bg="white"
                shadow="xs"
              >
                <Box mb="4" boxSize={"10"} fill="accent">
                  <ImmuneWellnessIcon />
                </Box>
                <Heading
                  as="h3"
                  size="lg"
                  fontWeight={"semibold"}
                  mb="2">
                  {category}
                </Heading>
                <Button
                  variant="outline"
                  color="accent"
                  size="lg"
                  w="fit"
                >
                  View Products
                  <LuArrowRight />
                </Button>
              </Stack>
            ))}
          </Grid>
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