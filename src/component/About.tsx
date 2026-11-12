import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Speaks', value: profile.languages },
  { label: 'Outside work', value: profile.interests.join(', ') },
]

const About = () => (
  <section id="about" className="mx-auto max-w-5xl px-6 py-20">
    <SectionHeading>About</SectionHeading>

    <div className="border-rule mt-8 grid gap-12 border-t pt-10 md:grid-cols-[1.4fr_1fr]">
      <p className="text-ink font-display text-title">
        Software engineer completing an MS in Computer Science at Boston University,
        after a BSc at Kennesaw State. Drawn to distributed systems, and to problems that
        stay interesting after the first solution.
      </p>

      <dl className="flex flex-col gap-6">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-ink-subtle text-eyebrow uppercase">{fact.label}</dt>
            <dd className="text-ink-muted mt-1.5 text-sm">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default About
