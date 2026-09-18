import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

const Skills = () => (
  <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
    <SectionHeading>Skills</SectionHeading>

    {/* auto-fit rather than a fixed count, so adding or removing a group
        re-flows instead of stranding one on its own row. */}
    <dl className="border-rule mt-8 grid gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <dt className="text-ink font-display text-lg">{group.label}</dt>
          <dd>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-ink-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </section>
)

export default Skills
