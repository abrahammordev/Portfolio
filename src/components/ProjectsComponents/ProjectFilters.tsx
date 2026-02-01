import { HStack, Button, Text, Badge, Flex, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  projectCount: number;
}

export interface FilterState {
  category: string;
  status: string;
  technology?: string;
}

const MotionButton = motion(Button);

const categories = [
  { id: "all", label: "All" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Blockchain", label: "Blockchain" },
  { id: "Open Source", label: "Open Source" },
];

const statusFilters = [
  { id: "all", label: "All Status" },
  { id: "live", label: "Live" },
  { id: "github-only", label: "GitHub Only" },
];

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ onFilterChange, projectCount }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const activeButtonBg = useColorModeValue("brand.500", "brand.300");
  const activeButtonColor = useColorModeValue("white", "gray.900");
  const inactiveButtonBg = useColorModeValue("gray.100", "gray.800");
  const inactiveButtonColor = useColorModeValue("gray.700", "gray.300");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({
      category,
      status: selectedStatus,
    });
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    onFilterChange({
      category: selectedCategory,
      status,
    });
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    onFilterChange({ category: "all", status: "all" });
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedStatus !== "all";

  return (
    <Flex direction="column" align="center" gap={6} width="full">
      {/* Category Filters */}
      <Flex direction="column" align="center" gap={3} width="full">
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Filter by Category
        </Text>
        <Wrap spacing={2} justify="center">
          {categories.map((category) => (
            <WrapItem key={category.id}>
              <MotionButton
                size="sm"
                variant={selectedCategory === category.id ? "solid" : "outline"}
                bg={selectedCategory === category.id ? activeButtonBg : inactiveButtonBg}
                color={selectedCategory === category.id ? activeButtonColor : inactiveButtonColor}
                _hover={{
                  bg: selectedCategory === category.id ? activeButtonBg : inactiveButtonBg,
                  transform: "translateY(-2px)",
                }}
                _active={{ transform: "translateY(0)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                borderRadius="full"
                px={4}
              >
                {category.label}
              </MotionButton>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>

      {/* Status Filters */}
      <Flex direction="column" align="center" gap={3} width="full">
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Filter by Status
        </Text>
        <HStack spacing={2} flexWrap="wrap" justify="center">
          {statusFilters.map((status) => (
            <MotionButton
              key={status.id}
              size="sm"
              variant={selectedStatus === status.id ? "solid" : "outline"}
              bg={selectedStatus === status.id ? activeButtonBg : inactiveButtonBg}
              color={selectedStatus === status.id ? activeButtonColor : inactiveButtonColor}
              _hover={{
                bg: selectedStatus === status.id ? activeButtonBg : inactiveButtonBg,
                transform: "translateY(-2px)",
              }}
              _active={{ transform: "translateY(0)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStatusChange(status.id)}
              borderRadius="full"
              px={4}
            >
              {status.label}
            </MotionButton>
          ))}
        </HStack>
      </Flex>

      {/* Results Info & Clear */}
      <HStack spacing={4} align="center">
        <Badge
          borderRadius="full"
          px={3}
          py={1}
          colorScheme="brand"
          fontSize="md"
        >
          {projectCount} {projectCount === 1 ? "project" : "projects"}
        </Badge>

        {hasActiveFilters && (
          <Button
            size="sm"
            variant="ghost"
            colorScheme="gray"
            onClick={clearFilters}
          >
            Clear filters
          </Button>
        )}
      </HStack>
    </Flex>
  );
};

export default ProjectFilters;
