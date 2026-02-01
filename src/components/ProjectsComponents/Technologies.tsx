import { Heading, Box, useColorModeValue, Flex, Text, Stack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { skillCategories } from "../../data/skills";
import { staggerContainer, staggerScaleIn } from "../../lib/animations";
import { useScrollAnimation, useReducedMotion } from "../../hooks/useScrollAnimation";

const MotionBox = motion(Box);

const TechnologiesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const columnBg = useColorModeValue("white", "gray.700");
  const categoryColor = useColorModeValue("brand.500", "brand.300");
  const inputBg = useColorModeValue("white", "gray.800");
  const inputBorder = useColorModeValue("gray.200", "gray.600");

  // Filter categories and technologies based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return skillCategories;

    return skillCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  return (
    <Box py={16} ref={ref}>
      <Heading
        as={motion.h2}
        textAlign="center"
        mb={4}
        fontSize="4xl"
        color={useColorModeValue("gray.600", "gray.300")}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 } as any}
      >
        Tech Stack
      </Heading>

      {/* Search Bar */}
      <Flex justify="center" mb={12}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          width={{ base: "90%", md: "500px" }}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: "brand.400" }}
              _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px brand.500" }}
              borderRadius="full"
              py={6}
            />
          </InputGroup>
        </MotionBox>
      </Flex>

      {/* Technology Categories */}
      <Flex
        as={motion.div}
        direction={{ base: "column", md: "row" }}
        justify="center"
        gap={6}
        maxW="1400px"
        mx="auto"
        px={4}
        flexWrap="wrap"
        variants={prefersReducedMotion ? undefined : (staggerContainer as any)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {filteredCategories.map((category, categoryIndex) => (
          <Stack
            as={motion.div}
            key={category.id}
            direction="column"
            spacing={6}
            p={6}
            bg={columnBg}
            borderRadius="2xl"
            boxShadow="lg"
            minW={{ base: "100%", md: "220px" }}
            flex={1}
            variants={prefersReducedMotion ? undefined : (staggerScaleIn as any)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 } as any}
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={categoryColor}
              textTransform="uppercase"
              letterSpacing="wide"
              textAlign="center"
            >
              {category.name}
            </Text>

            <Flex
              wrap="wrap"
              gap={6}
              justify="center"
              align="center"
            >
              {category.items.map((skill, skillIndex) => (
                <Box
                  as={motion.div}
                  key={skill.name}
                  p={2}
                  borderRadius="lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: prefersReducedMotion
                      ? 0
                      : categoryIndex * 0.1 + skillIndex * 0.05,
                  } as any}
                  whileHover={{
                    scale: 1.15,
                    filter: "drop-shadow(0 0 8px rgba(66, 153, 225, 0.5))",
                    cursor: "pointer",
                  }}
                  title={skill.name}
                >
                  <skill.icon size="2.5rem" />
                </Box>
              ))}
            </Flex>

            {category.items.length === 0 && (
              <Text
                textAlign="center"
                color="gray.500"
                fontSize="sm"
                py={4}
              >
                No technologies found
              </Text>
            )}
          </Stack>
        ))}
      </Flex>

      {filteredCategories.length === 0 && (
        <Text
          textAlign="center"
          color="gray.500"
          fontSize="lg"
          py={8}
        >
          No technologies match your search
        </Text>
      )}
    </Box>
  );
};

export default TechnologiesSection;
