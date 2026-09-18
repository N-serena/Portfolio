import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/profile'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

const FOCUSABLE = 'a[href], button:not([disabled])'

function ThemeToggle({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="text-ink-muted hover:text-ink hover:border-rule-strong border-rule grid h-9 w-9 place-items-center rounded-full border transition-colors"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  // Escape closes; Tab stays inside the panel while it is open.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close])

  const initials = profile.name.charAt(0)

  return (
    <header
      className={`bg-paper/85 sticky top-0 z-50 backdrop-blur-sm transition-colors ${
        scrolled ? 'border-rule border-b' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-6 lg:gap-8"
      >
        <a
          href="#top"
          className="text-ink hover:text-accent flex items-center gap-2 text-sm tracking-tight transition-colors"
        >
          <span className="border-rule-strong text-ink-muted grid h-7 w-7 place-items-center rounded-full border text-xs">
            {initials}
          </span>
          <span className="hidden font-medium whitespace-nowrap sm:inline">{profile.name}</span>
        </a>

        <ul className="text-ink-muted ml-auto hidden items-center gap-6 text-sm whitespace-nowrap md:flex lg:gap-7">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            href="#contact"
            className="border-rule-strong text-ink hover:border-accent hover:text-accent hidden rounded-full border px-4 py-1.5 text-sm whitespace-nowrap transition-colors md:inline-block"
          >
            Get in touch
          </a>
          <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
          <button
            ref={triggerRef}
            type="button"
            className="text-ink-muted hover:text-ink md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <FiMenu size={22} />
          </button>
        </div>
      </nav>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            className="absolute inset-0 bg-black/40"
            onClick={close}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="bg-paper border-rule absolute inset-y-0 right-0 flex w-72 flex-col border-l p-8"
          >
            <button
              type="button"
              className="text-ink-muted hover:text-ink self-end"
              aria-label="Close menu"
              onClick={close}
            >
              <FiX size={22} />
            </button>
            <ul className="mt-10 flex flex-col gap-6">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink hover:text-accent text-lg transition-colors"
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="border-rule-strong text-ink hover:border-accent hover:text-accent mt-8 rounded-full border px-4 py-2 text-center text-sm transition-colors"
              onClick={close}
            >
              Get in touch
            </a>
          </div>
          </div>,
          document.body,
        )}
    </header>
  )
}

export default Navbar
