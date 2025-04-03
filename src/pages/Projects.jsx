import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

function Projects() {
    const bgColor = useColorModeValue("brand.secondary.50", "brand.secondary.900");
    const textColor = useColorModeValue("brand.secondary.800", "brand.secondary.100");
    const primaryColor = useColorModeValue("brand.primary.500", "brand.primary.300");
    const accentColor = useColorModeValue("brand.accent.500", "brand.accent.300");
    const cardBg = useColorModeValue("white", "brand.secondary.800");

    const projects = [
        {
            title: "CryptoDash",
            description: "Dashboard para monitoramento de criptomoedas com análise de mercado em tempo real.",
            technologies: ["React", "Node.js", "WebSocket", "Chart.js"],
            githubUrl: "https://github.com/joneirocha/cryptodash",
            liveUrl: "https://cryptodash.joneirocha.com",
        },
        {
            title: "Cloud Cost Optimizer",
            description: "Ferramenta para otimização de custos em ambientes de nuvem com recomendações automáticas.",
            technologies: ["Python", "AWS SDK", "Terraform", "Grafana"],
            githubUrl: "https://github.com/joneirocha/cloud-cost-optimizer",
            liveUrl: "https://cloud-optimizer.joneirocha.com",
        },
        {
            title: "HealthTech Platform",
            description: "Plataforma integrada para gestão hospitalar com foco em eficiência operacional.",
            technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
            githubUrl: "https://github.com/joneirocha/healthtech-platform",
            liveUrl: "https://healthtech.joneirocha.com",
        },
        {
            title: "Blockchain Explorer",
            description: "Explorador de blockchain personalizado com visualização de transações e blocos.",
            technologies: ["React", "Ethereum", "Web3.js", "Solidity"],
            githubUrl: "https://github.com/joneirocha/blockchain-explorer",
            liveUrl: "https://explorer.joneirocha.com",
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
                            Projetos
                        </Heading>
                        <Text
                            fontSize="xl"
                            color={textColor}
                            opacity={0.8}
                            lineHeight="tall"
                        >
                            Explore alguns dos meus projetos mais recentes, onde aplico minha expertise
                            em desenvolvimento, cloud computing e blockchain.
                        </Text>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={8}
                        width="100%"
                    >
                        {projects.map((project, index) => (
                            <MotionBox
                                key={project.title}
                                p={6}
                                borderRadius="lg"
                                bg={cardBg}
                                boxShadow="xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <VStack spacing={4} align="start">
                                    <Heading
                                        as="h3"
                                        size="lg"
                                        color={textColor}
                                    >
                                        {project.title}
                                    </Heading>
                                    <Text
                                        color={textColor}
                                        opacity={0.7}
                                        lineHeight="tall"
                                    >
                                        {project.description}
                                    </Text>
                                    <HStack spacing={2} wrap="wrap">
                                        {project.technologies.map((tech) => (
                                            <Box
                                                key={tech}
                                                px={3}
                                                py={1}
                                                borderRadius="full"
                                                bg={primaryColor}
                                                color="white"
                                                fontSize="sm"
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </HStack>
                                    <HStack spacing={4} mt={4}>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon
                                                as={FaGithub}
                                                boxSize={6}
                                                color={textColor}
                                                _hover={{ color: primaryColor }}
                                                transition="color 0.3s ease"
                                            />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon
                                                as={FaExternalLinkAlt}
                                                boxSize={6}
                                                color={textColor}
                                                _hover={{ color: primaryColor }}
                                                transition="color 0.3s ease"
                                            />
                                        </a>
                                    </HStack>
                                </VStack>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </MotionVStack>
            </Container>
        </Box>
    );
}

export default Projects;