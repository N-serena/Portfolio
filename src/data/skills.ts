import type { SkillGroup } from './types'

/* Add a skill by adding a string to a group, or add a whole group as
   { label: 'Group name', items: ['One', 'Two'] }. The section lays out
   however many groups there are. */

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL'],
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
    label: 'Cloud & tooling',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Firebase', 'Postman', 'JUnit 5'],
  },
]
