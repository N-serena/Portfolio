import { Analytics } from '@vercel/analytics/react'
import About from './component/About'
import Certifications from './component/Certifications'
import ContactSection from './component/ContactSection'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Skills from './component/Skills'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#main"
        className="bg-paper text-ink focus:border-rule-strong sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:border focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <ContactSection />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}

export default App
