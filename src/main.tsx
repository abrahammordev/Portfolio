import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import extendTheme from './theme/extendedTheme.tsx'
import { ChakraProvider } from '@chakra-ui/react';
import './styles/globals.css';


createRoot(document.getElementById("root")!).render(
  //#TODO Fix accesibility issues and improve UX 
  <StrictMode>
    <ChakraProvider theme={extendTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
