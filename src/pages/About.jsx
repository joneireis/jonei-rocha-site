import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaBitcoin, FaHospital } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

function About() {
    const bgColor = useColorModeValue("brand.secondary.50", "brand.secondary.900");
    const textColor = useColorModeValue("brand.secondary.800", "brand.secondary.100");
    const primaryColor = useColorModeValue("brand.primary.500", "brand.primary.300");
    const accentColor = useColorModeValue("brand.accent.500", "brand.accent.300");
    const cardBg = useColorModeValue("white", "brand.secondary.800");

    const skills = [
        {
            icon: FaCode,
            title: "Desenvolvimento",
            description: "Experiência em desenvolvimento de software com foco em qualidade e boas práticas.",
        },
        {
            icon: FaCloud,
            title: "Cloud & DevOps",
            description: "Especialista em arquitetura cloud, automação e práticas DevOps.",
        },
        {
            icon: FaBitcoin,
            title: "Blockchain",
            description: "Conhecimento profundo em blockchain, criptomoedas e tecnologias descentralizadas.",
        },
        {
            icon: FaHospital,
            title: "Saúde Digital",
            description: "Experiência em sistemas de saúde e transformação digital na área médica.",
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
                            Sobre Mim
                        </Heading>
                        <Text
                            fontSize="xl"
                            color={textColor}
                            opacity={0.8}
                            lineHeight="tall"
                        >
                            Sou um profissional apaixonado por tecnologia, com foco em desenvolvimento de software,
                            arquitetura cloud e inovações tecnológicas. Minha jornada combina experiência técnica
                            com uma visão estratégica para transformação digital.
                        </Text>
                    </VStack>

                    <HStack
                        spacing={8}
                        wrap="wrap"
                        justify="center"
                        align="stretch"
                    >
                        {skills.map((skill, index) => (
                            <MotionBox
                                key={skill.title}
                                flex="1"
                                minW="280px"
                                maxW="320px"
                                p={8}
                                borderRadius="lg"
                                bg={cardBg}
                                boxShadow="xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <VStack spacing={4} align="start">
                                    <Icon
                                        as={skill.icon}
                                        boxSize={8}
                                        color={primaryColor}
                                    />
                                    <Heading
                                        as="h3"
                                        size="lg"
                                        color={textColor}
                                    >
                                        {skill.title}
                                    </Heading>
                                    <Text
                                        color={textColor}
                                        opacity={0.7}
                                        lineHeight="tall"
                                    >
                                        {skill.description}
                                    </Text>
                                </VStack>
                            </MotionBox>
                        ))}
                    </HStack>

                    <VStack
                        spacing={6}
                        maxW="800px"
                        mx="auto"
                        textAlign="center"
                        bg={cardBg}
                        p={8}
                        borderRadius="lg"
                        boxShadow="xl"
                    >
                        <Heading
                            as="h2"
                            size="xl"
                            color={primaryColor}
                        >
                            Minha Jornada
                        </Heading>
                        <Text
                            color={textColor}
                            opacity={0.8}
                            lineHeight="tall"
                        >
                            Com mais de uma década de experiência em tecnologia, tenho trabalhado em diversos
                            projetos desafiadores, desde startups até grandes corporações. Minha expertise
                            abrange desenvolvimento de software, arquitetura cloud, DevOps e inovações em
                            blockchain.
                        </Text>
                        <Text
                            color={textColor}
                            opacity={0.8}
                            lineHeight="tall"
                        >
                            Atualmente, estou focado em ajudar empresas a transformarem seus negócios através
                            da tecnologia, com especial atenção para soluções em nuvem, automação e inovações
                            em saúde digital.
                        </Text>
                    </VStack>
                </MotionVStack>
            </Container>
        </Box>
    );
}

export default About;