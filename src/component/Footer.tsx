import { profile } from '../data/profile'

const Footer = () => (
  <footer className="border-rule mx-auto max-w-5xl border-t px-6 py-10">
    <div className="text-ink-subtle flex flex-wrap items-center justify-between gap-4 text-sm">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#top" className="hover:text-accent transition-colors">
        Back to top
      </a>
    </div>
  </footer>
)

export default Footer
