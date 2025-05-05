"use client"

import { ProductType } from "@/lib/utils";
import { Button, FormatNumber, Heading, HStack, Image, RatingGroup, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useTransition } from "react";
import { Tooltip } from "./ui/tooltip";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import { useCart } from "./cart";
import Script from "next/script";

export default function Product({ info, imgH }: { info: ProductType, imgH?: string }) {
    const cart = useCart();
    const [isPending, startTransition] = useTransition();

    const productJsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": info?.title,
        "image": info?.img_url,
        "description": info?.description,
        "sku": info?.product_id,
        "brand": {
            "@type": "Brand",
            "name": process.env.NEXT_PUBLIC_SITE_NAME
        },
        "offers": {
            "@type": "Offer",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info.product_id}`,
            "priceCurrency": "NGN",
            "price": info?.price,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": process.env.NEXT_PUBLIC_SITE_NAME
            }
        }
    };

    return (
        <Stack
            p="4"
            bg="white"
            gap="3"
            shadow="0 0 15px #eee"
            border="sm"
            borderColor="transparent"
            _active={{ shadow: "none", transform: "scale(0.98)" }}
            _hover={{ borderColor: "gray.200" }}
            rounded="xl">
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.product_id}`} passHref>
                <HStack
                    rounded="lg"
                    justifyContent={"center"}
                    alignItems={"center"}
                    p="4"
                    h={imgH || "64"}
                    bg="gray.100"
                >
                    <Image
                        alt={`${info!.title} Kedi Healthcare product | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
                        src={info?.img_url}
                        transition={"transform"}
                        transitionDuration={"300ms"}
                        _hover={{ transform: "scale(1.1)" }}
                        w="fit"
                        h="full"
                        objectFit="contain" />
                </HStack>
            </Link>
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.product_id}`} passHref>
                <RatingGroup.Root colorPalette={"yellow"} readOnly count={5} defaultValue={3} size="sm">
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                </RatingGroup.Root>
            </Link>
            <Link href={`/${info.category.replaceAll(" ", "_")}/${info.title.replaceAll(" ", "_")}?product_id=${info?.product_id}`} passHref>
                <Stack>
                    <Heading lineClamp={"1"}>{info!.title}</Heading>
                    <Tooltip content={info!.description} openDelay={100} contentProps={{ p: "4", color: "gray.emphasized", rounded: "xl" }}>
                        <Text fontSize={"sm"} lineClamp={"2"}>{info!.description}</Text>
                    </Tooltip>
                    <Heading color="accent" size="sm">
                        {!isNaN(Number(info?.price)) ? <FormatNumber value={Number(info?.price)} currency="NGN" style="currency" /> : info?.price}
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
                loading={isPending}
                loadingText="Adding"
                onClick={() => {
                    startTransition(() => {
                        cart.addItem({
                            product_id: info?.product_id.toString(),
                            title: info?.title,
                            price: Number(info?.price),
                            quantity: 1,
                            img_url: info?.img_url
                        });
                    });
                }}
                rounded="lg">
                <LuPlus />
                Add To Cart
            </Button>

            {/* jsonld */}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            ></Script>
        </Stack>
    )
}
