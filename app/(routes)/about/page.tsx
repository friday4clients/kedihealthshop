import { Container, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { href: "https://facebook.com/yourpage", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://instagram.com/yourprofile", icon: <FaInstagram />, label: "Instagram" },
];

const AboutUsPage = () => {
    return (
        <Container>

        </Container>
    );
};

export default AboutUsPage;
