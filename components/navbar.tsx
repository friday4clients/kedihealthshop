"use client"

import Link from 'next/link';
import { Container, HStack, Link as CLink, Image, IconButton, Stack, Drawer, Portal, CloseButton, Heading, Icon, Box } from '@chakra-ui/react';
import { LuAlignRight } from 'react-icons/lu';
import Cart from './cart';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import categories from '@/lib/categories';

function isActiveLink(path: string, category: string): boolean {
    return path.includes(`/${category.replaceAll(" ", "_")}`);
}

const Navbar = () => {
    const path = usePathname();

    return (
        <Box
            position="sticky"
            top="0"
            zIndex={"sticky"}
            display={{ md: path === "/" ? "none" : "block" }}
            maxW={{ base: "6xl", md: "full" }} as="nav" bg="white" borderBottom="sm" borderColor="gray.100">
            <Container maxW={"6xl"}>
                <HStack position="relative" h="16" justifyContent={{ base: "space-between" }}>
                    <Link href="/">
                        <Image src="/logo.webp" alt="kedicares logo" w="40" />
                    </Link>

                    {/* nav links */}
                    <HStack
                        display={{ base: "none", md: "flex" }}
                        position="absolute"
                        left="50%"
                        transform={"translateX(-50%)"}
                        gap="4" className="*:hover:!text-blue-700">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href={`/${categories?.[0]?.category?.replaceAll(" ", "_")}`}>
                            Shop
                        </Link>
                        <Link href={`/checkout`}>
                            Checkout
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <CLink
                            textDecor={"inherit"}
                            color="inherit"
                            href="/#services">
                            Services
                        </CLink>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </HStack>

                    <HStack display={{ base: "none", md: "flex" }} gap="6">
                        <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL!} target="_blank" rel="noopener noreferrer">
                            <Icon _hover={{ fill: "accent" }}>
                                <FaFacebook color="#444" size="20" aria-label='facebook' />
                            </Icon>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL!} target="_blank" rel="noopener noreferrer">
                            <Icon _hover={{ fill: "accent" }}>
                                <FaWhatsapp color="#444" size="20" aria-label='whatsapp' />
                            </Icon>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_TWITTER_URL!} target="_blank" rel="noopener noreferrer">
                            <Icon _hover={{ fill: "accent" }}>
                                <FaInstagram color="#444" size="20" aria-label='instagram' />
                            </Icon>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL!} target="_blank" rel="noopener noreferrer">
                            <Icon _hover={{ fill: "accent" }}>
                                <FaTwitter color="#444" size="20" aria-label='twitter' />
                            </Icon>
                        </Link>
                        <Cart />
                    </HStack>

                    <HStack display={{ base: "flex", md: "none" }} gap="4">
                        <Cart />
                        <Drawer.Root>
                            <Drawer.Trigger asChild>
                                <IconButton rounded="lg" _active={{ bg: "accent", color: "white" }}>
                                    <LuAlignRight />
                                </IconButton>
                            </Drawer.Trigger>
                            <Portal>
                                <Drawer.Backdrop />
                                <Drawer.Positioner>
                                    <Drawer.Content bg="white">
                                        <Drawer.Header>
                                            <Drawer.Title>Menu</Drawer.Title>
                                        </Drawer.Header>
                                        <Drawer.Body>
                                            <Stack gap="4">
                                                <Drawer.ActionTrigger asChild>
                                                    <Link href="/">
                                                        <Heading _hover={{ color: "accent" }} textStyle={"sm"} _active={{ color: "accent" }} fontWeight="medium">
                                                            Home
                                                        </Heading>
                                                    </Link>
                                                </Drawer.ActionTrigger>
                                                <Drawer.ActionTrigger asChild>
                                                    <Link href={`/${categories?.[0]?.category?.replaceAll(" ", "_")}`}>
                                                        <Heading _hover={{ color: "accent" }} textStyle={"sm"} _active={{ color: "accent" }} fontWeight="medium">
                                                            Shop
                                                        </Heading>
                                                    </Link>
                                                </Drawer.ActionTrigger>
                                                <Drawer.ActionTrigger asChild>
                                                    <Link href="/about">
                                                        <Heading _hover={{ color: "accent" }} textStyle={"sm"} _active={{ color: "accent" }} fontWeight="medium">
                                                            About
                                                        </Heading>
                                                    </Link>
                                                </Drawer.ActionTrigger>
                                                <Drawer.ActionTrigger asChild>
                                                    <Link href="/#services">
                                                        <Heading _hover={{ color: "accent" }} textStyle={"sm"} _active={{ color: "accent" }} fontWeight="medium">
                                                            Services
                                                        </Heading>
                                                    </Link>
                                                </Drawer.ActionTrigger>
                                                <Drawer.ActionTrigger asChild>
                                                    <Link href="/contact">
                                                        <Heading _hover={{ color: "accent" }} textStyle={"sm"} _active={{ color: "accent" }} fontWeight="medium">
                                                            Contact
                                                        </Heading>
                                                    </Link>
                                                </Drawer.ActionTrigger>
                                            </Stack>

                                            <Stack mt="6" gap="4">
                                                <Heading fontSize="md" fontWeight="sm">Categories</Heading>
                                                {
                                                    categories?.map((category, index) => {
                                                        const isActive = isActiveLink(path, category.category);

                                                        return (
                                                            <Drawer.ActionTrigger asChild key={index}>
                                                                <Link href={`/${category?.category?.replaceAll(" ", "_")}`}>
                                                                    <Heading _hover={{ color: "accent" }} fontWeight="medium" _active={{ color: "accent" }} textStyle={"sm"} color={isActive ? "accent" : "inherit"}>
                                                                        {category.category}
                                                                    </Heading>
                                                                </Link>
                                                            </Drawer.ActionTrigger>
                                                        )
                                                    }
                                                    )
                                                }
                                            </Stack>
                                        </Drawer.Body>
                                        <Drawer.Footer>
                                        </Drawer.Footer>
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton _active={{ bg: "gray.100" }} _hover={{ bg: "gray.100" }} color="black" size="sm" />
                                        </Drawer.CloseTrigger>
                                    </Drawer.Content>
                                </Drawer.Positioner>
                            </Portal>
                        </Drawer.Root>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
};


export default Navbar;