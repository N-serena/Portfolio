import { skillGroups } from '../data/skills'

const Skills = () => (
  <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
    <h2 className="text-ink-subtle text-eyebrow uppercase">Skills</h2>

    <dl className="border-rule mt-8 grid gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
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
