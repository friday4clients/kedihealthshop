"use client"

import Link from 'next/link';
import { Container, HStack, Link as CLink, Image, IconButton, Stack, Drawer, Portal, CloseButton, Heading, Icon } from '@chakra-ui/react';
import { LuAlignRight } from 'react-icons/lu';
import { getCategories } from '@/lib/utils';
import Cart from './cart';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
    const [categories, setCategories] = useState<Awaited<ReturnType<typeof getCategories>>>([]);
    const path = usePathname();
    useEffect(() => {
        (async () => {
            setCategories(await getCategories());
        })();
    }, []);

    console.log(path);

    return (
        <Container
            position="sticky"
            top="0"
            zIndex={"sticky"}
            display={{ md: path === "/" ? "none" : "block" }}
            maxW={{ base: "6xl", md: "full" }} as="nav" bg="white" shadow="0 0 10px #ddd" >
            <HStack position="relative" px="4" h="14" justifyContent={{ base: "space-between" }}>
                <Link href="/">
                    <Image src="/logo.png" alt="kedicares logo" w="20" />
                </Link>

                {/* nav links */}
                <HStack
                    position="absolute"
                    left="50%"
                    transform={"translateX(-50%)"}
                    gap="4" className="*:hover:!text-blue-700">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href={`/${categories?.[0]?.replaceAll(" ", "_")}`}>
                        Shop
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <CLink
                        textDecor={"inherit"}
                        color="inherit"
                        href="#services">
                        Services
                    </CLink>
                    <Link href="/contact">
                        Contact
                    </Link>
                </HStack>
                <HStack gap="6" justifyContent={"center"}>
                    <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL!} target="_blank" rel="noopener noreferrer">
                        <Icon _hover={{fill:"accent"}}>
                            <FaFacebook color="#444" size="20" />
                        </Icon>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL!} target="_blank" rel="noopener noreferrer">
                        <Icon _hover={{fill:"accent"}}>
                            <FaWhatsapp color="#444" size="20" />
                        </Icon>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_TWITTER_URL!} target="_blank" rel="noopener noreferrer">
                        <Icon _hover={{fill:"accent"}}>
                            <FaInstagram color="#444" size="20" />
                        </Icon>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL!} target="_blank" rel="noopener noreferrer">
                        <Icon _hover={{fill:"accent"}}>
                            <FaTwitter color="#444" size="20" />
                        </Icon>
                    </Link>
                    <Cart />
                </HStack>
                <Drawer.Root>
                    <Drawer.Trigger asChild>
                        <IconButton display={{ md: "none" }}>
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
                                            <Link href="/">Home</Link>
                                        </Drawer.ActionTrigger>
                                        <Drawer.ActionTrigger asChild>
                                            <Link href="/category">Category</Link>
                                        </Drawer.ActionTrigger>
                                        <Drawer.ActionTrigger asChild>
                                            <Link href="/about">About</Link>
                                        </Drawer.ActionTrigger>
                                        <Drawer.ActionTrigger asChild>
                                            <Link href="/services">Services</Link>
                                        </Drawer.ActionTrigger>
                                        <Drawer.ActionTrigger asChild>
                                            <Link href="/contact">Contact</Link>
                                        </Drawer.ActionTrigger>
                                    </Stack>

                                    <Stack mt="6" gap="4">
                                        <Heading fontSize="md" fontWeight="sm">Categories</Heading>
                                        {categories.map((category, index) => (
                                            <Drawer.ActionTrigger asChild key={index}>
                                                <Link href={`/${category?.replaceAll(" ", "_")}`}>
                                                    {category}
                                                </Link>
                                            </Drawer.ActionTrigger>
                                        ))}
                                    </Stack>
                                </Drawer.Body>
                                <Drawer.Footer>
                                </Drawer.Footer>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton color="black" size="sm" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </HStack>
        </Container >
    );
};


export default Navbar;