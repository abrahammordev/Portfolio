import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode("#ffffff", "#111827")(props), 
        backgroundImage: mode(
          `radial-gradient(circle at 15% 25%, rgba(191,215,255,0.9) 15%, rgba(229,253,255,0.3) 45%, rgba(255,255,255,0) 85%),
           radial-gradient(circle at 85% 75%, rgba(59,130,246,0.6) 10%, rgba(191,215,255,0.3) 50%, rgba(255,255,255,0) 90%)`,
          `radial-gradient(circle at 15% 25%, rgba(2,15,46,0.7) 10%, rgba(11,60,73,0.4) 50%, rgba(17,24,39,0) 90%),
           radial-gradient(circle at 85% 75%, rgba(11,60,73,0.8) 10%, rgba(2,15,46,0.4) 50%, rgba(17,24,39,0) 90%)`
        )(props),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
        minHeight: "100vh", 
        color: mode("brand.letter", "#ffffff")(props), 
        _before: {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          zIndex : -1,
        }
      },
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
