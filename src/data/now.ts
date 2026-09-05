export interface NowItem {
  id: string;
  titleKey: string;
  descKey: string;
  tag: string;
}

/** "What I'm working on right now" — surfaced on the home page. */
export const nowItems: NowItem[] = [
  { id: "survey", titleKey: "now.survey.title", descKey: "now.survey.desc", tag: "ILIAS" },
  { id: "rag", titleKey: "now.rag.title", descKey: "now.rag.desc", tag: "ILIAS & Moodle × RAG" },
  { id: "release", titleKey: "now.release.title", descKey: "now.release.desc", tag: "CI/CD" },
  { id: "load", titleKey: "now.load.title", descKey: "now.load.desc", tag: "Locust" },
  { id: "opoflash", titleKey: "now.opoflash.title", descKey: "now.opoflash.desc", tag: "OpoFlash" },
];

export default nowItems;
