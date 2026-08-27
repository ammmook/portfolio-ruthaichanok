/** Every language the site can render. */
export type Language = "en" | "th";

/** Colour themes the site can render. */
export type Theme = "dark" | "light";

/** A single piece of copy, written once per supported language. */
export type LocalizedText = Record<Language, string>;

/** A list of copy (bullet points, paragraphs), written once per language. */
export type LocalizedList = Record<Language, string[]>;

export interface PersonalInformation {
  fullName: string;
  brandName: string;
  role: LocalizedText;
  roleLine: string;
  location: LocalizedText;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  resumeUrl: string;
  resumeFileName: string;
  introduction: LocalizedText;
}

export interface NavigationItem {
  /** Section id used for in-page anchors, e.g. "about" -> "#about". */
  id: string;
  label: LocalizedText;
}

export interface AboutHighlight {
  mark: string;
  accent: "primary" | "secondary";
  title: LocalizedText;
  description: LocalizedText;
}

export type SkillLevel =
  | "Proficient"
  | "Comfortable"
  | "Familiar"
  | "Frequently used"
  | "Hands-on experience";

export interface TechnicalSkill {
  name: string;
  /** simple-icons slug, or null when no icon exists (initials are shown). */
  iconSlug: string | null;
  category: LocalizedText;
  description: LocalizedText;
  level: SkillLevel;
}

export interface TechnicalSkillGroup {
  title: LocalizedText;
  items: TechnicalSkill[];
}

export interface SoftSkill {
  mark: string;
  name: LocalizedText;
  description: LocalizedText;
}

export interface TimelineEntry {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  organization: LocalizedText;
  bullets: LocalizedList;
  highlights: LocalizedList;
  technologies: string[];
}

export interface LearningTopic {
  iconSlug: string | null;
  initials: string;
  name: LocalizedText;
  description: LocalizedText;
}

export interface GithubHighlight {
  repository: string;
  description: LocalizedText;
  languageLabel: string;
  languageColor: string;
  url: string;
}

export interface ProjectStackItem {
  name: string;
  iconSlug: string | null;
  role: LocalizedText;
  usage: LocalizedText;
}

export interface ProjectStackGroup {
  title: LocalizedText;
  items: ProjectStackItem[];
}

export interface KeyValueEntry {
  key: LocalizedText;
  value: LocalizedText;
}

export interface NumberedEntry {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface FeatureEntry {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ChallengeEntry {
  challenge: LocalizedText;
  investigation: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
}

export interface TakeawayEntry {
  key: LocalizedText;
  description: LocalizedText;
}

export interface RoadmapPhase {
  phase: LocalizedText;
  items: LocalizedList;
}

export interface Project {
  /** URL segment for /projects/[slug]. */
  slug: string;
  name: LocalizedText;
  shortName: LocalizedText;
  year: string;
  status: LocalizedText;
  category: LocalizedText;
  /** Filter labels this project belongs to (must exist in projectFilters). */
  filters: string[];
  blurb: LocalizedText;
  tagline: LocalizedText;
  /** Hue used by the generated placeholder artwork. */
  hue: number;
  coverLabel: LocalizedText;
  technologies: string[];
  liveUrl: string;
  repositoryUrl: string;
  meta: KeyValueEntry[];
  stack: ProjectStackGroup[];
  overviewTitle: LocalizedText;
  overview: LocalizedList;
  users: LocalizedText;
  problemTitle: LocalizedText;
  problems: LocalizedList;
  goals: NumberedEntry[];
  solutionTitle: LocalizedText;
  solution: LocalizedText;
  flow: NumberedEntry[];
  features: FeatureEntry[];
  screenshots: LocalizedList;
  architecture: NumberedEntry[];
  process: NumberedEntry[];
  challenges: ChallengeEntry[];
  results: LocalizedList;
  learned: TakeawayEntry[];
  future: RoadmapPhase[];
}

/** Education entries share the timeline shape used by work experience. */
export type EducationEntry = TimelineEntry;
