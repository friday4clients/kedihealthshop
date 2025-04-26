"use client"

import { Box, Button, CloseButton, Drawer, Float, FormatNumber, Heading, HStack, IconButton, Image, List, Portal, Separator, Stack } from "@chakra-ui/react"
import { BiCart } from "react-icons/bi"
import React, { createContext, useContext, useState, useTransition } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import CartItem from "./cart_item";
import Link from "next/link";

export type CartItemType = {
    id: string;
    title: string;
    price: number;
    quantity: number,
    img_url: string
};

type CartContextType = {
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (id: string) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItemType[]>([]);

    const addItem = (item: CartItemType) => {
        if (items.find(i => i.id.toString() === item.id.toString())) {
            const updatedItems = items.map(_ => {
                if (_.id.toString() === item.id.toString()) {
                    _.quantity += 1;
                    return _;
                } else {
                    return _;
                }
            });
            setItems(updatedItems);
            return
        } else {
            setItems((prevItems) => [...prevItems, item]);
        }
    };

    const updateItemQuantity = (id: string, quantity: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            )
        );
    };

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateItemQuantity }}>
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

    return <Drawer.Root size={{ md: "lg" }}>
        <Drawer.Trigger asChild>
            <IconButton rounded="lg" _active={{ bg: "accent", color: "white" }} _hover={{ color: "accent" }}>
                <BiCart />
                <Float placement="top-end" offsetX="1" offsetY="1">
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
                            <Heading fontSize="md" fontWeight="sm">Your Items</Heading>
                            <List.Root variant="plain" className="*:last:hidden">
                                {cart.items.map((item, index) => {
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
                        </Stack>
                    </Drawer.Body>
                    <Drawer.Footer justifyContent={"start"} w="full">
                        <Stack alignItems={"start"} mt="4" gap="4" w="full">
                            <Heading fontSize="lg" fontWeight="bold" w="full">
                                <HStack justifyContent={"space-between"} w="full">
                                    <Box>
                                        Total
                                    </Box>
                                    <FormatNumber value={cart.items.reduce((total, item) => total + item.price * item.quantity, 0)} currency="NGN" style="currency" />
                                </HStack>
                            </Heading>
                            <Drawer.ActionTrigger asChild>
                                <Link href="/checkout">
                                    <Button rounded="xl" fontWeight={"bold"} bg="accent" color="white">
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                            </Drawer.ActionTrigger>
                        </Stack>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton color="gray.900" _hover={{ bg: "gray.100" }} size="sm" />
                    </Drawer.CloseTrigger>
                </Drawer.Content>
            </Drawer.Positioner>
        </Portal>
    </Drawer.Root>
}

export default Cart;