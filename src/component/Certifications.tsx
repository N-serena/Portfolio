import { FiArrowUpRight } from 'react-icons/fi'
import { certifications } from '../data/certifications'

const Certifications = () => (
  <section id="certifications" className="mx-auto max-w-5xl px-6 py-20">
    <h2 className="text-ink-subtle text-eyebrow uppercase">Certifications</h2>

    <ul className="border-rule mt-8 border-t">
      {certifications.map((cert) => {
        const content = (
          <>
            <div>
              <h3 className="text-ink font-display text-lg">{cert.name}</h3>
              <p className="text-ink-muted mt-1 text-sm">{cert.issuer}</p>
            </div>
            <div className="text-ink-subtle flex items-center gap-3 text-sm">
              {cert.year}
              {cert.link && <FiArrowUpRight aria-hidden size={16} />}
            </div>
          </>
        )

        return (
          <li key={cert.name} className="border-rule border-b">
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent group flex items-start justify-between gap-6 py-6 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div className="flex items-start justify-between gap-6 py-6">{content}</div>
            )}
          </li>
        )
      })}
    </ul>
  </section>
)

export default Certifications
