"use client"

import { Box, Heading, Stack, HStack, RatingGroup, Image, Text, Highlight, Center, SimpleGrid } from "@chakra-ui/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const Testimonials = () => {
    return <Box bg="accent" spaceY={20} py={{ base: "20", md: "40" }}>
        <Heading
            as="h2"
            size={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            color="white"
            mb="12"
            w="80%"
            mx="auto"
        >
            <Highlight
                query="Our Customers"
                styles={{ bg: "black", transform: "skewX(-20deg)", display: "block", w: "fit", mx: "auto", px: "8" }}
            >
                What Our Customers Say
            </Highlight>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} px={{ base: "4", md: "20" }}>
            <video
                controls
                className="rounded-2xl shadow-lg bg-white/0 w-full h-48 aspect-[1/1]"
            >
                <source src="/video-testimonial-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                controls
                className="rounded-2xl shadow-lg bg-white/0 w-full h-48 aspect-[1/1]"
            >
                <source src="/video-testimonial-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} px={{ base: "4", md: "20" }}>
            <Image
                src="/testimonial-1.jpg"
                alt="Customer Testimonials"
                borderRadius="xl"
                boxShadow="lg"
                objectFit="cover"
                w="full"
                h={{ base: "200px", md: "100%" }}
            />
            <Image
                src="/testimonial-2.jpg"
                alt="Customer Testimonials"
                borderRadius="xl"
                boxShadow="lg"
                objectFit="cover"
                w="full"
                h={{ base: "200px", md: "100%" }}
            />
        </SimpleGrid>

        <Swiper
            slidesPerView={"auto"}
            className="!p-8"
            spaceBetween={20}
            grabCursor={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: true
            }}
            modules={[Autoplay, Pagination]}
        >
            {[
                {
                    name: "Adeola Adebayo",
                    feedback:
                        "Kedi products have improved my health significantly! The quality and affordability are perfect for my family.",
                    image: "https://i.pinimg.com/474x/9c/0d/40/9c0d404010a881370b1c503424e922de.jpg",
                    rating: 5,
                },
                {
                    name: "Chinedu Okafor",
                    feedback:
                        "Shopping here is always a pleasure. The customer service is outstanding, and the products are authentic.",
                    image: "https://i.pinimg.com/474x/8e/20/cc/8e20cc66fcd0984cadc5eb287bffd1e5.jpg",
                    rating: 4,
                },
                {
                    name: "Fatima Yusuf",
                    feedback:
                        "I highly recommend Kedicares! The variety of products and their effectiveness are truly remarkable.",
                    image: "https://i.pinimg.com/474x/b8/db/d1/b8dbd1af2fcb848b5c87a5d15894769f.jpg",
                    rating: 5,
                },
                {
                    name: "Ngozi Eze",
                    feedback:
                        "Kedicares has been a game-changer for me. Their products are reliable, and delivery is always on time.",
                    image: "https://i.pinimg.com/474x/4b/29/39/4b29390bddb0bf2788ab6b693e89e89b.jpg",
                    rating: 4,
                },
                {
                    name: "Tunde Alabi",
                    feedback:
                        "The health consultations provided by Kedicares helped me choose the right products for my needs. Highly satisfied!",
                    image: "https://i.pinimg.com/474x/0e/6e/14/0e6e141521bd89a3f6b4ad6801517f3b.jpg",
                    rating: 5,
                },
                {
                    name: "Aisha Bello",
                    feedback:
                        "I love the variety of products available. Kedicares truly understands the needs of their customers.",
                    image: "https://i.pinimg.com/474x/0e/6e/14/0e6e141521bd89a3f6b4ad6801517f3b.jpg",
                    rating: 5,
                },
            ].map((testimonial, index) => (
                <SwiperSlide
                    key={index}
                    className="!w-full !h-full md:!w-[25%]">
                    <Stack
                        key={index}
                        h="full"
                        borderWidth="sm"
                        borderColor="border"
                        rounded="xl"
                        bg="transparent"
                        textAlign="center"
                        gap="6"
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            boxSize="100px"
                            objectFit={"cover"}
                            objectPosition={"top"}
                            borderRadius="full"
                            mx="auto"
                            mb="4"
                        />
                        <Heading
                            color="white"
                            fontWeight="semibold"
                        >
                            {testimonial.name}
                        </Heading>

                        <Text color="blue.300"
                        >
                            {testimonial.feedback}
                        </Text>
                        <HStack justifyContent="center">
                            <RatingGroup.Root colorPalette={"yellow"} readOnly count={5} defaultValue={testimonial.rating} size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>
                        </HStack>
                    </Stack>
                </SwiperSlide>
            ))}
        </Swiper>

        <HStack justify={"center"}>
            <Box bg="white" rounded="lg" p="4" _hover={{ bg: "whiteAlpha.900" }} asChild>
                <Link target="_blank" href={"https://g.page/r/CWz5YWJpqlviEAI/review"}>Leave a Review</Link>
            </Box>
        </HStack>

    </Box>
}

export default Testimonials;