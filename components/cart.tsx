"use client"

import { Box, Button, CloseButton, Drawer, EmptyState, Float, FormatNumber, Heading, HStack, IconButton, List, Portal, Separator, Show, Stack } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LuArrowRight, LuShoppingCart } from "react-icons/lu";
import CartItem from "./cart_item";
import Link from "next/link";

export type CartItemType = {
    product_id: string;
    title: string;
    price: number | string;
    quantity: number,
    img_url: string
};

type CartContextType = {
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (id: string) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItemType[]>([]);


    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(items));
    // }, [items]);

    const addItem = (item: CartItemType) => {
        if (items.find(i => i.product_id === item.product_id)) {
            const updatedItems = items.map(_ => {
                if (_.product_id === item.product_id) {
                    _.quantity += 1;
                    return _;
                } else {
                    return _;
                }
            });
            setItems(updatedItems);
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return
        } else {
            setItems((prevItems) => {
                localStorage.setItem("cart", JSON.stringify([item, ...prevItems]));
                return [item, ...prevItems]
            })
        }
    };

    const updateItemQuantity = (id: string, quantity: number) => {
        setItems((prevItems) => {
            const i = prevItems.map((item) => (
                item.product_id === id ? { ...item, quantity: item.quantity + quantity } : item
            ));

            localStorage.setItem("cart", JSON.stringify(i));
            return i;
        });
    };

    const removeItem = (id: string) => {
        setItems((prevItems) => (localStorage.setItem("cart", JSON.stringify(prevItems.filter((item) => item.product_id !== id))), prevItems.filter((item) => item.product_id !== id)));
    };

    const clearCart = () => {
        setItems([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateItemQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

const Cart = () => {
    const cart = useCart();

    return <Drawer.Root size={{ md: "md" }}>
        <Drawer.Trigger asChild>
            <IconButton bg="white" color="black" rounded="lg" _active={{ bg: "accent", color: "white" }} _hover={{ bg: "accent", color: "white" }}>
                <BiCart />
                <Float bg="accent" color={"white"} border="xs" borderColor="white" rounded="full" boxSize={"6"} placement="top-end" offsetX="1" offsetY="1">
                    {cart.items.length}
                </Float>
            </IconButton>
        </Drawer.Trigger>
        <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
                <Drawer.Content bg="white">
                    <Drawer.Header>
                        <Drawer.Title>Cart</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Stack gap="4">
                            <Show when={!cart.items.length}>
                                <EmptyState.Root>
                                    <EmptyState.Content>
                                        <EmptyState.Indicator>
                                            <LuShoppingCart />
                                        </EmptyState.Indicator>
                                        <Stack textAlign="center">
                                            <EmptyState.Title>Your cart is empty</EmptyState.Title>
                                            <EmptyState.Description>
                                                Explore our products and add items to your cart
                                            </EmptyState.Description>
                                        </Stack>
                                        <Drawer.ActionTrigger asChild>
                                            <Button fontWeight={"bold"} bg="accent" color="white" size="lg" transition={"all 500ms"} _active={{ transform: "scale(0.9)" }} rounded="xl" _hover={{ bg: "blue.muted" }} asChild>
                                                <Link href={`/Immune_&_General_Wellness`}>
                                                    Visit Shop
                                                </Link>
                                            </Button>
                                        </Drawer.ActionTrigger>
                                    </EmptyState.Content>
                                </EmptyState.Root>
                            </Show>

                            <Show when={cart.items.length}>
                                <Heading fontSize="md" fontWeight="sm">Your Items&nbsp; {cart?.items?.length}</Heading>
                                <List.Root variant="plain" className="*:last:hidden">
                                    {cart?.items?.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <List.Item >
                                                    <CartItem item={item} />
                                                </List.Item>
                                                <Separator borderColor="gray.100" my="4" />
                                            </React.Fragment>
                                        );
                                    })}
                                </List.Root>
                            </Show>
                        </Stack>
                    </Drawer.Body>
                    <Drawer.Footer justifyContent={"start"} w="full">
                        <Show when={cart.items.length}>
                            <Stack alignItems={"start"} mt="4" gap="4" w="full">
                                <Heading fontSize="lg" fontWeight="bold" w="full">
                                    <HStack justifyContent={"space-between"} w="full">
                                        <Box>
                                            Total
                                        </Box>
                                        <FormatNumber value={cart.items.reduce((total, item) => !isNaN(Number(item.price)) ? total + Number(item.price) * item.quantity : total, 0)} currency="NGN" style="currency" />
                                    </HStack>
                                </Heading>
                                <HStack>
                                    <Drawer.ActionTrigger asChild>
                                        <Link href="/checkout">
                                            <Button rounded="xl" fontWeight={"bold"} bg="accent" 
                                                _hover={{ bg: "blue.muted", color: "accent", _dark: { color: "white" } }}
                                            color="white">
                                                Proceed to Checkout
                                                <LuArrowRight />
                                            </Button>
                                        </Link>
                                    </Drawer.ActionTrigger>
                                    <Button
                                        variant="ghost"
                                        _hover={{bg:"red.50"}}
                                        onClick={() => cart.clearCart()}
                                        rounded="xl"
                                        fontWeight={"bold"}
                                        color="red">
                                        Empty Cart
                                    </Button>
                                </HStack>

                            </Stack>
                        </Show>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton color="gray.900" _active={{ bg: "gray.100" }} _hover={{ bg: "gray.100" }} size="sm" />
                    </Drawer.CloseTrigger>
                </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
    </Drawer.Root >
}

export default Cart;