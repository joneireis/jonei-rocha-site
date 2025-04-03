import { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, useDisclosure, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const bgColor = useColorModeValue("rgba(26, 32, 44, 0.9)", "rgba(26, 32, 44, 0.9)");
    const textColor = useColorModeValue("gray.100", "gray.100");
    const primaryColor = useColorModeValue("blue.400", "blue.400");
    const borderColor = useColorModeValue("blue.700", "blue.700");
    const hoverColor = useColorModeValue("blue.300", "blue.300");
    const activeColor = useColorModeValue("blue.400", "blue.400");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/sobre" },
        { name: "Projetos", path: "/projetos" },
        { name: "Contato", path: "/contato" },
    ];

    return (
        <>
            <Box height="80px" /> {/* Spacer to prevent content from going under fixed header */}
            <MotionBox
                as="header"
                position="fixed"
                top={0}
                left={0}
                right={0}
                height="80px"
                zIndex={1000}
                bg={isScrolled ? bgColor : "transparent"}
                borderBottom={isScrolled ? `1px solid ${borderColor}` : "none"}
                boxShadow={isScrolled ? "sm" : "none"}
                backdropFilter={isScrolled ? "blur(10px)" : "none"}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Flex
                    maxW="1200px"
                    h="100%"
                    mx="auto"
                    px={{ base: 4, md: 8 }}
                    justify="space-between"
                    align="center"
                >
                    <MotionBox
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChakraLink as={Link} to="/" _hover={{ textDecoration: "none" }}>
                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                color={primaryColor}
                                _hover={{ color: hoverColor }}
                            >
                                Jonei Rocha
                            </Text>
                        </ChakraLink>
                    </MotionBox>

                    {/* Desktop Navigation */}
                    <MotionFlex
                        display={{ base: "none", md: "flex" }}
                        gap={8}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {navItems.map((item) => (
                            <ChakraLink
                                key={item.name}
                                as={Link}
                                to={item.path}
                                position="relative"
                                _hover={{ textDecoration: "none" }}
                            >
                                <Text
                                    color={textColor}
                                    fontSize="lg"
                                    fontWeight="medium"
                                    _hover={{ color: hoverColor }}
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        bottom: "-2px",
                                        left: 0,
                                        width: "0%",
                                        height: "2px",
                                        bg: activeColor,
                                        transition: "width 0.3s ease",
                                    }}
                                    _hover={{
                                        _after: {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </ChakraLink>
                        ))}
                    </MotionFlex>

                    {/* Mobile Menu Button */}
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        icon={isOpen ? <FaTimes /> : <FaBars />}
                        onClick={isOpen ? onClose : onOpen}
                        aria-label="Toggle Menu"
                        variant="ghost"
                        color={textColor}
                        _hover={{ color: hoverColor, bg: "transparent" }}
                        _active={{ color: activeColor }}
                    />
                </Flex>

                {/* Mobile Navigation */}
                <MotionBox
                    display={{ base: "block", md: "none" }}
                    position="fixed"
                    top="80px"
                    left={0}
                    right={0}
                    bg={bgColor}
                    borderBottom={`1px solid ${borderColor}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    pointerEvents={isOpen ? "auto" : "none"}
                >
                    <Flex direction="column" p={4} gap={4}>
                        {navItems.map((item) => (
                            <ChakraLink
                                key={item.name}
                                as={Link}
                                to={item.path}
                                onClick={onClose}
                                _hover={{ textDecoration: "none" }}
                            >
                                <Text
                                    color={textColor}
                                    fontSize="lg"
                                    fontWeight="medium"
                                    _hover={{ color: hoverColor }}
                                    py={2}
                                    px={4}
                                    borderRadius="md"
                                    _hover={{ bg: "rgba(0, 0, 0, 0.05)" }}
                                >
                                    {item.name}
                                </Text>
                            </ChakraLink>
                        ))}
                    </Flex>
                </MotionBox>
            </MotionBox>
        </>
    );
}

export default Header;