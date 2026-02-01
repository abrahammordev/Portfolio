import { Flex, Text, useColorModeValue, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "../../hooks/useScrollAnimation";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator: React.FC = () => {
  const scrollTo = useSmoothScroll();
  const arrowColor = useColorModeValue("brand.500", "brand.300");
  const textColor = useColorModeValue("gray.600", "gray.400");

  const handleScrollClick = () => {
    scrollTo("about", 80);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="absolute"
      bottom="8"
      left="50%"
      transform="translateX(-50%)"
      cursor="pointer"
      onClick={handleScrollClick}
      role="button"
      tabIndex={0}
      aria-label="Scroll to explore more"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleScrollClick();
        }
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <IconButton
          aria-label="Scroll to explore"
          icon={<FaChevronDown />}
          isRound
          size="lg"
          bg="transparent"
          color={arrowColor}
          _hover={{ bg: "transparent", color: arrowColor }}
          _active={{ bg: "transparent" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Text
          fontSize="sm"
          color={textColor}
          fontFamily="'Alegreya Sans SC', sans-serif"
          letterSpacing="wide"
          mt={2}
          textTransform="uppercase"
        >
          Scroll to explore
        </Text>
      </motion.div>
    </Flex>
  );
};

export default ScrollIndicator;
