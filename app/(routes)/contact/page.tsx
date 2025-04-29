import { Box, Container, Field, Grid, Button, GridItem, Group, Heading, HStack, Icon, Input, Stack, Textarea, Separator, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Form from "next/form";
import React from 'react';
import { FaWhatsapp, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { href: "https://wa.me/1234567890", icon: <FaWhatsapp />, label: "WhatsApp" },
    { href: "tel:+1234567890", icon: <FaPhone />, label: "Phone" },
    { href: "https://facebook.com/yourpage", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://instagram.com/yourprofile", icon: <FaInstagram />, label: "Instagram" },
];

const ContactUsPage = () => {
    return (
        <Box bg={"accent"} color="white" h="calc(100vh - 50px)">
            <Container h={"full"}>
                <Grid h="full" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                    <GridItem py="8">
                        <Heading mb="6" color="white" fontFamily="merriweather" lineHeight={"1.2"} size="5xl">
                            Contact KediCares
                        </Heading>
                        <Form action={"#"}>
                            <Stack gap="4" color="blue.100">
                                <Group flexDir={{ base: "column", md: "row" }}>
                                    <Field.Root required>
                                        <Field.Label color="colorPalette.100">Full Name</Field.Label>
                                        <Input variant={"subtle"} bg="blue.solid" name="full_name" />
                                    </Field.Root>
                                    <Field.Root required>
                                        <Field.Label color="colorPalette.100">Phone Number</Field.Label>
                                        <Input variant={"subtle"} bg="blue.solid" inputMode='decimal' name="tel" placeholder="+2340000000000" />
                                    </Field.Root>
                                    <Field.Root required>
                                        <Field.Label color="colorPalette.100">Subject</Field.Label>
                                        <Input variant={"subtle"} bg="blue.solid" name="subject" />
                                    </Field.Root>
                                </Group>
                                <Field.Root required>
                                    <Field.Label color="colorPalette.100">Message</Field.Label>
                                    <Textarea h="40" variant={"subtle"} bg="blue.solid" name="address">
                                    </Textarea>
                                </Field.Root>
                                <Button
                                    type="submit"
                                    fontWeight="bold"
                                    color="accent"
                                    w={{ md: "fit" }}
                                    transition={"all 500ms"}
                                    _active={{ transform: "scale(0.9)" }}
                                    _hover={{ bg: "blue.solid" }}
                                >Send Message</Button>
                            </Stack>
                        </Form>
                        <HStack my="10" w="full">
                            <Separator flex="1" borderColor="blue.solid" />
                            <Text color="blue.solid" flexShrink="0">Or</Text>
                            <Separator flex="1" borderColor="blue.solid" />
                        </HStack>
                    </GridItem>
                    <GridItem></GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactUsPage;