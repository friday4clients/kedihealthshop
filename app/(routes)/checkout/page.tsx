"use client"

import { Box, Button, ButtonGroup, Container, EmptyState, Field, FormatNumber, Grid, GridItem, Group, Heading, HStack, Input, InputGroup, List, Separator, Show, Stack, Text, Textarea } from '@chakra-ui/react';
import { getProducts, getProductById, getCategories } from '@/lib/utils';
import { useCart } from '@/components/cart';
import React, { useEffect, useState } from 'react';
import CartItem from '@/components/cart_item';
import { LuMail, LuPhoneCall, LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Form from "next/form";

const CheckoutPage = () => {
    const [categories, setCategories] = useState<string[]>(["Immune & General Wellness"]);
    // const []
    const isLoggedIn = true;
    const cart = useCart();
    const retailerDetails = {
        name: process.env.NEXT_PUBLIC_VENDOR_NAME,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: "07068453179",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    };
    useEffect(() => {
        (async () => {
            setCategories(await getCategories());
        })()
    }, [])

    // const prepareCartForWhatsApp = () => {
    //     if (!cart.items.length) return "";

    //     const cartMarkdown = cart.items
    //         .map(
    //             (item, index) =>
    //                 `${index + 1}. *${item.title}*:
    // Price: NGN ${item.price.toLocaleString()}
    // Quantity: ${item.quantity}
    //             `
    //         )
    //         .join("\n");

    //     const total = cart.items.reduce(
    //         (sum, item) => sum + item.price * item.quantity,
    //         0
    //     );

    //     return `*New Order From :*\n\n ${cartMarkdown}\n\n*Total:* NGN ${total.toLocaleString()}`;
    // };

    const getBillingDetails = () => {
        const fullName = (document.querySelector('input[name="full_name"]') as HTMLInputElement)?.value || "N/A";
        const phoneNumber = (document.querySelector('input[name="tel"]') as HTMLInputElement)?.value || "N/A";
        const billingAddress = (document.querySelector('textarea[name="address"]') as HTMLTextAreaElement)?.value || "N/A";

        return { fullName, phoneNumber, billingAddress };
    };

    const prepareCartForWhatsApp = () => {
        if (!cart.items.length) return "";

        const { fullName, phoneNumber, billingAddress } = getBillingDetails();

        const cartMarkdown = cart.items
            .map(
                (item, index) =>
                    `${index + 1}. *${item.title}*:
    Price: NGN ${item.price.toLocaleString()}
    Quantity: ${item.quantity}`
            )
            .join("\n");

        const total = cart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        return `*New Order:*\n\n*Full Name:* ${fullName}\n*Phone Number:* ${phoneNumber}\n*Billing Address:* ${billingAddress}\n\n *Items*:\n*${cartMarkdown}\n\n*Total:* NGN ${total.toLocaleString()}`;
    };
    const shareCartToWhatsApp = () => {
        const message = prepareCartForWhatsApp();
        if (message) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_URL}&text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
        }
    };

    const shareCartToEmail = () => {
        const message = prepareCartForWhatsApp();
        if (message) {
            const emailMessage = message
                .replace(/\*/g, "") // Remove markdown asterisks
                .replace(/\n/g, "%0D%0A"); // Replace newlines with email line breaks
            const mailtoUrl = `mailto:${retailerDetails.email}?subject=New Order&body=${emailMessage}`;
            window.open(mailtoUrl, "_blank");
        }
    };

    return (
        <Container maxW="6xl" py="12" pt={{ base: "6" }}>
            <Grid
                templateColumns={{ md: "1fr 1fr" }}
                gap="8"
                position={"relative"}
            >
                <GridItem
                    rounded="xl"
                    bg="white"
                    shadow={"0 0 15px {colors.gray.100}"}
                    p="6"
                >
                    <Stack gap="4" position={"relative"}>
                        <HStack justifyContent={"space-between"} bg="white" position={"sticky"} top="88px">
                            <Heading>Your Cart</Heading>
                            <Heading size="sm" color="gray.500">{cart.items.length} Items</Heading>
                        </HStack>

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
                                <Button fontWeight={"bold"} bg="accent" color="white" size="lg" transition={"all 500ms"} _active={{ transform: "scale(0.9)" }} rounded="xl" _hover={{ bg: "blue.muted" }} asChild>
                                    <Link href={`/${categories?.[0]?.replaceAll(" ", "_")}`}>
                                        Visit Shop
                                    </Link>
                                </Button>
                            </EmptyState.Content>
                        </EmptyState.Root>
                    </Show>
                </GridItem>
                <GridItem
                    position={"sticky"}
                    top="88px"
                    h="fit"
                    rounded="xl"
                    bg="white"
                    shadow={"0 0 15px {colors.gray.100}"}
                    p="6"
                >
                    <Heading mb="4" size="md">Billing Information</Heading>
                    <Form action={() => { }}>
                        <Stack gap="4">
                            <Group>
                                <Field.Root required>
                                    <Field.Label>Full Name</Field.Label>
                                    <Input variant={"subtle"} bg="gray.100" name="full_name" placeholder="Enter your full name" />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label>Phone Number</Field.Label>
                                    <Input type="tel" variant={"subtle"} bg="gray.100" inputMode='decimal' name="tel" placeholder="+2340000000000" />
                                </Field.Root>
                            </Group>
                            <Field.Root required>
                                <Field.Label>Billing Address</Field.Label>
                                <Textarea variant={"subtle"} bg="gray.100" name="address">
                                </Textarea>
                            </Field.Root>
                        </Stack>
                    </Form>
                    <Separator my="10" borderColor="gray.100" />
                    <Stack>
                        <Heading fontSize="lg" fontWeight="bold" w="full">
                            <HStack justifyContent={"space-between"} w="full">
                                <Box>
                                    Total
                                </Box>
                                <FormatNumber value={cart.items.reduce((total, item) => total + item.price * item.quantity, 0)} currency="NGN" style="currency" />
                            </HStack>
                        </Heading>
                        <Heading size="md">Place your order</Heading>
                        <Stack>
                            <ButtonGroup orientation={{ base: "vertical", md: "horizontal" }}>
                                <Button
                                    rounded="xl"
                                    bg="#25D366"
                                    color="white"
                                    w={{ base: "full", md: "fit" }}
                                    size="lg"
                                    transition={"all 500ms"}
                                    _active={{ transform: "scale(0.9)" }}
                                    fontWeight={"bold"}
                                    onClick={shareCartToWhatsApp}
                                    _hover={{ bg: "green.500" }}
                                >
                                    <FaWhatsapp /> On WhatsApp
                                </Button>
                                <HStack w="full">
                                    <Separator flex="1" borderColor="gray.100" />
                                    <Text flexShrink="0">Or</Text>
                                    <Separator flex="1" borderColor="gray.100" />
                                </HStack>
                                <Button
                                    rounded="xl"
                                    bg="gray.900"
                                    color="white"
                                    w={{ base: "full", md: "fit" }}
                                    size="lg"
                                    transition={"all 500ms"}
                                    _active={{ transform: "scale(0.9)" }}
                                    onClick={shareCartToEmail}
                                    fontWeight={"bold"}
                                    _hover={{ bg: "gray.muted" }}
                                >
                                    <LuMail /> By Email
                                </Button>
                                <Button
                                    rounded="xl"
                                    bg="gray.900"
                                    color="white"
                                    w={{ base: "full", md: "fit" }}
                                    asChild
                                    size="lg"
                                    transition={"all 500ms"}
                                    _active={{ transform: "scale(0.9)" }}
                                    fontWeight={"bold"}
                                    _hover={{ bg: "gray.muted" }}
                                >
                                    <Link href={`tel:${retailerDetails.phone}`} target="_blank">
                                        <LuPhoneCall />By Phone Call
                                    </Link>
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Stack>

                </GridItem>
            </Grid>
        </Container >
    );
};

export default CheckoutPage;