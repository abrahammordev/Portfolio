import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'transparent',
        color: mode("brand.letter", "whiteAlpha.900")(props),
        lineHeight: "base",
        _before: {
          content: "''",
          position: "fixed",
          inset: 0,
          backdropFilter: "blur(10px)",
          zIndex: -2,
        }
      },
      html: {
        "@keyframes aurora": {
          "0%": { backgroundPosition: "0% 50%, 0% 50%" },
          "50%": { backgroundPosition: "200% 50%, 200% 50%" },
          "100%": { backgroundPosition: "0% 50%, 0% 50%" }
        }
      }
    }),
  },

  fonts: {
    heading: "'Alegreya Sans SC', sans-serif",
    body: "'Alegreya Sans SC', sans-serif",

  },

  colors: {
    brand: {
      letter: "#1f2937",
      50: "#E5FDFF",
      100: "#BFD7FF",
      300: "#3b82f6",
      400: "#2563eb",
      500: "#0B3C49",
      600: "#020F2E",
      auroraLight: {
        start: "rgba(59, 130, 246, 0.3)",
        middle: "rgba(165, 180, 252, 0.3)",
        end: "rgba(147, 197, 253, 0.3)"
      },
      auroraDark: {
        start: "rgba(59, 130, 246, 0.5)",
        middle: "rgba(124, 58, 237, 0.5)",
        end: "rgba(99, 102, 241, 0.5)"
      }
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          color: "brand.600",
        },
      },
    },
    Box: {
      baseStyle: {
        _hover: {
          color: "brand.300",
        },
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
      },
      _hover: {
        backgroundColor: "brand.500",
        color: "white",
        transform: "scale(1.1)",
      },
    },

  },
});

export default theme;
