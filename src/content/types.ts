export interface Link {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  bullets: string[];
  tags?: string[];
}

export interface EarlierExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface Project {
  name: string;
  org: string;
  description?: string;
  tags?: string[];
  links?: Link[];
  status?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  institute: string;
  file: string;
}

export interface ContactFormCopy {
  emailLabel: string;
  emailPlaceholder: string;
  emailRequired: string;
  emailInvalid: string;
  nameLabel: string;
  namePlaceholder: string;
  nameRequired: string;
  ideaLabel: string;
  ideaPlaceholder: string;
  ideaRequired: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
}

export interface SiteContent {
  navLabel: string;
  navItems: Link[];
  /** Accessible name of the language toggle group. */
  languageToggleLabel: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
    /** Open Graph locale, e.g. en_US. */
    ogLocale: string;
  };
  hero: {
    title: string;
    /** Full heading for crawlers and screen readers; the giant title is decorative. */
    heading: string;
    description: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  about: {
    eyebrow: string;
    name: string;
    role: string;
    summary: string;
    facts: { label: string; value: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    listLabel: string;
    technologiesLabel: string;
    earlierTitle: string;
    items: ExperienceItem[];
    earlier: EarlierExperienceItem[];
  };
  building: {
    eyebrow: string;
    title: string;
    description: string;
    listLabel: string;
    technologiesLabel: string;
    projects: Project[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    listLabel: string;
    viewLabel: string;
    items: Certification[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    form: ContactFormCopy;
  };
  footer: { backToTop: string };
  whatsappLabel: string;
}
