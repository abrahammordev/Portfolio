import { useState, useEffect } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  roles = ["Full Stack Developer", "React Enthusiast", "TypeScript Developer", "Open Source Contributor"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (currentText.length < currentRole.length) {
        const typeTimer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    }
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  const textColor = useColorModeValue("brand.500", "brand.300");
  const cursorColor = useColorModeValue("brand.600", "brand.200");

  return (
    <Text
      as="span"
      color={textColor}
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="semi-bold"
      fontFamily="'Alegreya Sans SC', sans-serif"
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "steps(2)",
        }}
        style={{
          display: "inline-block",
          width: "3px",
          height: "1em",
          backgroundColor: cursorColor,
          marginLeft: "4px",
          verticalAlign: "middle",
        }}
      />
    </Text>
  );
};

export default TypingAnimation;
