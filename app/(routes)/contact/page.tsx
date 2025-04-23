import { HStack, Icon } from '@chakra-ui/react';
import Link from 'next/link';
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-6">
                    Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <HStack justify="center" gap={4} mb={6}>
                    {socialLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                        >
                            <Icon boxSize={6} color="gray.500" _hover={{ color: "blue.500" }}>
                                {link.icon}
                            </Icon>
                        </Link>
                    ))}
                </HStack>

            </div>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUsPage;