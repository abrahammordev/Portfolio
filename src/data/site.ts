export const site = {
  name: "Abraham Morales Rodríguez",
  shortName: "Abraham Morales",
  initials: "AM",
  url: "https://abrahammor.dev",
  location: "Seville, Spain",
  email: "abrahammordev@gmail.com",
  phone: "+34 634 617 478",
  phoneHref: "+34634617478",
  /**
   * Two CVs, positioned differently: the English one leads with DevOps &
   * e-learning systems, the Spanish one with full-stack and e-learning.
   * German visitors get the English CV.
   */
  cv: {
    en: "/AbrahamMoralesCV.pdf",
    es: "/AbrahamMoralesCV-es.pdf",
    de: "/AbrahamMoralesCV.pdf",
  } as Record<string, string>,
  company: { name: "Surlabs", url: "https://surlabs.com" },
  socials: {
    github: "https://github.com/abrahammordev",
    linkedin: "https://www.linkedin.com/in/abrahammordev",
    surlabs: "https://github.com/surlabs",
  },
} as const;

/** Figures below are taken straight from the CV — keep them in sync. */
export const stats = [
  { id: "backlog", value: "40%", labelKey: "stats.backlog" },
  { id: "accuracy", value: "95%", labelKey: "stats.accuracy" },
  { id: "environments", value: "30%", labelKey: "stats.environments" },
  { id: "lms", value: "2", labelKey: "stats.lms" },
] as const;

/** Resolves the CV for the active language, falling back to English. */
export function cvHref(language: string | undefined): string {
  const lang = language?.slice(0, 2) ?? "en";
  return site.cv[lang] ?? site.cv.en;
}

/** Filename offered to the browser, so downloads are not all named the same. */
export function cvFileName(language: string | undefined): string {
  return cvHref(language).replace(/^\//, "");
}

export default site;
