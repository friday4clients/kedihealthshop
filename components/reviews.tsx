"use client"

import { Box, Heading, Stack, HStack, RatingGroup, Image, Text, Highlight } from "@chakra-ui/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
    return <Box bg="accent" my="10" py={{ base: "10", md: "10" }} rounded="xl">
        <Heading
            as="h2"
            size={{ base: "3xl", md: "3xl" }}
            fontWeight="bold"
            fontFamily="merriweather"
            textAlign="center"
            color="white"
            mb="12"
            w="80%"
            mx="auto"
        >
            Reviews From Customers
        </Heading>
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
            ].map((review, index) => (
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
                            src={review.image}
                            alt={review.name}
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
                            {review.name}
                        </Heading>

                        <Text color="blue.300"
                        >
                            {review.feedback}
                        </Text>
                        <HStack justifyContent="center">
                            <RatingGroup.Root readOnly count={5} defaultValue={review.rating} size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>
                        </HStack>
                    </Stack>
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
}

export default Reviews;