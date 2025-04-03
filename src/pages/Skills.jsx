import { Box, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaReact, FaBitcoin, FaJsSquare, FaCode, FaCloud, FaHospital } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Skills() {
    const skills = [
        {
            name: "CloudOps",
            icon: FaCloud,
            description: "Gestão e otimização de ambientes de nuvem (AWS, GCP, OCI, Azure), com foco em escalabilidade, segurança e eficiência operacional.",
        },
        {
            name: "FinOps",
            icon: FaCloud,
            description: "Implementação de práticas de FinOps para controle de custos e eficiência financeira em cloud, utilizando ferramentas como AWS Cost Explorer e GCP Billing.",
        },
        {
            name: "DevOps",
            icon: FaCode,
            description: "Automação de processos com Terraform, Kubernetes, e AWS Lambda, além de cultura DevOps para desenvolvimento e operações.",
        },
        {
            name: "Observability",
            icon: FaCode,
            description: "Monitoramento em tempo real com Dynatrace, Prometheus, Grafana, e AWS CloudWatch, garantindo alta disponibilidade dos sistemas.",
        },
        {
            name: "Tecnologia Hospitalar",
            icon: FaHospital,
            description: "Mais de 10 anos de experiência em TI hospitalar, implementando sistemas ERP, prontuários eletrônicos e integrações para gestão de saúde.",
        },
        {
            name: "Blockchain",
            icon: FaBitcoin,
            description: "Conhecimento em tecnologia blockchain e criptomoedas, com foco em Bitcoin e integrações.",
        },
        {
            name: "JavaScript",
            icon: FaJsSquare,
            description: "Domínio de JavaScript (ES6+) para criar aplicações web interativas e performáticas.",
        },
        {
            name: "React",
            icon: FaReact,
            description: "Desenvolvimento de interfaces modernas e dinâmicas com React, incluindo hooks e estado avançado.",
        },
    ];

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Box p={8} bg="gray.900" minH="100vh" color="white">
                <Heading mb={8} textAlign="center">Habilidades</Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6} maxW="1200px" mx="auto">
                    {skills.map((skill) => (
                        <Box
                            key={skill.name}
                            p={6}
                            bg="gray.800"
                            borderRadius="lg"
                            borderColor="bitcoin.500"
                            borderWidth="1px"
                            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                            transition="all 0.3s"
                            textAlign="center"
                        >
                            <Icon as={skill.icon} boxSize={10} color="bitcoin.500" mb={4} />
                            <Heading size="md" mb={2}>{skill.name}</Heading>
                            <Text color="gray.400">{skill.description}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </MotionBox>
    );
}

export default Skills;