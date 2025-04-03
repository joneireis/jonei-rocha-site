import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            primary: {
                50: "#EBF8FF",
                100: "#BEE3F8",
                200: "#90CDF4",
                300: "#63B3ED",
                400: "#4299E1",
                500: "#3182CE",
                600: "#2B6CB0",
                700: "#2C5282",
                800: "#2A4365",
                900: "#1A365D",
            },
            secondary: {
                50: "#FAFAFA",
                100: "#F4F4F5",
                200: "#E4E4E7",
                300: "#D4D4D8",
                400: "#A1A1AA",
                500: "#71717A",
                600: "#52525B",
                700: "#3F3F46",
                800: "#27272A",
                900: "#18181B",
            },
            accent: {
                50: "#F0FDF4",
                100: "#DCFCE7",
                200: "#BBF7D0",
                300: "#86EFAC",
                400: "#4ADE80",
                500: "#22C55E",
                600: "#16A34A",
                700: "#15803D",
                800: "#166534",
                900: "#14532D",
            },
        },
    },
    fonts: {
        heading: "Inter, system-ui, sans-serif",
        body: "Inter, system-ui, sans-serif",
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "semibold",
                borderRadius: "md",
            },
            variants: {
                solid: {
                    bg: "brand.primary.500",
                    color: "white",
                    _hover: {
                        bg: "brand.primary.600",
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                    },
                    _active: {
                        bg: "brand.primary.700",
                        transform: "translateY(0)",
                    },
                },
                outline: {
                    borderColor: "brand.primary.500",
                    color: "brand.primary.500",
                    _hover: {
                        bg: "brand.primary.50",
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                    },
                    _active: {
                        bg: "brand.primary.100",
                        transform: "translateY(0)",
                    },
                },
            },
        },
        Link: {
            baseStyle: {
                color: "brand.primary.500",
                _hover: {
                    textDecoration: "none",
                    color: "brand.primary.600",
                },
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "gray.100",
            },
        },
    },
});

export default theme; 