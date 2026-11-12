import type { SkillGroup } from './types'

/* Add a skill by adding a string to a group, or add a whole group as
   { label: 'Group name', items: ['One', 'Two'] }. The section lays out
   however many groups there are. */

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'Go', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & APIs',
    items: ['Spring Boot', 'React', 'REST', 'gRPC'],
  },
  {
    label: 'Data',
    items: ['MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    label: 'Infrastructure',
    items: ['API gateways', 'Caching', 'Concurrency', 'Docker', 'Jenkins', 'Git'],
  },
  {
    label: 'Security & networking',
    items: ['OAuth2', 'JWT', 'RBAC', 'TCP/IP', 'DNS', 'DHCP'],
  },
]
