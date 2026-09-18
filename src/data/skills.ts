import type { SkillGroup } from './types'

/* Add a skill by adding a string to a group, or add a whole group as
   { label: 'Group name', items: ['One', 'Two'] }. The section lays out
   however many groups there are. */

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Go', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['Spring Boot', 'React', 'React Native', 'Tailwind CSS'],
  },
  {
    label: 'Data & ML',
    items: ['Pandas', 'Scikit-learn', 'TensorFlow'],
  },
  {
    label: 'Systems',
    items: ['Authn/Authz', 'TCP/IP'],
  },
  {
    label: 'Tooling',
    items: ['Docker', 'Jenkins', 'Git', 'Firebase', 'Postman', 'JUnit 5'],
  },
]
