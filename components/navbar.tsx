import Link from 'next/link';
import { Container, Box, HStack, Image, IconButton } from '@chakra-ui/react';
import { LuAlignRight } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa';


const Navbar = () => {
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
                <IconButton display={{ md: "none" }}>
                    <LuAlignRight />
                </IconButton>
            </HStack>
        </Container>
    );
};


export default Navbar;