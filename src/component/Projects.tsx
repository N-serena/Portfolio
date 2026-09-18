import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...linkProps}
      className={`border-rule group hover:border-rule-strong flex flex-col rounded-sm border p-6 transition-colors ${
        project.featured ? 'sm:col-span-2' : ''
      }`}
    >
      {project.image && (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          width={640}
          height={320}
          className="border-rule mb-6 h-40 w-full rounded-sm border object-cover"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <h3
          className={`text-ink font-display leading-snug ${
            project.featured && !project.image ? 'text-title' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        {project.link && (
          <FiArrowUpRight
            aria-hidden
            className="text-ink-subtle group-hover:text-accent mt-1 shrink-0 transition-colors"
            size={18}
          />
        )}
      </div>

      {project.year && <p className="text-ink-subtle mt-1 text-xs">{project.year}</p>}

      <p
        className={`text-ink-muted mt-3 leading-relaxed ${
          project.featured && !project.image ? 'max-w-prose text-base' : 'text-sm'
        }`}
      >
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-8">
        {project.stack.map((tech) => (
          <li key={tech} className="text-ink-subtle font-mono text-xs">
            {tech}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Projects = () => (
  <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
    <h2 className="text-ink-subtle text-eyebrow uppercase">Projects</h2>

    {/* grid-flow-dense lets narrow tiles backfill the gaps a featured tile leaves,
        so the grid stays balanced at any number of projects. */}
    <div className="border-rule mt-8 grid auto-rows-auto grid-flow-dense gap-4 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
