"use client"

import { useCallback, useTransition } from "react";
import { CartItemType, useCart } from "./cart"
import { HStack, List, Stack, Heading, FormatNumber, Separator, Button, Image, Box } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";


export default function CartItem({ item }: { item: CartItemType }) {
    const cart = useCart();
    const [isDecreasing, startDecreaseTransition] = useTransition();
    const [isIncreasing, startIncreaseTransition] = useTransition();
    const [isRemoving, startRemoveTransition] = useTransition();

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

    const removeItem = useCallback(() => {
        startRemoveTransition(() => {
            cart.removeItem(item.id.toString())
        });
    }, [item.quantity]);

    return (
        <HStack alignItems={"start"} w="full">
            <List.Indicator
                rounded="lg"
                bg="gray.100"
                display={"flex"}
                h="full"
                py="3"
                justifyContent={"center"}
                alignItems={"center"}
                asChild>
                <Image
                    src={item.img_url}
                    alt={item.title}
                    w="32"
                    h="fit"
                />
            </List.Indicator>
            <Stack gap="2" w="full">
                <Heading lineClamp={"1"} size="sm">{item?.title}</Heading>
                <Heading color="gray.emphasized" size="xs">
                    <FormatNumber value={item?.price * item.quantity} currency="NGN" style="currency" />
                    <Box display={item.quantity > 1 ? "block" : "none"} color="gray.300" fontSize={"xs"}>
                        (
                        <FormatNumber value={item?.price} currency="NGN" style="currency" />
                        &nbsp;*&nbsp;{item.quantity}
                        )
                    </Box>
                </Heading>
                <Heading color="gray.emphasized" size="xs">Quantity:&nbsp;{item?.quantity}</Heading>

                <Separator borderColor={"gray.100"} />
                <Stack
                    // gap=""
                    justifyContent={"start"}
                    alignItems={{ base: "start", md: "center" }}
                    flexDir={{ base: "column", md: "row" }}>
                    <HStack gap={4}>
                        <Button
                            disabled={item.quantity == 1}
                            bg="blue.100"
                            size="xs"
                            transition={"all 500ms"}
                            _active={{ scale: "0.8" }}
                            loading={isDecreasing}
                            onClick={decreaseQuantity}
                        >
                            <LuMinus />
                        </Button>
                        <Heading>{item.quantity}</Heading>
                        <Button
                            bg="blue.100"
                            size="xs"
                            transition={"all 500ms"}
                            loading={isIncreasing}
                            onClick={increaseQuantity}
                            _active={{ scale: "0.8" }}
                        >
                            <LuPlus />
                        </Button>
                    </HStack>
                    <Button
                        w="fit"
                        px="4"
                        size="xs"
                        bg='red'
                        color="white"
                        _hover={{ bg: "blue.muted", color: "white" }}
                        fontWeight={"bold"}
                        transition={"all 500ms"}
                        loading={isRemoving}
                        onClick={removeItem}
                        _active={{ scale: "0.98" }}
                        rounded="lg">
                        <LuMinus />
                        Remove Item
                    </Button>
                </Stack>
            </Stack>
        </HStack>
    )

}