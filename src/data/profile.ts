import type { Profile } from './types'

/* Edit this file to update the hero and about section.
   Nothing here is referenced by class name or index — reorder freely. */

export const profile: Profile = {
  name: 'Serena Noboudem',
  role: 'Software Engineer',
  statement: 'I build scalable systems across AI/ML and cloud.',
  summary:
    'Interested in system design, and in the kind of collaboration that makes teams better than the sum of their parts.',
  location: 'Atlanta, GA',
  languages: 'English, French',
  interests: ['Piano', 'Chess', 'Reading', 'Adventure'],
  resumeHref: '/resume.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/serena-noboudem' },
    { label: 'GitHub', href: 'https://github.com/N-serena' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
] as const
