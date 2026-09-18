import type { Project } from './types'

import dns from '../assets/projects/dns.webp'
import dsml from '../assets/projects/dsml.webp'
import mobile from '../assets/projects/mobile.webp'
import spotify from '../assets/projects/spotify2.webp'
import supplyChain from '../assets/projects/supply_chain.webp'

/* To add a project:
     1. drop the original image in assets-source/projects/
     2. run `npm run images` — it writes an optimized .webp into src/assets/projects/
     3. import that .webp at the top of this file
     4. copy the block below into the array and edit it

   Only title, description and stack are required. The grid handles any number
   of projects, and `featured` gives one a wider tile.

   {
     title: 'Project name',
     description: 'One or two sentences on what it does and what was hard.',
     stack: ['TypeScript', 'Postgres'],
     link: 'https://github.com/N-serena/repo',   // optional
     image: myImage,                             // optional, the import not a path
     featured: true,                             // optional
     year: '2026',                               // optional
   },
*/

export const projects: Project[] = [
  // Uncomment and fill in to add a project.
  // {
  //   title: 'Project name',
  //   description: 'One or two sentences on what it does and what was hard.',
  //   stack: ['TypeScript', 'Postgres'],
  //   featured: true,
  // },
  {
    title: 'FinHub',
    description:
      'Full-stack platform that securely aggregates and analyses users’ bank data.',
    stack: ['Spring Boot', 'React', 'MySQL', 'Plaid API'],
    featured: true,
  },
  {
    title: 'Data Science & Machine Learning Portfolio',
    description:
      'Portfolio of data science and machine learning work, completed through the MIT Schwarzman College of Computing certificate.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    link: 'https://www.mygreatlearning.com/eportfolio/serena-noboudem-manda-tchinda',
    image: dsml,
  },
  {
    title: 'DNS Server',
    description:
      'Multithreaded DNS server in Python handling 500+ queries per second, built to RFC 1035.',
    stack: ['Python'],
    link: 'https://github.com/N-serena/DNS-Server---Python',
    image: dns,
  },
  {
    title: 'Spotify Clone',
    description:
      'Android app replicating Spotify’s core features, built with React Native and Node.js.',
    stack: ['React Native', 'Firebase', 'Node.js', 'Spotify API'],
    link: 'https://github.com/SP27-Blue-Spotify/SP27-Blue-Spotify-Rep',
    image: spotify,
  },
  {
    title: 'D2L Mobile App',
    description:
      'Android app replicating D2L course modules and labs, with Firebase storage and authentication.',
    stack: ['Kotlin', 'Firebase'],
    link: 'https://github.com/N-serena/D2LMobile',
    image: mobile,
  },
  {
    title: 'Supply Chain Production Management',
    description:
      'Desktop app for managing supply chain production, covering inventory tracking and order management.',
    stack: ['Java', 'MySQL', 'JavaFX'],
    link: 'https://github.com/N-serena/supply-chain',
    image: supplyChain,
  },
]
