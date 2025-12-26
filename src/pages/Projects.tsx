import { Container, SimpleGrid, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import TechnologiesSection from "../components/ProjectsComponents/Technologies";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";
import { useTranslation } from "react-i18next";
import { 
    SiReact, SiTypescript, SiNextdotjs, SiPython, SiDocker, 
    SiPostgresql, SiOpenai, SiPhp, SiChakraui, SiTailwindcss,
    SiVite, SiNodedotjs, SiSupabase, SiSolidity, SiPolygon, SiFramer,
    SiMysql, SiTurborepo, SiFirebase
} from "react-icons/si";
import { FaDatabase, FaGithub, FaJava } from "react-icons/fa";

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "OpoFlash",
            description: t("ProjectOpoFlashDesc"),
            technologies: [
                { name: "React", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
            ],
            imageUrl: "/OpoFlash.webp",
            projectUrl: "https://app.opo-flash.com",
        },
        {
            title: "CheckeApp",
            description: t("ProjectCheckeAppDesc"),
            technologies: [
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Turborepo", icon: <SiTurborepo /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "AI Verification", icon: <SiOpenai /> },
            ],
            imageUrl: "/Checkeapp.webp",
            projectUrl: "https://checkeapp.com",
            githubUrl: "https://github.com/checkeapp-group/CheckeApp",
        },
        {
            title: "STACKForILIAS (Open Source)",
            description: t("ProjectStackDesc"),
            technologies: [
                { name: "PHP", icon: <SiPhp /> },
                { name: "ILIAS LMS", icon: <FaDatabase /> },
                { name: "Open Source", icon: <FaGithub /> },
            ],
            imageUrl: "/StackForILIAS.webp", 
            githubUrl: "https://github.com/surlabs/STACKForILIAS",
        },
        {
            title: "QaRdrobe",
            description: t("ProjectQaRdrobeDesc"),
            technologies: [
                { name: "React", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Supabase", icon: <SiSupabase /> },
                { name: "Solidity", icon: <SiSolidity /> },
                { name: "Polygon", icon: <SiPolygon /> },
                { name: "TypeScript", icon: <SiTypescript /> },
            ],
            imageUrl: "/QaRdrobeImg.webp", 
            projectUrl: "https://qardrobe.onrender.com/api-docs/", 
            githubUrl: "https://github.com/ieshm-2daw/proyectointegrado-abrahammordev.git",
        },
        {
            title: "Color Ease",
            description: t("Project2Description"),
            technologies: [
                { name: "JavaScript", icon: <SiTypescript /> },
                { name: "React", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
            ],
            imageUrl: "/ColorEaseImg.webp",
            githubUrl: "https://github.com/abrahammordev/Color-Ease",
        },
        {
            title: "Airport Manager",
            description: t("Project3Description"),
            technologies: [
                { name: "Java", icon: <FaJava /> },
                { name: "MySQL", icon: <SiMysql /> },
            ],
            imageUrl: "/AeropuertoImg.webp",
            githubUrl: "https://github.com/abrahammordev/AirportManager",
        },
        {
            title: "ToDo List",
            description: t("Project5Description"),
            technologies: [
                { name: "React", icon: <SiReact /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
            ],
            imageUrl: "/TodoApp.webp",
            githubUrl: "https://github.com/abrahammordev/Todo-App",
        },
        {
            title: "Personal Portfolio",
            description: t("ProjectPortfolioDesc"),
            technologies: [
                { name: "React", icon: <SiReact /> },
                { name: "Vite", icon: <SiVite /> },
                { name: "Chakra UI", icon: <SiChakraui /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "Framer Motion", icon: <SiFramer /> },
            ],
            imageUrl: "/PortfolioImg.webp", 
            projectUrl: "#",
            githubUrl: "https://github.com/abrahammordev/Portfolio", 
        },
    ];

    return (
        <Box pb={{ base: "100px", md: "40px" }}>
            <TechnologiesSection />
            <Container maxW="container.xl" py={16}>
                <Heading
                    as="h2"
                    textAlign="center"
                    mb={12}
                    fontSize="4xl"
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    {t("ProjectHeader")}
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={8}
                    px={{ base: 4, md: 0 }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            githubUrl={project.githubUrl} 
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Projects;
