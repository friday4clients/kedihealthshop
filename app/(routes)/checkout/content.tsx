"use client"

import { Alert, Box, Button, ButtonGroup, Clipboard, Container, EmptyState, Field, FormatNumber, Grid, GridItem, Group, Heading, HStack, Input, List, Separator, Show, Stack, Text, Textarea } from '@chakra-ui/react';
import { useCart } from '@/components/cart';
import React from 'react';
import CartItem from '@/components/cart_item';
import { LuMail, LuPhoneCall, LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Form from "next/form";
import categories from '@/lib/categories';

const CheckoutPage = () => {
    const cart = useCart();
    const retailerDetails = {
        name: process.env.NEXT_PUBLIC_VENDOR_NAME,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: "07068453179",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    };


    const getBillingDetails = () => {
        const fullName = (document.querySelector('input[name="full_name"]') as HTMLInputElement)?.value;
        const phoneNumber = (document.querySelector('input[name="tel"]') as HTMLInputElement)?.value;
        const billingAddress = (document.querySelector('textarea[name="address"]') as HTMLTextAreaElement)?.value;

        return { fullName, phoneNumber, billingAddress };
    };

    const prepareCartForWhatsApp = () => {
        if (!cart.items.length) return "";

        const { fullName, phoneNumber, billingAddress } = getBillingDetails();

        if (!fullName || !phoneNumber || !billingAddress) return;

        const cartMarkdown = cart.items
            .map(
                (item, index) =>
                    `${index + 1}. *${item.title}*:
    Price: NGN ${item.price.toLocaleString()}
    Quantity: ${item.quantity}
    `
            )
            .join("\n");

        const total = cart.items.reduce((total, item) => !isNaN(Number(item.price)) ? total + Number(item.price) * item.quantity : total, 0);

        return `*New Order:*\n\n*Full Name:* ${fullName}\n*Phone Number:* ${phoneNumber}\n*Billing Address:* ${billingAddress}\n\n *Items*:\n*${cartMarkdown}\n\n*Total:* NGN ${total.toLocaleString()}`;
    };
    const shareCartToWhatsApp = () => {
        const message = prepareCartForWhatsApp();
        if (!message) return;

        if (message) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_URL}&text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");

            // clear cart
            cart.clearCart();
        }
    };

    const shareCartToEmail = () => {
        const message = prepareCartForWhatsApp();
        if (!message) return;

        if (message) {
            const emailMessage = message
                .replace(/\*/g, "") // Remove markdown asterisks
                .replace(/\n/g, "%0D%0A"); // Replace newlines with email line breaks
            const mailtoUrl = `mailto:${retailerDetails.email}?subject=New Order&body=${emailMessage}`;
            window.open(mailtoUrl, "_blank");

            // clear cart
            cart.clearCart();
        }
    };

    return (
        <Container maxW="6xl" py="12" pt={{ base: "6" }}>

            <Alert.Root rounded="xl" variant={"solid"} bg="white" mb="6" borderStart={"lg"} borderStartColor={"accent"}>
                <Alert.Indicator color="accent" />
                <Alert.Content>
                    <Alert.Title color="accent" fontSize="md" fontWeight={"bold"}>
                        Kedi Distributor&apos;s Account Information
                    </Alert.Title>
                    <Alert.Description>
                        <Stack gap="0" mt="4">
                            <HStack alignItems="start">
                                <Heading mb="4" size="sm">Account Name:</Heading>
                                <Text>{process.env.NEXT_PUBLIC_VENDOR_NAME}</Text>
                            </HStack>
                            <HStack alignItems="start">
                                <Heading mb="4" size="sm">Bank:</Heading>
                                <Text>{process.env.NEXT_PUBLIC_BANK}</Text>
                            </HStack>
                            <HStack alignItems="start">
                                <Heading mb="4" size="sm">Account Number:</Heading>
                                <Text>{process.env.NEXT_PUBLIC_ACC_NUMBER}</Text>
                                <Clipboard.Root value={process.env.NEXT_PUBLIC_ACC_NUMBER} timeout={1000}>
                                    <Clipboard.Trigger asChild>
                                        <Button variant="ghost" size="xs" color="gray.900" _hover={{ color: "white", bg: "accent" }}>
                                            <Clipboard.Indicator />
                                            <Clipboard.CopyText />
                                        </Button>
                                    </Clipboard.Trigger>
                                </Clipboard.Root>
                            </HStack>
                        </Stack>
                    </Alert.Description>
                </Alert.Content>
            </Alert.Root>

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
                                    <Link href={`/${categories?.[0]?.category?.replaceAll(" ", "_")}`}>
                                        Visit Shop
                                    </Link>
                                </Button>
                            </EmptyState.Content>
                        </EmptyState.Root>
                    </Show>
                </GridItem>

                <Show when={cart.items.length}>
                    <GridItem
                        position={"sticky"}
                        top="88px"
                        h="fit"
                        rounded="xl"
                        bg="white"
                        shadow={"0 0 15px {colors.gray.100}"}
                        p="6"
                    >

                        {/* vendor's bank account details */}
                        <Heading mb="4" size="md"></Heading>

                        <Heading mb="4" size="md">Billing Information</Heading>
                        <Form id="billing_form" action={() => { }}>
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
                                    <Textarea placeholder="Enter your delivery address" variant={"subtle"} bg="gray.100" name="address">
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
                                    <FormatNumber value={cart.items.reduce((total, item) => !isNaN(Number(item.price)) ? total + Number(item.price) * item.quantity : total, 0)} currency="NGN" style="currency" />
                                </HStack>
                            </Heading>
                            <Heading size="md">Place your order</Heading>
                            <Stack>
                                <ButtonGroup orientation={{ base: "vertical", md: "horizontal" }}>
                                    <Button
                                        form="billing_form"
                                        type="submit"
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
                                        form="billing_form"
                                        type="submit"
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
                </Show>
            </Grid>
        </Container>
    );
};

export default CheckoutPage;