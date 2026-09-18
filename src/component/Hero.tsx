import profileImage from '../assets/profile.jpg'
import { profile } from '../data/profile'

const Hero = () => (
  <section
    id="top"
    className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-32 md:pb-32"
  >
    <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <p className="text-ink-subtle text-eyebrow uppercase">Software Engineer</p>

        <h1 className="text-ink font-display text-display mt-5">{profile.name}</h1>

        <p className="text-ink-muted mt-6 text-lg leading-relaxed">{profile.summary}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {profile.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink decoration-rule-strong hover:text-accent hover:decoration-accent underline underline-offset-4 transition-colors"
            >
              {social.label}
            </a>
          ))}
          {profile.resumeHref && (
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink decoration-rule-strong hover:text-accent hover:decoration-accent underline underline-offset-4 transition-colors"
            >
              Résumé
            </a>
          )}
        </div>
      </div>

      <img
        src={profileImage}
        alt={profile.name}
        width={224}
        height={280}
        className="border-rule h-56 w-44 shrink-0 rounded-sm border object-cover md:h-72 md:w-56"
      />
    </div>
  </section>
)

export default Hero
