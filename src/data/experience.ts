export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  current?: boolean;
  /** i18n keys resolved at render time */
  roleKey: string;
  periodKey: string;
  summaryKey: string;
  bulletKeys: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "surlabs-devops",
    company: "Surlabs",
    companyUrl: "https://surlabs.com",
    current: true,
    roleKey: "experience.surlabsDevops.role",
    periodKey: "experience.surlabsDevops.period",
    summaryKey: "experience.surlabsDevops.summary",
    bulletKeys: [
      "experience.surlabsDevops.b1",
      "experience.surlabsDevops.b2",
      "experience.surlabsDevops.b3",
      "experience.surlabsDevops.b4",
      "experience.surlabsDevops.b5",
    ],
    stack: ["Docker", "GitHub Actions", "PHP", "Moodle", "ILIAS", "Linux", "Locust", "RAG"],
  },
  {
    id: "surlabs-dev",
    company: "Surlabs",
    companyUrl: "https://surlabs.com",
    roleKey: "experience.surlabsDev.role",
    periodKey: "experience.surlabsDev.period",
    summaryKey: "experience.surlabsDev.summary",
    bulletKeys: [
      "experience.surlabsDev.b1",
      "experience.surlabsDev.b2",
    ],
    stack: ["TypeScript", "Next.js", "React", "Express", "PostgreSQL", "RAG"],
  },
  {
    id: "opoflash",
    company: "OpoFlash",
    companyUrl: "https://dev.opo-flash.com",
    current: true,
    roleKey: "experience.opoflash.role",
    periodKey: "experience.opoflash.period",
    summaryKey: "experience.opoflash.summary",
    bulletKeys: [
      "experience.opoflash.b1",
      "experience.opoflash.b2",
    ],
    stack: ["Next.js", "Python", "FSRS-5", "Docker", "PostgreSQL", "Nginx"],
  },
];

export interface EducationItem {
  id: string;
  titleKey: string;
  placeKey: string;
  periodKey: string;
}

export const education: EducationItem[] = [
  {
    id: "daw",
    titleKey: "education.daw.title",
    placeKey: "education.daw.place",
    periodKey: "education.daw.period",
  },
  {
    id: "cae",
    titleKey: "education.cae.title",
    placeKey: "education.cae.place",
    periodKey: "education.cae.period",
  },
];

export default experience;
