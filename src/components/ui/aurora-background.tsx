// AuroraBackground.tsx
import { ReactNode } from "react";
import { Box, ChakraProps, useToken, useColorModeValue } from "@chakra-ui/react";
import { cn } from "./../../lib/utils";

interface AuroraBackgroundProps extends ChakraProps {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  
  const [auroraLightStart, auroraLightMiddle, auroraLightEnd] = useToken(
    "colors",
    ["brand.auroraLight.start", "brand.auroraLight.middle", "brand.auroraLight.end"]
  );

  const [auroraDarkStart, auroraDarkMiddle, auroraDarkEnd] = useToken(
    "colors",
    ["brand.auroraDark.start", "brand.auroraDark.middle", "brand.auroraDark.end"]
  );

  const auroraColors = useColorModeValue(
    [auroraLightStart, auroraLightMiddle, auroraLightEnd],
    [auroraDarkStart, auroraDarkMiddle, auroraDarkEnd]
  );

  const auroraStyles = {
    backgroundImage: `
      repeating-linear-gradient(100deg, 
        rgba(255,255,255,0.15) 0%, 
        rgba(255,255,255,0.15) 7%, 
        transparent 10%, 
        transparent 12%, 
        rgba(255,255,255,0.15) 16%),
      repeating-linear-gradient(100deg, 
        ${auroraColors[0]} 10%, 
        ${auroraColors[1]} 15%, 
        ${auroraColors[2]} 20%, 
        ${auroraColors[0]} 25%, 
        ${auroraColors[1]} 30%)
    `,
    backgroundSize: "300% 300%, 200% 200%",
    backgroundPosition: "0% 50%, 0% 50%",
    filter: "blur(12px)",
    animation: "aurora 90s linear infinite",
    maskImage: showRadialGradient
      ? "radial-gradient(ellipse at 100% 0%, black 40%, transparent 90%)"
      : undefined,
    clipPath: "inset(1px)"
  };

  return (
    <Box
      as="section"
      position="relative"
      width="full"
      minH="100vh"
      className={cn(className)}
      {...props}
      role="region"
      aria-label="Decorative background"
    >
      <Box
        position="absolute"
        inset="0"
        zIndex={-1}
        overflow="hidden"
        pointerEvents="none"
        aria-hidden="true"
      >
        <Box
          position="absolute"
          inset="0"
          opacity={0.6}
          _dark={{ opacity: 0.45 }}
          style={auroraStyles}
        />
      </Box>

      <Box
        position="relative"
        width="full"
        height="full"
        py={16}
        px={{ base: 4, md: 8 }}
        transition="all 0.2s ease-in-out"
      >
        {children}
      </Box>
    </Box>
  );
};