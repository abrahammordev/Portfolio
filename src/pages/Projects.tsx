import {
  Container,
  SimpleGrid,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TechnologiesSection from "../components/ProjectsComponents/Technologies";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";
import ProjectFilters from "../components/ProjectsComponents/ProjectFilters";
import ProjectModal from "../components/ProjectsComponents/ProjectModal";
import { useTranslation } from "react-i18next";
import { useState, useMemo } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiOpenai,
  SiPhp,
  SiChakraui,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiSupabase,
  SiSolidity,
  SiPolygon,
  SiFramer,
  SiMysql,
  SiTurborepo,
  SiFirebase,
} from "react-icons/si";
import { FaDatabase, FaGithub, FaJava } from "react-icons/fa";
import { projects as projectsData } from "../data/projects";
import { FilterState } from "../components/ProjectsComponents/ProjectFilters";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    status: "all",
  });
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Merge projects data with technology icons from existing code
  const projects = useMemo(() => {
    const techIcons: Record<string, JSX.Element> = {
      React: <SiReact />,
      TypeScript: <SiTypescript />,
      "Next.js": <SiNextdotjs />,
      Python: <SiPython />,
      Docker: <SiDocker />,
      PostgreSQL: <SiPostgresql />,
      "OpenAI API": <SiOpenai />,
      PHP: <SiPhp />,
      "Chakra UI": <SiChakraui />,
      Tailwind: <SiTailwindcss />,
      Vite: <SiVite />,
      "Node.js": <SiNodedotjs />,
      Supabase: <SiSupabase />,
      Solidity: <SiSolidity />,
      Polygon: <SiPolygon />,
      "Framer Motion": <SiFramer />,
      MySQL: <SiMysql />,
      Turborepo: <SiTurborepo />,
      Firebase: <SiFirebase />,
      Java: <FaJava />,
      "ILIAS LMS": <FaDatabase />,
      "Open Source": <FaGithub />,
    };

    return projectsData.map((project) => ({
      ...project,
      technologies: project.technicalDetails.techStack.map((tech) => ({
        name: tech,
        icon: techIcons[tech] || null,
      })),
    }));
  }, []);

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        filters.category === "all" ||
        project.category.toLowerCase() === filters.category.toLowerCase();
      const statusMatch =
        filters.status === "all" || project.status === filters.status;
      return categoryMatch && statusMatch;
    });
  }, [filters, projects]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleViewDetails = (project: typeof projectsData[0]) => {
    // Find the full project with technologies populated
    const fullProject = projects.find((p) => p.id === project.id);
    if (fullProject) {
      setSelectedProject(fullProject);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box pb={{ base: "100px", md: "40px" }}>
      <TechnologiesSection />
      <Container maxW="container.xl" py={8}>
        <Heading
          as="h2"
          textAlign="center"
          mb={8}
          fontSize="4xl"
          color={useColorModeValue("gray.600", "gray.300")}
        >
          {t("ProjectHeader")}
        </Heading>

        {/* Filters */}
        <Box mb={12} px={{ base: 4, md: 0 }}>
          <ProjectFilters
            onFilterChange={handleFilterChange}
            projectCount={filteredProjects.length}
          />
        </Box>

        {/* Projects Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          px={{ base: 4, md: 0 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDesc}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              projectUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              category={project.category}
              status={project.status}
              onViewDetails={() => handleViewDetails(project)}
              index={index}
            />
          ))}
        </SimpleGrid>

        {filteredProjects.length === 0 && (
          <Box
            textAlign="center"
            py={12}
            color={useColorModeValue("gray.500", "gray.400")}
          >
          </Box>
        )}
      </Container>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};

export default Projects;
