export type ProjectCategory =
  | "elearning"
  | "ai"
  | "opensource"
  | "web"
  | "blockchain";

export type ProjectStatus = "live" | "maintained" | "archived";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  image?: string;
  /** `contain` for logo-style artwork that must not be cropped. */
  imageFit?: "cover" | "contain";
  /** Additional screenshots rendered in the project detail panel. */
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Extra links rendered inside the detail panel */
  links?: { labelKey: string; url: string }[];
  stack: string[];
  /** Number of `highlights.N` entries available in the i18n bundle */
  highlightCount: number;
  /** Optional role note, e.g. work done at Surlabs */
  contextKey?: string;
}

export const projects: Project[] = [
  {
    id: "opoflash",
    name: "OpoFlash",
    category: "elearning",
    status: "live",
    year: "2024 — now",
    featured: true,
    image: "/opoflash-01.png",
    gallery: [
      "/opoflash-01.png",
      "/opoflash-02.png",
      "/opoflash-03.png",
      "/opoflash-04.png",
      "/opoflash-05.png",
      "/opoflash-06.png",
      "/opoflash-07.png",
      "/opoflash-08.png",
    ],
    liveUrl: "https://dev.opo-flash.com",
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FSRS-5",
      "RAG",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
    highlightCount: 4,
  },
  {
    id: "surcontext",
    name: "SURContext",
    category: "elearning",
    status: "maintained",
    year: "2025 — now",
    featured: true,
    image: "/IliasLogo.webp",
    imageFit: "contain",
    contextKey: "projects.context.surlabs",
    links: [{ labelKey: "projects.links.surlabs", url: "https://github.com/surlabs" }],
    stack: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Celery + Redis",
      "Milvus",
      "Qdrant",
      "MongoDB",
      "Unstructured",
      "sentence-transformers",
      "ILIAS",
      "Moodle",
      "Locust",
    ],
    highlightCount: 5,
  },
  {
    id: "checkeapp",
    name: "Checkeapp",
    category: "ai",
    status: "live",
    year: "2025",
    featured: true,
    image: "/Checkeapp.webp",
    liveUrl: "https://checkeapp.com",
    contextKey: "projects.context.ilenia",
    stack: ["TypeScript", "Next.js", "React", "RAG", "oRPC", "MySQL"],
    highlightCount: 4,
  },
  {
    id: "ilias-survey",
    name: "Survey for ILIAS",
    category: "opensource",
    status: "maintained",
    year: "2025 — now",
    featured: true,
    image: "/IliasLogo.webp",
    imageFit: "contain",
    githubUrl: "https://github.com/surlabs/ILIAS",
    contextKey: "projects.context.surlabs",
    stack: ["PHP", "ILIAS", "MySQL", "GitHub Actions"],
    highlightCount: 4,
  },
  {
    id: "ilias-plugins",
    name: "ILIAS plugin suite",
    category: "opensource",
    status: "maintained",
    year: "2025 — now",
    image: "/StackForILIAS.webp",
    githubUrl: "https://github.com/surlabs",
    contextKey: "projects.context.surlabs",
    links: [
      { labelKey: "STACKForILIAS", url: "https://github.com/surlabs/STACKForILIAS" },
      { labelKey: "AIChatForILIAS", url: "https://github.com/surlabs/AIChatForILIAS" },
      { labelKey: "LiveVotingForILIAS", url: "https://github.com/surlabs/LiveVotingForILIAS" },
    ],
    stack: ["PHP", "ILIAS", "JavaScript", "Composer", "Open Source"],
    highlightCount: 3,
  },
  {
    id: "qardrobe",
    name: "QaRdrobe",
    category: "blockchain",
    status: "archived",
    year: "2025",
    image: "/QaRdrobeImg.webp",
    githubUrl: "https://github.com/abrahammordev/QaRdrobe",
    stack: ["React", "TypeScript", "Supabase", "Solidity", "Polygon", "Hardhat"],
    highlightCount: 3,
  },
  {
    id: "color-ease",
    name: "Color Ease",
    category: "web",
    status: "archived",
    year: "2025",
    image: "/ColorEaseImg.webp",
    githubUrl: "https://github.com/abrahammordev/ColorEase",
    stack: ["JavaScript", "React", "Tailwind CSS", "WCAG"],
    highlightCount: 3,
  },
  {
    id: "todo-app",
    name: "ToDo List",
    category: "web",
    status: "archived",
    year: "2025",
    image: "/TodoApp.webp",
    githubUrl: "https://github.com/abrahammordev/TODOList",
    stack: ["React", "TypeScript", "Firebase", "Firestore"],
    highlightCount: 3,
  },
  {
    id: "airport-manager",
    name: "Airport Manager",
    category: "web",
    status: "archived",
    year: "2024",
    image: "/AeropuertoImg.webp",
    githubUrl: "https://github.com/abrahammordev/AeropuertoGUI",
    stack: ["Java", "Swing", "JDBC", "MySQL"],
    highlightCount: 3,
  },
];

export const projectCategories: { id: "all" | ProjectCategory }[] = [
  { id: "all" },
  { id: "elearning" },
  { id: "ai" },
  { id: "opensource" },
  { id: "web" },
  { id: "blockchain" },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: "all" | ProjectCategory) =>
  category === "all" ? projects : projects.filter((p) => p.category === category);

export default projects;
