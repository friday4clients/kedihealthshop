import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { href: "https://facebook.com/yourpage", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://instagram.com/yourprofile", icon: <FaInstagram />, label: "Instagram" },
];

const AboutUsPage = () => {
    return (
        <HStack minH="100vh" bg="gray.100" align="center" justify="center">
            <HStack
                bg="white"
                shadow="md"
                rounded="lg"
                p={8}
                maxW="3xl"
                w="full"
                gap={4}
                flexDirection="column"
            >
                <HStack as="header" flexDirection="column" gap={2}>
                    <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#2D3748" }}>
                        About Us
                    </h1>
                    <p style={{ color: "#718096", textAlign: "center" }}>
                        Welcome to Kedicares! We are dedicated to providing exceptional services and making a positive impact in our community.
                        Our mission is to deliver quality and care in everything we do. With a passionate team and a commitment to excellence,
                        we strive to exceed expectations and build lasting relationships.
                    </p>
                </HStack>
                <HStack flexDirection="column" gap={4} align="start">
                    <HStack flexDirection="column" gap={2}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", color: "#2D3748" }}>
                            Our Vision
                        </h2>
                        <p style={{ color: "#718096" }}>
                            To be a trusted leader in our industry, known for innovation, integrity, and outstanding service.
                        </p>
                    </HStack>
                    <HStack flexDirection="column" gap={2}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", color: "#2D3748" }}>
                            Our Team
                        </h2>
                        <p style={{ color: "#718096" }}>
                            Our team is composed of talented and dedicated professionals who are passionate about what they do.
                            Together, we work hard to achieve our goals and make a difference.
                        </p>
                    </HStack>
                    <HStack flexDirection="column" gap={2}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", color: "#2D3748" }}>
                            Connect With Us
                        </h2>
                        <p style={{ color: "#718096" }}>
                            Follow us on social media to stay updated with our latest news and activities.
                        </p>
                    </HStack>
                </HStack>
                <HStack justify="center" gap={4}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                boxSize={6}
                                color="gray.500"
                                _hover={{ color: "blue.500" }}>
                                {link.icon}
                            </Icon>

                        </a>
                    ))}
                </HStack>
            </HStack>
        </HStack>
    );
};

export default AboutUsPage;
