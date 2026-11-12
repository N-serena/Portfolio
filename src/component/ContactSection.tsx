import { useEffect, useRef } from 'react'
import { ValidationError, useForm } from '@formspree/react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const FORMSPREE_ID = 'mblyybwz'

const fieldClass =
  'border-rule focus:border-accent text-ink placeholder:text-ink-subtle border-b bg-transparent py-2 text-sm outline-none transition-colors'

const ContactSection = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset()
  }, [state.succeeded])

  const hasErrors = state.errors !== null

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading>Contact</SectionHeading>

      <div className="border-rule mt-8 grid gap-12 border-t pt-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-ink font-display text-title max-w-md">
            Open to new grad and early-career software engineering roles, and to a good
            conversation either way.
          </p>

          <ul className="mt-8 flex flex-col gap-2 text-sm">
            {profile.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-accent transition-colors"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-ink-subtle text-eyebrow uppercase">
              Name
            </label>
            <input id="name" type="text" name="name" required className={fieldClass} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-ink-subtle text-eyebrow uppercase">
              Email
            </label>
            <input id="email" type="email" name="email" required className={fieldClass} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-ink-subtle text-eyebrow uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className={`${fieldClass} resize-y`}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="border-rule-strong text-ink hover:border-accent hover:text-accent self-start rounded-full border px-5 py-2 text-sm transition-colors disabled:opacity-50"
          >
            {state.submitting ? 'Sending…' : 'Send message'}
          </button>

          <p aria-live="polite" className="min-h-5 text-sm">
            {state.succeeded && (
              <span className="text-ink-muted">Message sent - I&apos;ll reply soon.</span>
            )}
            {hasErrors && !state.succeeded && (
              <span className="text-ink">
                Something went wrong. Try again, or reach me on LinkedIn.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
