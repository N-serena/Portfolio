import { FiArrowUpRight } from 'react-icons/fi'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

const Experience = () => (
  <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
    <SectionHeading>Experience</SectionHeading>

    <ol className="border-rule mt-8 border-t">
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.period}`}
          className="border-rule grid gap-2 border-b py-10 md:grid-cols-[13rem_1fr] md:gap-10"
        >
          <p className="text-ink-subtle pt-1 text-sm">{role.period}</p>

          <div>
            <h3 className="text-ink font-display text-2xl">{role.role}</h3>
            <p className="text-ink-muted mt-1 text-sm">
              {role.companyHref ? (
                <a
                  href={role.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </p>

            {role.links && role.links.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {role.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted decoration-rule-strong hover:text-accent hover:decoration-accent inline-flex items-center gap-1 text-sm underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                      <FiArrowUpRight aria-hidden size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-5 flex flex-col gap-3">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-ink-muted before:bg-rule-strong relative pl-5 text-[0.95rem] leading-relaxed before:absolute before:top-[0.6em] before:left-0 before:h-px before:w-3"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </section>
)

export default Experience
