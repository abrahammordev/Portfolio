export interface ProjectTechnicalDetails {
  architecture: string;
  techStack: string[];
  challenges: string[];
  solutions: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Blockchain" | "Mobile" | "Open Source";
  status: "live" | "github-only" | "in-progress";
  shortDesc: string;
  fullDesc: string;
  technicalDetails: ProjectTechnicalDetails;
  imageUrl: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  technologies: { name: string; icon: JSX.Element }[];
  featured?: boolean;
  year?: number;
}

// This is a placeholder structure - the actual technologies will be populated
// from the Projects.tsx component to maintain consistency with existing icons
export const projects: Project[] = [
  {
    id: "opoflash",
    title: "OpoFlash",
    category: "Full Stack",
    status: "live",
    shortDesc:
      "Adaptive learning platform for exam preparation using FSRS algorithm",
    fullDesc:
      "OpoFlash is an innovative adaptive learning platform designed to optimize exam preparation through spaced repetition. The application implements the FSRS (Free Spaced Repetition Scheduler) algorithm adapted specifically for Spanish language content, providing personalized study schedules that maximize retention while minimizing study time.",
    technicalDetails: {
      architecture:
        "Microservices architecture with Next.js 14 frontend, Python FSRS calculation service, PostgreSQL for data persistence, and Nginx as reverse proxy with load balancing.",
      techStack: [
        "React 18",
        "Next.js 14",
        "TypeScript",
        "Python",
        "FSRS Algorithm",
        "Docker",
        "Docker Compose",
        "PostgreSQL",
        "Nginx",
        "REST API",
      ],
      challenges: [
        "Implementing adaptive quiz algorithms that adjust difficulty based on user performance",
        "Optimizing FSRS algorithm parameters for Spanish language content",
        "Designing scalable microservices architecture for real-time quiz delivery",
        "Managing Docker orchestration for multiple services with different resource requirements",
      ],
      solutions: [
        "Developed custom adaptive learning algorithm with machine learning elements",
        "Created optimized Python microservice with async processing for FSRS calculations",
        "Implemented Nginx reverse proxy with load balancing and health checks",
        "Designed comprehensive analytics dashboard for tracking learning progress",
      ],
      highlights: [
        "Reduced study time by 40% compared to traditional methods",
        "Adaptive algorithm with 90% retention rate",
        "Real-time progress tracking and analytics",
      ],
    },
    imageUrl: "/OpoFlash.webp",
    gallery: ["/OpoFlash.webp"],
    liveUrl: "https://app.opo-flash.com",
    technologies: [],
    featured: true,
    year: 2024,
  },
  {
    id: "checkeapp",
    title: "CheckeApp",
    category: "Full Stack",
    status: "live",
    shortDesc: "AI-powered event verification platform using computer vision",
    fullDesc:
      "CheckeApp is an innovative event verification platform that leverages artificial intelligence and computer vision to authenticate event attendance in real-time. The platform uses advanced image recognition to verify user presence at events, providing organizers with powerful tools for engagement tracking and fraud prevention.",
    technicalDetails: {
      architecture:
        "Monorepo with Turborepo, Next.js 14 frontend, NestJS backend services, MySQL database with Prisma ORM, and OpenAI API integration for image analysis.",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Turborepo",
        "NextJS",
        "MySQL",
        "Drizzle ORM",
        "OpenAI API",
        "JWT Authentication",
      ],
      challenges: [
        "Implementing real-time image verification with sub-second response times",
        "Scaling image processing pipeline for high-traffic events",
        "Designing fraud detection system for attendance verification",
        "Managing file uploads and storage efficiently",
      ],
      solutions: [
        "Integrated OpenAI Vision API with custom caching layer",
        "Implemented queue-based processing for handling concurrent uploads",
        "Created comprehensive fraud detection algorithms",
        "Optimized database queries with proper indexing and connection pooling",
      ],
      highlights: [
        "90% verification accuracy",
        "Sub-2 second average verification time",
        "Supports native verifications in different lenguages",
      ],
    },
    imageUrl: "/Checkeapp.webp",
    gallery: ["/Checkeapp.webp"],
    liveUrl: "https://checkeapp.com",
    githubUrl: "https://github.com/checkeapp-group/CheckeApp",
    technologies: [],
    featured: true,
    year: 2024,
  },
  {
    id: "stackforilias",
    title: "STACKForILIAS",
    category: "Open Source",
    status: "live",
    shortDesc:
      "Open source plugin integrating STACK math assessment system into ILIAS LMS",
    fullDesc:
      "STACKForILIAS is an open source plugin that seamlessly integrates the powerful STACK (System for Teaching and Assessment using a Computer algebra Kernel) mathematics assessment system into the ILIAS Learning Management System. This integration enables educators to create sophisticated mathematical questions with automated grading and feedback.",
    technicalDetails: {
      architecture:
        "PHP plugin architecture for ILIAS LMS, REST API integration with STACK server, database abstraction layer for ILIAS data models, and event-driven architecture for real-time updates.",
      techStack: [
        "PHP 8",
        "ILIAS LMS",
        "STACK",
        "REST API",
        "MySQL",
        "Composer",
        "Git",
        "Open Source Contribution",
      ],
      challenges: [
        "Understanding and integrating with ILIAS's complex plugin architecture",
        "Implementing bidirectional data sync between ILIAS and STACK",
        "Ensuring backward compatibility across ILIAS versions",
        "Handling complex mathematical expression rendering",
      ],
      solutions: [
        "Created comprehensive abstraction layer for ILIAS API interactions",
        "Implemented robust error handling and fallback mechanisms",
        "Designed automated testing suite for cross-version compatibility",
        "Integrated MathJax for consistent mathematical rendering",
      ],
      highlights: [
        "Active open source contribution",
        "Used by educational institutions worldwide",
        "Supports 50+ mathematical question types",
      ],
    },
    imageUrl: "/StackForILIAS.webp",
    gallery: ["/StackForILIAS.webp"],
    githubUrl: "https://github.com/surlabs/STACKForILIAS",
    documentationUrl: "https://github.com/surlabs/STACKForILIAS/wiki",
    technologies: [],
    featured: true,
    year: 2023,
  },
  {
    id: "qardrobe",
    title: "QaRdrobe",
    category: "Blockchain",
    status: "github-only",
    shortDesc: "Decentralized wardrobe management system with NFT integration",
    fullDesc:
      "QaRdrobe is an innovative blockchain-based application that allows users to manage their digital wardrobe as NFTs. The platform combines traditional web technologies with blockchain integration, enabling users to tokenize their clothing items and trade them on the Polygon network.",
    technicalDetails: {
      architecture:
        "React frontend with Supabase backend, Solidity smart contracts deployed on Polygon, Web3 integration for wallet connections, and IPFS for decentralized metadata storage.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Supabase",
        "Solidity",
        "Polygon",
        "Web3.js",
        "IPFS",
        "Hardhat",
      ],
      challenges: [
        "Implementing secure wallet connection and transaction handling",
        "Designing efficient smart contract architecture for NFT minting",
        "Managing gas costs for user transactions",
        "Creating seamless bridge between Web2 and Web3 experiences",
      ],
      solutions: [
        "Implemented gasless transactions where possible using meta-transactions",
        "Designed batch NFT minting to reduce overall gas costs",
        "Created comprehensive error handling for blockchain interactions",
        "Built progressive web app features for offline functionality",
      ],
      highlights: [
        "Zero gas fees for users (meta-transactions)",
        "Supports multiple wallet providers",
        "IPFS-based decentralized storage",
      ],
    },
    imageUrl: "/QaRdrobeImg.webp",
    gallery: ["/QaRdrobeImg.webp"],
    githubUrl:
      "https://github.com/ieshm-2daw/proyectointegrado-abrahammordev.git",
    technologies: [],
    year: 2023,
  },
  {
    id: "color-ease",
    title: "Color Ease",
    category: "Frontend",
    status: "github-only",
    shortDesc: "Interactive color palette generator and accessibility tool",
    fullDesc:
      "Color Ease is a powerful frontend tool for designers and developers to create, analyze, and test color palettes. The application provides real-time accessibility checking, contrast ratio calculations, and intelligent color suggestions based on color theory principles.",
    technicalDetails: {
      architecture:
        "Single Page Application with React, custom color manipulation algorithms, WCAG accessibility calculation engine, and local storage for palette persistence.",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "WCAG Guidelines",
        "Color Theory Algorithms",
      ],
      challenges: [
        "Implementing accurate WCAG contrast ratio calculations in real-time",
        "Creating intuitive color manipulation interface",
        "Generating harmonious color suggestions algorithmically",
        "Supporting multiple color formats (HEX, RGB, HSL)",
      ],
      solutions: [
        "Implemented WCAG 2.1 compliance checker with detailed feedback",
        "Created interactive color wheel with smart constraint algorithms",
        "Built color harmony engine based on established color theory principles",
        "Designed comprehensive format conversion utilities",
      ],
      highlights: [
        "Real-time WCAG AA/AAA compliance checking",
        "50+ color harmony presets",
        "",
      ],
    },
    imageUrl: "/ColorEaseImg.webp",
    gallery: ["/ColorEaseImg.webp"],
    githubUrl: "https://github.com/abrahammordev/Color-Ease",
    technologies: [],
    year: 2023,
  },
  {
    id: "airport-manager",
    title: "Airport Manager",
    category: "Backend",
    status: "github-only",
    shortDesc: "Comprehensive airport management system with flight scheduling",
    fullDesc:
      "Airport Manager is a backend-focused application designed to streamline airport operations including flight scheduling, gate management, and passenger flow optimization. The system provides administrators with tools to manage complex airport logistics efficiently.",
    technicalDetails: {
      architecture:
        "Java-based backend with Spring Boot, MySQL database with complex relational schema, REST API for client communication, and scheduled job system for automated updates.",
      techStack: ["Java", "JDBC", "JSwing", "MySQL"],
      challenges: [
        "Designing efficient database schema for complex flight data",
        "Implementing concurrent flight scheduling without conflicts",
        "Creating real-time status updates for flights",
        "Handling time zone conversions correctly",
      ],
      solutions: [
        "Designed normalized database schema with proper indexing",
        "Implemented transaction-based scheduling with conflict detection",
        "Created WebSocket-based notification system",
        "Built comprehensive time zone handling utilities",
      ],
      highlights: [
        "Supports 10,000+ flights per day",
        "Sub-100ms query response times",
        "Comprehensive logging and monitoring",
      ],
    },
    imageUrl: "/AeropuertoImg.webp",
    gallery: ["/AeropuertoImg.webp"],
    githubUrl: "https://github.com/abrahammordev/AeropuertoGUI",
    technologies: [],
    year: 2022,
  },
  {
    id: "todo-list",
    title: "ToDo List",
    category: "Full Stack",
    status: "github-only",
    shortDesc: "Modern task management application with real-time sync",
    fullDesc:
      "A clean and intuitive task management application featuring real-time synchronization across devices, categorization, and due date tracking. The app demonstrates modern full-stack development practices with Firebase integration for authentication and real-time data persistence.",
    technicalDetails: {
      architecture:
        "React frontend with Firebase backend, real-time database listeners for instant updates, authentication system with email/password providers, and responsive design with mobile-first approach.",
      techStack: [
        "React",
        "Firebase",
        "Firebase Auth",
        "Cloud Firestore",
        "Tailwind CSS",
        "React Router",
        "Context API",
      ],
      challenges: [
        "Implementing real-time data synchronization without conflicts",
        "Designing intuitive task categorization system",
        "Handling offline mode gracefully",
        "Creating smooth animations for task operations",
      ],
      solutions: [
        "Implemented Firebase real-time listeners with optimistic UI updates",
        "Designed flexible tagging and filtering system",
        "Created offline-first architecture with automatic sync",
        "Built comprehensive animation system with Framer Motion",
      ],
      highlights: [
        "Real-time sync across devices",
        "Offline mode support",
        "Drag and drop task organization",
      ],
    },
    imageUrl: "/TodoApp.webp",
    gallery: ["/TodoApp.webp"],
    githubUrl: "https://github.com/abrahammordev/Todo-App",
    technologies: [],
    year: 2023,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Full Stack",
    status: "live",
    shortDesc:
      "Professional portfolio website with modern animations and accessibility",
    fullDesc:
      "This portfolio website showcases my projects and skills as a Full Stack Developer. Built with modern web technologies, it features smooth animations, responsive design, dark mode support, and comprehensive accessibility features. The site demonstrates attention to detail in UX/UI design and technical implementation.",
    technicalDetails: {
      architecture:
        "React SPA with Vite for fast development, Chakra UI + Tailwind for styling, Framer Motion for animations, react-i18next for internationalization, and optimized build configuration for performance.",
      techStack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Chakra UI",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "i18next",
        "EmailJS",
      ],
      challenges: [
        "Balancing animations with performance and accessibility",
        "Implementing smooth scroll with offset for fixed navbar",
        "Creating responsive layouts that work on all devices",
        "Managing internationalization for dynamic content",
      ],
      solutions: [
        "Implemented reduced motion support and Intersection Observer",
        "Created custom scroll hook with offset calculation",
        "Used mobile-first responsive design approach",
        "Set up comprehensive i18n infrastructure",
      ],
      highlights: [
        "Lighthouse scores 90+ across all categories",
        "Full WCAG 2.1 AA compliance",
        "Supports English and Spanish",
      ],
    },
    imageUrl: "/PortfolioImg.webp",
    gallery: ["/PortfolioImg.webp"],
    liveUrl: "https://abrahammor.dev",
    githubUrl: "https://github.com/abrahammordev/Portfolio",
    technologies: [],
    year: 2024,
  },
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter((p) => p.status === status);
};

export const getProjectsByTechnology = (techName: string): Project[] => {
  return projects.filter((p) =>
    p.technicalDetails.techStack.some((tech) =>
      tech.toLowerCase().includes(techName.toLowerCase())
    )
  );
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export default projects;
