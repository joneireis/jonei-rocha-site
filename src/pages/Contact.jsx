import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorModeValue, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

function Contact() {
    const bgColor = useColorModeValue("brand.secondary.50", "brand.secondary.900");
    const textColor = useColorModeValue("brand.secondary.800", "brand.secondary.100");
    const primaryColor = useColorModeValue("brand.primary.500", "brand.primary.300");
    const accentColor = useColorModeValue("brand.accent.500", "brand.accent.300");
    const cardBg = useColorModeValue("white", "brand.secondary.800");
    const inputBg = useColorModeValue("brand.secondary.100", "brand.secondary.700");

    const socialLinks = [
        {
            icon: FaLinkedin,
            url: "https://linkedin.com/in/joneirocha",
            label: "LinkedIn",
        },
        {
            icon: FaGithub,
            url: "https://github.com/joneirocha",
            label: "GitHub",
        },
        {
            icon: FaTwitter,
            url: "https://twitter.com/joneirocha",
            label: "Twitter",
        },
        {
            icon: FaEnvelope,
            url: "mailto:jonei@example.com",
            label: "Email",
        },
    ];

    return (
        <Box bg={bgColor} minH="100vh" py={20}>
            <Container maxW="1200px">
                <MotionVStack
                    spacing={12}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
                        <Heading
                            as="h1"
                            size="2xl"
                            color={primaryColor}
                            fontWeight="bold"
                        >
                            Entre em Contato
                        </Heading>
                        <Text
                            fontSize="xl"
                            color={textColor}
                            opacity={0.8}
                            lineHeight="tall"
                        >
                            Estou sempre aberto a novas oportunidades e colaborações.
                            Sinta-se à vontade para entrar em contato!
                        </Text>
                    </VStack>

                    <HStack
                        spacing={8}
                        width="100%"
                        align="stretch"
                        flexDirection={{ base: "column", md: "row" }}
                    >
                        {/* Formulário de Contato */}
                        <MotionBox
                            flex="1"
                            p={8}
                            borderRadius="lg"
                            bg={cardBg}
                            boxShadow="xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <VStack spacing={6} as="form">
                                <FormControl>
                                    <FormLabel color={textColor}>Nome</FormLabel>
                                    <Input
                                        type="text"
                                        bg={inputBg}
                                        border="none"
                                        _focus={{ borderColor: primaryColor }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color={textColor}>Email</FormLabel>
                                    <Input
                                        type="email"
                                        bg={inputBg}
                                        border="none"
                                        _focus={{ borderColor: primaryColor }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color={textColor}>Mensagem</FormLabel>
                                    <Textarea
                                        bg={inputBg}
                                        border="none"
                                        rows={6}
                                        _focus={{ borderColor: primaryColor }}
                                    />
                                </FormControl>
                                <Button
                                    colorScheme="brand.primary"
                                    size="lg"
                                    width="100%"
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        boxShadow: "lg",
                                    }}
                                >
                                    Enviar Mensagem
                                </Button>
                            </VStack>
                        </MotionBox>

                        {/* Informações de Contato */}
                        <MotionBox
                            flex="1"
                            p={8}
                            borderRadius="lg"
                            bg={cardBg}
                            boxShadow="xl"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <VStack spacing={8} align="start">
                                <Heading
                                    as="h2"
                                    size="lg"
                                    color={textColor}
                                >
                                    Outras Formas de Contato
                                </Heading>
                                <Text
                                    color={textColor}
                                    opacity={0.8}
                                    lineHeight="tall"
                                >
                                    Você também pode me encontrar nas seguintes plataformas:
                                </Text>
                                <HStack spacing={6} wrap="wrap">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MotionBox
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Icon
                                                    as={social.icon}
                                                    boxSize={8}
                                                    color={primaryColor}
                                                    _hover={{ color: accentColor }}
                                                    transition="color 0.3s ease"
                                                />
                                            </MotionBox>
                                        </a>
                                    ))}
                                </HStack>
                            </VStack>
                        </MotionBox>
                    </HStack>
                </MotionVStack>
            </Container>
        </Box>
    );
}

export default Contact;