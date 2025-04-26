"use client"

import { ProductType } from "@/lib/utils";
import { Button, FormatNumber, Heading, HStack, Image, RatingGroup, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Tooltip } from "./ui/tooltip";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";

export default function Product({ info }: { info: ProductType }) {
    const [loading, setLoading] = useState(true);

    return (
        <Stack
            p="4"
            bg="white"
            gap="3"
            shadow="0 0 15px #eee"
            _active={{}}
            rounded="xl">
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.id}`} passHref>
                <Skeleton rounded="lg" loading={loading}>
                    <HStack
                        rounded="lg"
                        justifyContent={"center"}
                        alignItems={"center"}
                        p="4"
                        bg="gray.100"
                    >
                        <Image
                            onLoad={() => setLoading(false)}
                            alt={info!.title}
                            src={info!.imageUrls![0]}
                            w="fit"
                            objectFit="contain" />
                    </HStack>
                </Skeleton>
            </Link>
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.id}`} passHref>
                <RatingGroup.Root colorPalette={"yellow"} readOnly count={5} defaultValue={3} size="sm">
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                </RatingGroup.Root>
            </Link>
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.id}`} passHref>
                <Stack>
                    <Heading lineClamp={"1"}>{info!.title}</Heading>
                    <Tooltip content={info!.description} openDelay={100} contentProps={{ p: "4", color: "gray.emphasized", rounded: "xl" }}>
                        <Text lineClamp={"1"}>{info!.description}</Text>
                    </Tooltip>
                    <Heading color="gray.emphasized" size="lg">
                        <FormatNumber value={info?.price} currency="NGN" style="currency" />
                    </Heading>
                </Stack>
            </Link>
            <Button
                bg='blue.100'
                color="accent"
                _hover={{ bg: "accent", color: "white" }}
                fontWeight={"bold"}
                transition={"all 500ms"}
                _active={{ scale: "0.98" }}
                rounded="lg">
                <LuPlus />
                Add To Cart
            </Button>
        </Stack>
    )
}