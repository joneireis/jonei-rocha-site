import { Box, Heading, Text, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Certifications() {
    const certifications = [
        {
            name: "Reliable Google Cloud Infrastructure: Design and Process",
            issuer: "Arki1 (Awarded Training Partner of the Year for 5 consecutive years in Latam)",
            date: "Setembro de 2024",
            description: "Certificação que valida habilidades em design e processos de infraestrutura confiável no Google Cloud Platform, com foco em FinOps, observabilidade e monitoramento de orçamento.",
            skills: ["Google Cloud Platform (GCP)", "FinOps", "Observation", "Budget Monitoring"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "Prompt Design in Vertex AI Skill Badge",
            issuer: "Google",
            date: "Agosto de 2024",
            description: "Certificação que valida habilidades em design de prompts para inteligência artificial no Vertex AI, uma plataforma de machine learning do GCP.",
            skills: ["Google Cloud Platform (GCP)"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Junho de 2023",
            expires: "Junho de 2026",
            credentialCode: "EQKC4H0CDJF4QD5E",
            description: "Certificação que valida conhecimentos fundamentais em computação em nuvem e serviços da AWS, com foco em arquitetura, segurança e custos.",
            skills: ["Information Technology", "Amazon Web Services", "Cloud Computing"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "FOCP: FinOps Certified Practitioner",
            issuer: "The Linux Foundation",
            date: "Junho de 2023",
            expires: "Junho de 2025",
            description: "Certificação que reconhece expertise em práticas de FinOps, focada em otimização de custos e eficiência financeira em ambientes de nuvem.",
            skills: ["Information Technology", "FinOps", "Cloud Computing"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate - 1Z0-1085-23",
            issuer: "Oracle",
            date: "Junho de 2023",
            expires: "Junho de 2025",
            credentialCode: "47570761",
            description: "Certificação que valida conhecimentos fundamentais em Oracle Cloud Infrastructure, incluindo arquitetura, segurança e gerenciamento de recursos.",
            skills: ["Oracle Cloud", "Information Technology", "Cloud Computing"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "AWS Cloud Quest: Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Setembro de 2022",
            description: "Certificação prática que demonstra habilidades em conceitos de nuvem, incluindo implantação e gerenciamento de recursos na AWS.",
            skills: ["Cloud Computing"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "Certificado Jornada DevOps",
            issuer: "EXIN",
            date: "Maio de 2019",
            description: "Certificação que reconhece conhecimentos em práticas de DevOps, incluindo automação, CI/CD, e cultura colaborativa em desenvolvimento e operações.",
            skills: ["DevOps"],
            link: "", // Adicione o link da credencial, se disponível
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Março de 2019",
            expires: "Março de 2022",
            credentialCode: "585287",
            description: "Certificação que valida conhecimentos fundamentais em computação em nuvem e serviços da AWS, com foco em arquitetura, segurança e custos (certificação anterior, expirada).",
            skills: ["Information Technology", "Cloud Computing"],
            link: "", // Adicione o link da credencial, se disponível
        },
    ];

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Box p={8} bg="gray.900" minH="100vh" color="white">
                <Heading mb={8} textAlign="center">Certificações</Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6} maxW="1200px" mx="auto">
                    {certifications.map((cert, index) => (
                        <Box
                            key={index}
                            p={6}
                            bg="gray.800"
                            borderRadius="lg"
                            borderColor="bitcoin.500"
                            borderWidth="1px"
                            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                            transition="all 0.3s"
                            textAlign="center"
                        >
                            <Icon as={FaCertificate} boxSize={10} color="bitcoin.500" mb={4} />
                            <Heading size="md" mb={2}>{cert.name}</Heading>
                            <Text fontSize="sm" color="gray.400" mb={2}>
                                Emitido por: {cert.issuer}
                            </Text>
                            <Text fontSize="sm" color="gray.400" mb={2}>
                                Data: {cert.date}
                                {cert.expires && ` · Expira em: ${cert.expires}`}
                            </Text>
                            {cert.credentialCode && (
                                <Text fontSize="sm" color="gray.400" mb={2}>
                                    Código da Credencial: {cert.credentialCode}
                                </Text>
                            )}
                            <Text color="gray.400" mb={2}>{cert.description}</Text>
                            {cert.skills && (
                                <Text fontSize="sm" color="gray.400" mb={2}>
                                    Competências: {cert.skills.join(", ")}
                                </Text>
                            )}
                            {cert.link && (
                                <Button
                                    mt={4}
                                    size="sm"
                                    colorScheme="bitcoin"
                                    as="a"
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Exibir Credencial
                                </Button>
                            )}
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </MotionBox>
    );
}

export default Certifications;