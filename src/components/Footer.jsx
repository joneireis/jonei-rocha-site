import { Box, Text, HStack, Link, Icon, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);

function Footer() {
    const bgColor = "gray.900";
    const textColor = "gray.100";
    const primaryColor = "blue.400";
    const accentColor = "purple.400";
    const borderColor = "blue.700";

    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/joneireis", label: "GitHub" },
        { icon: FaLinkedin, url: "https://linkedin.com/in/joneirocha", label: "LinkedIn" },
        { icon: FaTwitter, url: "https://x.com/joneireis", label: "Twitter" },
        { icon: FaEnvelope, url: "mailto:jonei@me.com", label: "Email" },
    ];

    return (
        <MotionBox
            as="footer"
            bg={bgColor}
            borderTop={`1px solid ${borderColor}`}
            py={12}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <VStack spacing={8} maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    textAlign="center"
                >
                    Vamos Conversar
                </Text>

                <HStack spacing={8} justify="center">
                    {socialLinks.map((social) => (
                        <MotionBox
                            key={social.label}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={social.url}
                                isExternal
                                _hover={{ textDecoration: "none" }}
                                aria-label={social.label}
                            >
                                <Icon
                                    as={social.icon}
                                    boxSize={8}
                                    color={primaryColor}
                                    _hover={{ color: accentColor }}
                                    transition="color 0.3s ease"
                                />
                            </Link>
                        </MotionBox>
                    ))}
                </HStack>

                <Text
                    color={textColor}
                    fontSize="sm"
                    opacity={0.7}
                    textAlign="center"
                >
                    © {new Date().getFullYear()} Jonei Rocha. Todos os direitos reservados.
                </Text>
            </VStack>
        </MotionBox>
    );
}

export default Footer;