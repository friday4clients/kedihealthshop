"use client"

import cart, { useCart } from "@/components/cart";
import { ProductType } from "@/lib/utils";
import { HStack, Button, Heading } from "@chakra-ui/react";
import { info } from "console";
import { startTransition, useCallback, useEffect, useState, useTransition } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function ProductActions({ product }: { product: ProductType }) {
    const cart = useCart();
    const [isPending, startTransition] = useTransition();
    const [isDecreasing, startDecreaseTransition] = useTransition();
    const [isIncreasing, startIncreaseTransition] = useTransition();

    const [exist, setExist] = useState(false);
    const [item, setItem] = useState(
        {
            id: product?.id.toString(),
            title: product?.title,
            price: product?.price,
            quantity: 1,
            img_url: product?.imageUrls?.[0]!
        }
    );

    const decreaseQuantity = useCallback(() => {
        startDecreaseTransition(() => {
            cart.updateItemQuantity(item.id.toString(), item.quantity === 1 ? 0 : -1);
        });
    }, [item.quantity]);

    const increaseQuantity = useCallback(() => {
        startIncreaseTransition(() => {
            cart.updateItemQuantity(item.id.toString(), 1);
        });
    }, [item.quantity]);

    useEffect(() => {
        const inCart = cart.items.find((_) => _.id.toString() === item.id.toString());
        if (!inCart) {
            setExist(false);
        } else {
            setItem(inCart);
            setExist(true);
        }
    }, [cart.items]);


    return (
        <HStack
            gap="4"
            justifyContent={"start"}
            alignItems={{ base: "start", md: "center" }}
            flexDir={{ base: "column", md: "row" }}>
            <HStack gap={4}>
                <Button
                    disabled={!exist || item.quantity === 1}
                    onClick={decreaseQuantity}
                    loading={isDecreasing}
                    bg="blue.100"
                    size="sm"
                    transition={"all 500ms"}
                    _active={{ scale: "0.8" }}
                >
                    <LuMinus />
                </Button>
                <Heading>{item.quantity}</Heading>
                <Button
                    disabled={!exist}
                    onClick={increaseQuantity}
                    bg="blue.100"
                    size="sm"
                    loading={isIncreasing}
                    transition={"all 500ms"}
                    _active={{ scale: "0.8" }}
                >
                    <LuPlus />
                </Button>
            </HStack>
            <Button
                w="fit"
                px="4"
                size="lg"
                bg='accent'
                color="white"
                _hover={{ bg: "blue.muted", color: "white" }}
                fontWeight={"bold"}
                transition={"all 500ms"}
                _active={{ scale: "0.98" }}
                loading={isPending}
                onClick={() => {
                    startTransition(() => {
                        cart.addItem(item);
                    });
                }}
                rounded="lg">
                <LuPlus />
                Add To Cart
            </Button>
        </HStack>
    )
}