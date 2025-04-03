import { Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box 
                    p={8} 
                    textAlign="center"
                    minH="100vh"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    bg="brand.secondary.50"
                >
                    <Icon 
                        as={FaExclamationTriangle} 
                        boxSize={16} 
                        color="brand.accent.500" 
                        mb={6} 
                    />
                    <Heading 
                        as="h1" 
                        size="2xl" 
                        mb={4}
                        color="brand.secondary.800"
                    >
                        Algo deu errado
                    </Heading>
                    <Text 
                        fontSize="lg" 
                        color="brand.secondary.600" 
                        mb={8}
                        maxW="600px"
                    >
                        Desculpe, ocorreu um erro. Tente recarregar a página ou volte para a Home.
                    </Text>
                    <Button
                        as={Link}
                        to="/"
                        colorScheme="brand.primary"
                        size="lg"
                        px={8}
                    >
                        Voltar para a Home
                    </Button>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary; 