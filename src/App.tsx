import { Analytics } from '@vercel/analytics/react'
import ContactSection from './component/ContactSection'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Experience from './component/Experience'
import About from './component/About'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import { useTheme } from './hooks/useTheme'

/* TEMPORARY. The remaining .jsx components still take a `theme` prop of Tailwind
   class strings. Pointing it at the new tokens lets them render in the new palette
   until each is rewritten as .tsx. Deleted in step 4 along with the last .jsx. */
const legacyTheme = {
  bg: 'bg-paper',
  card: 'bg-paper-raised',
  text: 'text-ink',
  accent: 'text-accent',
  secondary: 'text-ink-muted',
  shadow: 'border border-rule',
}

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="bg-paper min-h-screen">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience theme={legacyTheme} />
      <Projects theme={legacyTheme} />
      <Skills theme={legacyTheme} />
      <ContactSection theme={legacyTheme} />
      <Footer />
      <Analytics />
      <div className="h-8" />
    </div>
  )
}

export default App
