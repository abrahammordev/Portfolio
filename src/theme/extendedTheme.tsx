import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("brand.50", "brand.600")(props),
        color: mode("brand.600", "whiteAlpha.900")(props),
        lineHeight: "base",
        _before: {
          content: "''",
          position: "fixed",
          inset: 0,
          backdropFilter: "blur(10px)",
          zIndex: -2,
          background: mode(
            "linear-gradient(135deg, brand.auroraLight.start, brand.auroraLight.middle, brand.auroraLight.end)",
            "linear-gradient(135deg, brand.auroraDark.start, brand.auroraDark.middle, brand.auroraDark.end)"
          )(props),
        },
      },
      html: {
        "@keyframes aurora": {
          "0%": { backgroundPosition: "0% 50%, 0% 50%" },
          "50%": { backgroundPosition: "200% 50%, 200% 50%" },
          "100%": { backgroundPosition: "0% 50%, 0% 50%" },
        },
      },
    }),
  },

  fonts: {
    heading: "'Alegreya Sans SC', sans-serif",
    body: "'Alegreya Sans SC', sans-serif",
  },

  colors: {
    brand: {
      letter: "#BFD7FF",
      50: "#E5FDFF",  // Fondo claro
      100: "#BFD7FF", // Azul suave
      300: "#3b82f6", // Azul medio
      400: "#2563eb", // Azul más intenso
      500: "#0B3C49", // Azul oscuro
      600: "#020F2E", // Azul muy oscuro (fondo oscuro)

      auroraLight: {
        start: "rgba(191, 215, 255, 0.6)",  // Azul cielo claro
        middle: "rgba(255, 255, 255, 0.4)", // Blanco translúcido
        end: "rgba(75, 130, 255, 0.6)",     // Azul fuerte
      },
      auroraDark: {
        start: "rgba(2, 15, 46, 0.8)",    // Azul oscuro
        middle: "rgba(20, 40, 90, 0.7)",  // Azul intermedio
        end: "rgba(191, 215, 255, 0.5)",  // Azul claro translúcido
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: "brand.300",
          color: "white",
        },
      },
    },
    Box: {
      baseStyle: {
        _hover: {
          color: "brand.100",
        },
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
      },
      _hover: {
        backgroundColor: "brand.400",
        color: "white",
        transform: "scale(1.05)",
      },
    },
  },
});

export default theme;
