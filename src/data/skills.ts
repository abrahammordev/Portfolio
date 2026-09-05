import type { IconType } from "react-icons";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaLinux,
  FaPhp,
  FaServer,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiChakraui,
  SiDjango,
  SiDotnet,
  SiExpress,
  SiFramer,
  SiGithubactions,
  SiJest,
  SiMongodb,
  SiMoodle,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPlesk,
  SiPostman,
  SiShadcnui,
  SiSolidity,
  SiSpring,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  id: string;
  /** i18n key for the group label */
  labelKey: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "devops",
    labelKey: "skills.groups.devops",
    items: [
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: FaDocker },
      { name: "Docker Compose", icon: FaDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Nginx", icon: SiNginx },
      { name: "Git", icon: FaGitAlt },
      { name: "Coolify", icon: FaServer },
      { name: "Plesk", icon: SiPlesk },
      { name: "AWS", icon: FaAws },
      { name: "AWS Bedrock", icon: FaAws },
    ],
  },
  {
    id: "lms",
    labelKey: "skills.groups.lms",
    items: [
      { name: "Moodle", icon: SiMoodle },
      { name: "ILIAS", icon: FaPhp },
      { name: "PHP", icon: FaPhp },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    id: "frontend",
    labelKey: "skills.groups.frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Vite", icon: SiVite },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    id: "backend",
    labelKey: "skills.groups.backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Java / Spring", icon: SiSpring },
      { name: "Java", icon: FaJava },
      { name: "C# / .NET", icon: SiDotnet },
      { name: "Django", icon: SiDjango },
      { name: "Solidity", icon: SiSolidity },
    ],
  },
  {
    id: "data",
    labelKey: "skills.groups.data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: "testing",
    labelKey: "skills.groups.testing",
    items: [
      { name: "Vitest", icon: SiVitest },
      { name: "Jest", icon: SiJest },
      { name: "Locust", icon: FaPython },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export const marqueeSkills = skillGroups.flatMap((g) => g.items);

export default skillGroups;
