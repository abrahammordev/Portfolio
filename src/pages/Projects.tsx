import { Container, SimpleGrid, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import TechnologiesSection from "../components/ProjectsComponents/Technologies";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";
import AirportImg from "../assets/AeropuertoImg.webp";
import ColorEaseImg from "../assets/ColorEaseImg.webp";
import QaRdrobeImg from "../assets/QaRdrobeImg.webp";
import PortfolioImg from "../assets/PortfolioImg.webp";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t("Project1Title"),
            description: t("Project1Description"),
            technologies: [
                { name: "TypeScript", icon: <i className="devicon-typescript-plain"></i> },
                { name: "React", icon: <i className="devicon-react-original"></i> },
                { name: "Vite", icon: <i className="devicon-vite-plain"></i> },
                { name: "Tailwind", icon: <i className="devicon-tailwind-plain"></i> },
                { name: "Chakra UI", icon: <i className="devicon-chakra-ui-plain"></i> },
            ],
            imageUrl: PortfolioImg,
            projectUrl: "#",
        },
        {
            title: t("Project2Title"),
            description: t("Project2Description"),
            technologies: [
                { name: "JavaScript", icon: <i className="devicon-javascript-plain"></i> },
                { name: "React", icon: <i className="devicon-react-original"></i> },
                { name: "CSS Modules", icon: <i className="devicon-css3-plain"></i> },
            ],
            imageUrl: ColorEaseImg,
            projectUrl: "https://color-ease.vercel.app/",
        },
        {
            title: t("Project3Title"),
            description: t("Project3Description"),
            technologies: [
                { name: "Java", icon: <i className="devicon-java-original"></i> },
                { name: "Swing", icon: <i className="devicon-java-plain"></i> },
                { name: "MySQL", icon: <i className="devicon-mysql-plain"></i> },
            ],
            imageUrl: AirportImg,
            projectUrl: "https://github.com/abrahammordev/AeropuertoGUI",
        },
        {
            title: t("Project4Title"),
            description: t("Project4Description"),
            technologies: [
                { name: "Framer", icon: <i className="devicon-framer-original"></i> },
                { name: "Trello", icon: <i className="devicon-trello-plain"></i> },
            ],
            imageUrl: QaRdrobeImg,
            projectUrl: "https://qardrobe.com",
        },

    ];

    return (
        <Box>
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
                    columns={{ base: 1, md: 2, lg: 2 }}
                    spacing={5}
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
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Projects;
