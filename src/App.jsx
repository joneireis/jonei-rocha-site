import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <ErrorBoundary>
                    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.900">
                        <Header />
                        <Box as="main" flex="1" w="100%" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={8}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/sobre" element={<About />} />
                                <Route path="/projetos" element={<Projects />} />
                                <Route path="/contato" element={<Contact />} />
                            </Routes>
                        </Box>
                        <Footer />
                    </Box>
                </ErrorBoundary>
            </Router>
        </ChakraProvider>
    );
}

export default App;