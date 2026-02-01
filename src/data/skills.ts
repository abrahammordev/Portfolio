import {
  FaPython,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaPhp,
  FaLinux,
  FaJava,
  FaReact,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiPostgresql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiSolana,
  SiOpenai,
  SiNginx,
  SiDjango,
  SiJest,
  SiFirebase,
  SiVite,
  SiSolidity,
  SiGithubactions,
  SiFigma,
  SiPostman,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}

export const skills = {
  languages: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJs },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "PHP", icon: FaPhp },
    { name: "Solidity", icon: SiSolidity },
  ],

  frontend: [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Chakra UI", icon: SiChakraui },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Django", icon: SiDjango },
    { name: "Prisma", icon: SiPrisma },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
  ],

  testingAi: [
    { name: "Jest", icon: SiJest },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Solana", icon: SiSolana },
  ],

  devOps: [
    { name: "Docker", icon: FaDocker },
    { name: "Nginx", icon: SiNginx },
    { name: "AWS", icon: FaAws },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Git", icon: FaGitAlt },
    { name: "Linux", icon: FaLinux },
  ],

  tools: [
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
  ],
};

export const skillCategories = [
  { id: "languages", name: "Languages", items: skills.languages },
  { id: "frontend", name: "Frontend", items: skills.frontend },
  { id: "backend", name: "Backend", items: skills.backend },
  { id: "testingAi", name: "Testing & AI", items: skills.testingAi },
  { id: "devOps", name: "DevOps & Tools", items: skills.devOps },
  { id: "tools", name: "Tools", items: skills.tools },
];

export const allSkills = Object.values(skills).flat();

export default skills;
