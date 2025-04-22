import Link from 'next/link';
import { Container, Box, HStack, Image, IconButton, Stack, Drawer, Portal, CloseButton, Heading, Button } from '@chakra-ui/react';
import { LuAlignRight } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa';
import { getCategories } from '@/lib/utils';
import { BiCart } from 'react-icons/bi';



const Navbar = async () => {
    const categories: Awaited<ReturnType<typeof getCategories>> = await getCategories();

    return (
        <Container display={{ base: "block", md: "none" }} maxW={"6xl"} as="nav" bg="white" shadow="0 0 10px #ddd" >
            <HStack px="4" h="14" justifyContent={{ base: "space-between" }}>
                <Image src="/logo.png" alt="kedicares logo" w="20" />
                {/* <HStack display={{ base: "none", md: "flex" }}>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        Category
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/services">
                        Services
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </HStack> */}

                <Drawer.Root>
                    <Drawer.Trigger asChild>
                        <IconButton>
                            <BiCart />
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
                                        {/* Example items, replace with dynamic data */}
                                        <Stack>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <span>Item 1</span>
                                                <span>$10.00</span>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <span>Item 2</span>
                                                <span>$15.00</span>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <span>Item 3</span>
                                                <span>$20.00</span>
                                            </Box>
                                        </Stack>
                                    </Stack>

                                    <Stack mt="6" gap="4">
                                        <Heading fontSize="md" fontWeight="sm">Total</Heading>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <span>Total:</span>
                                            <span>$45.00</span>
                                        </Box>
                                    </Stack>
                                </Drawer.Body>
                                <Drawer.Footer>
                                    <Stack mt="4" gap="4">
                                        <Drawer.ActionTrigger asChild>
                                            <Link href="/checkout">
                                                <Button bg="blue.500" color="white" px="4" py="2" borderRadius="md" textAlign="center">
                                                    Proceed to Checkout
                                                </Button>
                                            </Link>
                                        </Drawer.ActionTrigger>
                                    </Stack>
                                </Drawer.Footer>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton color="black" size="sm" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>

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
                                                <Link href={`/${category.replaceAll(" ","_")}`}>
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
        </Container>
    );
};


export default Navbar;