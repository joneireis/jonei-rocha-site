import { useState, useEffect } from "react";
import { Box, Text, VStack, Icon, HStack, Image, Button, Flex, useColorModeValue, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBitcoin, FaArrowRight, FaChevronLeft, FaChevronRight, FaCloud, FaLaptopCode, FaHospital } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpeg";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

function Home() {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const bgColor = useColorModeValue("gray.900", "black");
    const textColor = useColorModeValue("white", "gray.100");

    const slides = [
        {
            icon: FaLaptopCode,
            title: "Desenvolvimento & Inovação",
            description: "Criando soluções tecnológicas inovadoras com as melhores práticas de desenvolvimento.",
            color: "blue.400"
        },
        {
            icon: FaCloud,
            title: "Cloud & DevOps",
            description: "Arquiteturas escaláveis e automação de processos para maximizar a eficiência operacional.",
            color: "purple.400"
        },
        {
            icon: FaBitcoin,
            title: "Blockchain & Bitcoin",
            description: "Explorando o futuro das finanças descentralizadas e tecnologia blockchain.",
            color: "orange.400"
        },
        {
            icon: FaHospital,
            title: "Tecnologia Hospitalar",
            description: "Transformação digital no setor de saúde com soluções tecnológicas avançadas.",
            color: "green.400"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
            .then((res) => res.json())
            .then((data) => setBitcoinPrice(data.bitcoin.usd))
            .catch((err) => console.error("Erro ao buscar preço do Bitcoin:", err));
    }, []);

    const particlesInit = async (engine) => {
        return engine;
    };

    return (
        <Box
            position="relative"
            minH="100vh"
            overflow="hidden"
            bgGradient="linear(to-b, gray.900, black)"
        >
            {/* Partículas de fundo melhoradas */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "transparent" } },
                    particles: {
                        number: { value: 30 },
                        color: { value: ["#F7931A", "#00BFFF"] },
                        links: {
                            enable: true,
                            color: "#00BFFF",
                            distance: 150,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: { 
                            enable: true, 
                            speed: 1.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: "out",
                        },
                        size: { 
                            value: { min: 1, max: 3 },
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 0.1,
                            }
                        },
                        opacity: { 
                            value: 0.5,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                            }
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: { 
                                enable: true, 
                                mode: "repulse",
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            onClick: { 
                                enable: true, 
                                mode: "push",
                                particles: {
                                    color: {
                                        value: "#F7931A"
                                    }
                                }
                            },
                        },
                        modes: {
                            repulse: { 
                                distance: 150,
                                duration: 0.4
                            },
                            push: { 
                                quantity: 4,
                                particles_nb: 4
                            },
                        },
                    },
                }}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />

            {/* Conteúdo Principal */}
            <Box position="relative" zIndex="10" minH="100vh" px={{ base: 4, md: 8 }} pt="80px">
                {/* Container para Avatar e Preço do Bitcoin */}
                <Flex
                    justify="space-between"
                    align="center"
                    position="absolute"
                    top="5px"
                    left="0"
                    right="0"
                    px={{ base: 4, md: 8 }}
                    zIndex="20"
                >
                    {/* Avatar no Canto Esquerdo */}
                    <MotionBox
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        boxShadow="xl"
                        p={2}
                        borderRadius="lg"
                        bg="rgba(26, 32, 44, 0.8)"
                        backdropFilter="blur(10px)"
                    >
                        <HStack spacing={{ base: 2, md: 4 }}>
                            <MotionImage
                                src={avatar}
                                alt="Jonei Rocha"
                                boxSize={{ base: "50px", md: "60px" }}
                                borderRadius="full"
                                border="2px solid"
                                borderColor="bitcoin.500"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            />
                            <VStack align="start" spacing={0}>
                                <MotionText
                                    fontSize={{ base: "sm", md: "md" }}
                                    color="gray.300"
                                    maxW={{ base: "200px", md: "300px" }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Consultor de TI | CloudOps & FinOps | Tecnologia Hospitalar | Blockchain & Bitcoin
                                </MotionText>
                            </VStack>
                        </HStack>
                    </MotionBox>

                    {/* Preço do Bitcoin no Canto Direito */}
                    <MotionBox
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        boxShadow="xl"
                        p={2}
                        borderRadius="lg"
                        bg="rgba(26, 32, 44, 0.8)"
                        backdropFilter="blur(10px)"
                    >
                        <HStack spacing={{ base: 1, md: 2 }}>
                            <Icon as={FaBitcoin} boxSize={{ base: 4, md: 6 }} color="bitcoin.500" />
                            <Text fontSize={{ base: "sm", md: "lg" }} color="techBlue.500">
                                Preço do Bitcoin (USD):
                            </Text>
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                bg="gray.800"
                                px={{ base: 2, md: 4 }}
                                py={{ base: 1, md: 2 }}
                                borderRadius="md"
                                border="1px solid"
                                borderColor="bitcoin.500"
                                boxShadow="md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold" color="bitcoin.500">
                                    {bitcoinPrice ? `$${bitcoinPrice}` : "Carregando..."}
                                </Text>
                            </MotionBox>
                        </HStack>
                    </MotionBox>
                </Flex>

                {/* New Slider Section */}
                <Flex
                    justify="center"
                    align="center"
                    minH="50vh"
                    position="relative"
                    mb={8}
                >
                    <IconButton
                        icon={<FaChevronLeft />}
                        aria-label="Previous slide"
                        position="absolute"
                        left={{ base: "0", md: "10%" }}
                        zIndex={2}
                        onClick={prevSlide}
                        variant="ghost"
                        color="white"
                        size="lg"
                        _hover={{ bg: "whiteAlpha.200" }}
                    />

                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={currentSlide}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            maxW="800px"
                            w="100%"
                            textAlign="center"
                            bg="rgba(26, 32, 44, 0.8)"
                            borderRadius="xl"
                            p={8}
                            backdropFilter="blur(10px)"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                        >
                            <Icon
                                as={slides[currentSlide].icon}
                                boxSize={{ base: 12, md: 16 }}
                                color={slides[currentSlide].color}
                                mb={6}
                            />
                            <Text
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="bold"
                                color="white"
                                mb={4}
                            >
                                {slides[currentSlide].title}
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                color="gray.300"
                                maxW="600px"
                                mx="auto"
                            >
                                {slides[currentSlide].description}
                            </Text>
                        </MotionBox>
                    </AnimatePresence>

                    <IconButton
                        icon={<FaChevronRight />}
                        aria-label="Next slide"
                        position="absolute"
                        right={{ base: "0", md: "10%" }}
                        zIndex={2}
                        onClick={nextSlide}
                        variant="ghost"
                        color="white"
                        size="lg"
                        _hover={{ bg: "whiteAlpha.200" }}
                    />
                </Flex>

                {/* Removendo o Box de espaço fixo e ajustando as margens do texto */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    textAlign="center"
                    color="gray.500"
                    fontSize={{ base: "xs", md: "sm" }}
                    maxW={{ base: "90%", md: "600px" }}
                    mx="auto"
                    bg="rgba(26, 32, 44, 0.8)"
                    p={6}
                    borderRadius="lg"
                    boxShadow="xl"
                    backdropFilter="blur(10px)"
                    mb={{ base: "40px", md: "60px" }}
                    mt={{ base: "20px", md: "40px" }}
                    zIndex="10"
                >
                    <MotionText
                        mb={4}
                        fontSize={{ base: "lg", md: "xl" }}
                        color="bitcoin.500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        "A blockchain é a tecnologia mais disruptiva desde a internet. O Bitcoin é apenas o começo."
                    </MotionText>
                    <MotionText
                        mb={4}
                        color="gray.300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Apaixonado por descentralização, estou explorando como o Bitcoin, a blockchain, e tecnologias de nuvem podem transformar o futuro das finanças, da saúde e da tecnologia.
                    </MotionText>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Button
                            rightIcon={<FaArrowRight />}
                            colorScheme="bitcoin"
                            variant="outline"
                            as={Link}
                            to="/sobre"
                            size={{ base: "sm", md: "md" }}
                            _hover={{
                                bg: "bitcoin.500",
                                color: "white",
                                transform: "translateX(5px)",
                            }}
                            transition="all 0.3s ease"
                        >
                            Saiba Mais Sobre Mim
                        </Button>
                    </MotionBox>
                </MotionBox>
            </Box>
        </Box>
    );
}

export default Home;