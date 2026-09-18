import type { Experience } from './types'

/* To add a role, copy this block to the top of the array and edit it.
   Newest first — the list renders in array order.

   {
     role: 'Software Engineer',
     company: 'Company name',
     period: 'Jan 2026 — Present',
     companyHref: 'https://example.com',   // optional
     highlights: [
       'What you built, and what changed because of it.',
     ],
   },
*/

export const experience: Experience[] = [
  {
    role: 'TODO — your current or most recent role',
    company: 'TODO — company',
    period: 'TODO — e.g. Jan 2026 — Present',
    highlights: [
      'Replace this entry with your latest role. Delete it if there is nothing newer than the two below.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Afriland First Bank',
    period: 'Jun 2023 — Aug 2023',
    highlights: [
      'Engineered a secure authentication system using OAuth2, JWT and 2FA for a banking app, meeting banking compliance requirements and reducing unauthorized access attempts by 40%.',
      'Deployed AWS EC2 and S3 infrastructure with Jenkins CI/CD pipelines alongside cross-functional teams, increasing delivery speed by 30%.',
      'Supported deployment and scaling of a containerized banking app on Kubernetes, holding 99.9% uptime for 10,000+ concurrent users.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'PKF Research Center',
    period: 'Jun 2022 — Oct 2023',
    highlights: [
      'Built and maintained a REST API for a learning management system in Spring Boot, handling 100+ requests/second and improving data retrieval speed by 25%.',
      'Designed a web-based analytical dashboard with interactive data visualization, supporting data-driven decisions and raising user satisfaction by 30%.',
      'Drove engineering practice through code review and coding standards, cutting bug reports by 25%.',
    ],
  },
]
