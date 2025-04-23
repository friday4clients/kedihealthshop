"use client"

import { Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCreative, EffectCards, Autoplay } from "swiper/modules";

const HeroCarousel = () => {

    return (

        <Swiper
            className="!h-full !w-full !px-12 !rounded-xl"
            effect={'cards'}
            grabCursor={true}
            autoplay={{
                delay: 1000,
                pauseOnMouseEnter:true
            }}
            cardsEffect={{
                rotate:false,
                perSlideOffset:20
            }}
            modules={[EffectCards, Autoplay]}
        >

            <SwiperSlide className="rounded-xl bg-black shadow-2xl">
                <Grid
                    templateColumns={"1fr 1fr"}
                    templateRows={"1fr 1fr"}
                    boxLines={"single"}
                    rounded="xl"
                    h="full"
                    overflow="hidden"
                >
                    <GridItem
                        bgSize="cover"
                        bgPos={"center"}
                        bgImg="url(/bg1.jpg)">
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <Stack
                            justifyContent={"start"}
                            alignItems={"center"}
                            h="full"
                            p={4}
                        >
                            <Image
                                src="product_1.png"
                                alt="product"
                                w="40%"
                            />
                            <p>
                                Hello World
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt eum, pariatur molestiae officiis veritatis? Repellendus unde inventore modi atque ullam quam labore quasi quaerat eligendi asperiores! Maiores, facilis eius!
                            </p>
                        </Stack>
                    </GridItem>
                    <GridItem
                        bgSize="contain"
                        bgPos={"center"}
                        bgImg="url(/bg2.jpg)">
                    </GridItem>
                </Grid>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-black shadow-2xl">
                <Grid
                    templateColumns={"1fr 1fr"}
                    templateRows={"1fr 1fr"}
                    boxLines={"single"}
                    rounded="xl"
                    h="full"
                    overflow="hidden"
                >
                    <GridItem
                        bgSize="cover"
                        bgPos={"center"}
                        bgImg="url(/bg1.jpg)">
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <Stack
                            justifyContent={"start"}
                            alignItems={"center"}
                            h="full"
                            p={4}
                        >
                            <Image
                                src="product_1.png"
                                alt="product"
                                w="40%"
                            />
                            <p>
                                Hello World
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt eum, pariatur molestiae officiis veritatis? Repellendus unde inventore modi atque ullam quam labore quasi quaerat eligendi asperiores! Maiores, facilis eius!
                            </p>
                        </Stack>
                    </GridItem>
                    <GridItem
                        bgSize="contain"
                        bgPos={"center"}
                        bgImg="url(/bg2.jpg)">
                    </GridItem>
                </Grid>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-black shadow-2xl">
                <Grid
                    templateColumns={"1fr 1fr"}
                    templateRows={"1fr 1fr"}
                    boxLines={"single"}
                    rounded="xl"
                    h="full"
                    overflow="hidden"
                >
                    <GridItem
                        bgSize="cover"
                        bgPos={"center"}
                        bgImg="url(/bg1.jpg)">
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <Stack
                            justifyContent={"start"}
                            alignItems={"center"}
                            h="full"
                            p={4}
                        >
                            <Image
                                src="product_1.png"
                                alt="product"
                                w="40%"
                            />
                            <p>
                                Hello World
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt eum, pariatur molestiae officiis veritatis? Repellendus unde inventore modi atque ullam quam labore quasi quaerat eligendi asperiores! Maiores, facilis eius!
                            </p>
                        </Stack>
                    </GridItem>
                    <GridItem
                        bgSize="contain"
                        bgPos={"center"}
                        bgImg="url(/bg2.jpg)">
                    </GridItem>
                </Grid>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-black shadow-2xl">
                <Grid
                    templateColumns={"1fr 1fr"}
                    templateRows={"1fr 1fr"}
                    boxLines={"single"}
                    rounded="xl"
                    h="full"
                    overflow="hidden"
                >
                    <GridItem
                        bgSize="cover"
                        bgPos={"center"}
                        bgImg="url(/bg1.jpg)">
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <Stack
                            justifyContent={"start"}
                            alignItems={"center"}
                            h="full"
                            p={4}
                        >
                            <Image
                                src="product_1.png"
                                alt="product"
                                w="40%"
                            />
                            <p>
                                Hello World
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt eum, pariatur molestiae officiis veritatis? Repellendus unde inventore modi atque ullam quam labore quasi quaerat eligendi asperiores! Maiores, facilis eius!
                            </p>
                        </Stack>
                    </GridItem>
                    <GridItem
                        bgSize="contain"
                        bgPos={"center"}
                        bgImg="url(/bg2.jpg)">
                    </GridItem>
                </Grid>
            </SwiperSlide>
        </Swiper>
    )
}


export default HeroCarousel;