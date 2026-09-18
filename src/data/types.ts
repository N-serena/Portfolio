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
  /** One or two sentences. Shown directly under the name. */
  summary: string
  location: string
  languages: string
  interests: string[]
  email?: string
  resumeHref?: string
  socials: SocialLink[]
}
