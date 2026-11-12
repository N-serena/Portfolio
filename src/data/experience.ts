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
  //Uncomment and fill in to add your latest role.
  {
    role: 'Software Engineer Intern',
    company: 'Netflix',
    period: 'May 2026 - Aug 2026',
    highlights: [
        'Designed and implemented a safety-critical failure injection architecture for Netflix\'s internal API gateway, enabling 2+ engineer teams to safely simulate dependency outages on a scoped slice of production traffic',
        'Built a full-stack continuous health-probing system end-to-end in Spring Boot, React, and gRPC with a shared protobuf contract, enabling cross-team engineers to analyze and visualize synthetic traffic sessions against production gateways on a unified dashboard measuring 100% traffic latency, status, and proxy health signals.',
        'Engineered the concurrent request-dispatch and scheduling core of the system using Java virtual threads and in-memory connection pooling to fire ~150req/s of synthetic HTTP traffic',
        'Designed the reconciliation-loop architecture that reduced data store reads and latency by 33.3%'
    ],
  },
  {
    role: 'Graduate Researcher',
    company: 'Boston University, GRS',
    period: 'Jan 2026 — May 2026',
    highlights: [
      'Designed an autonomous evolutionary pipeline that created and optimized visual jailbreak attacks against multimodal LLMs, outperforming hand-crafted baselines with a self-improving system.',
      'Applied a MAP-Elites strategy to drive in-context optimization across 90+ unattended rounds and thousands of model inferences.',
      'Achieved an 87.5% training and 90% validation attack success rate against a multimodal LLM (Qwen2-VL-7B).',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'KSU — College of Computing',
    period: 'Oct 2024 — May 2025',
    highlights: [        
        'Crafted & executed adversarial attacks (MIFGSM, FGSM) on deep learning models using the MNIST dataset, executing 40+ attack iterations, applying threat modeling techniques to assess model robustness and uncover key vulnerabilities',
        'Conducted cross-model evaluation across 4+ architectures, analyzing 5,000+ misclassified samples, visualizing error patterns, and improved model robustness by 80%',
        'Delivered research findings at the Annual KSU Symposium, effectively translating complex technical concepts into accessible insights for an audience of 50+ faculty, researchers, and peers.'
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Afriland First Bank',
    period: 'Jun 2023 - Aug 2023',
    highlights: [      
        'Performed threat modeling using the STRIDE methodology to identify and prioritize system vulnerabilities, resulting in the mitigation of 15+ high-priority security risks before deployment.',
        'Engineered a secure authentication system using OAuth2, JWT, and 2FA in Java for a banking app, achieving 100% compliance with banking regulations and reducing unauthorized access attempts by 70%.',
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
