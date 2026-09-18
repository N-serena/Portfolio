export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: string
  /** The large second display line in the hero. Keep it short and concrete —
      it is set at the same size as the name, so vague phrasing shows. */
  statement: string
  /** Smaller supporting sentence under the statement. */
  summary: string
  location: string
  languages: string
  interests: string[]
  email?: string
  resumeHref?: string
  socials: SocialLink[]
}

export type Experience = {
  role: string
  company: string
  /** Free text, e.g. "Jun 2023 — Aug 2023". Shown as written. */
  period: string
  highlights: string[]
  companyHref?: string
}

export type Project = {
  title: string
  description: string
  stack: string[]
  /** Omit for work with nothing public to link to. */
  link?: string
  /** Imported image module, not a path string. */
  image?: string
  /** Gives the project a wider tile in the grid. */
  featured?: boolean
  year?: string
}

export type Certification = {
  name: string
  issuer: string
  year?: string
  link?: string
}

export type SkillGroup = {
  label: string
  items: string[]
}
