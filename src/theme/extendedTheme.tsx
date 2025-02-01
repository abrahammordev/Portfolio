import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode("#ffffff", "#111827")(props), 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/climpek.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        color: mode("brand.letter", "#ffffff")(props), 
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
