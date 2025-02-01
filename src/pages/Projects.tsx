import { Container, SimpleGrid, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import TechnologiesSection from "../components/ProjectsComponents/Technologies";
import ProjectCard from "../components/ProjectsComponents/ProjectCard";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Web Portfolio",
            description: "Proyecto creado para mostrar habilidades técnicas así como tenologías conocidas y proyectos en los que he trabajado.",
            technologies: [
                { name: "TypeScript", icon: <i className="devicon-typescript-plain"></i> },
                { name: "React", icon: <i className="devicon-react-original"></i> },
                { name: "Vite", icon: <i className="devicon-vite-plain"></i> },
                { name: "Tailwind", icon: <i className="devicon-tailwind-plain"></i> },
                { name: "Chakra UI", icon: <i className="devicon-chakra-ui-plain"></i> },
            ],
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "#",
        },
        {
            title: "Color Ease",
            description: "Proyecto creado para ayudar a los diseñadores a encontrar combinaciones de colores para sus proyectos.",
            technologies: [
                { name: "JavaScript", icon: <i className="devicon-javascript-plain"></i> },
                { name: "React", icon: <i className="devicon-react-original"></i> },
                { name: "CSS Modules", icon: <i className="devicon-css3-plain"></i> },
            ],
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "https://color-ease.vercel.app/",
        },
        {
            title: "Airport Manager",
            description: "Proyecto creado para gestionar los vuelos de un aeropuerto en forma de CRUD conectado al backend a través de JDBC y usando JSwing para crear una interfaz gráfica en forma de aplicación de escritorio.", 
            technologies: [
                { name: "Java", icon: <i className="devicon-java-original"></i> },
                { name: "Swing", icon: <i className="devicon-java-plain"></i> },
                { name: "MySQL", icon: <i className="devicon-mysql-plain"></i> },
            ],
            imageUrl: "https://via.placeholder.com/300",
            projectUrl: "https://github.com/abrahammordev/AeropuertoGUI",
        },
        {
            title: "QaRdrobe",
            description: "Landing page de herramienta para revolucionar la industria textil y la forma en la que se trata la  ropa  en  el  mundo.  Con  la  ayuda  de  la  tecnología  y  la  inteligencia  artificial,  QaRdrobe  busca  cambiar  la  forma  en  la  que  las  personas  compran,  venden  y  usan  ropa.",
            technologies: [
                { name: "Framer", icon: <i className="devicon-framer-original"></i> },
                { name: "Trello", icon: <i className="devicon-trello-plain"></i> },
            ],
            imageUrl: "https://qardrobe.com",
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
                    Proyectos Destacados
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
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
