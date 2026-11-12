import { useCallback, useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

const Skills = () => {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setAtStart(track.scrollLeft < 8)
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8)
  }, [])

  useEffect(() => {
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [syncEdges])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : track.clientWidth
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex items-center justify-between gap-4">
        <SectionHeading>Skills</SectionHeading>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous skill groups"
            className="border-rule text-ink-muted hover:border-rule-strong hover:text-ink grid h-8 w-8 place-items-center rounded-full border transition-colors disabled:opacity-30"
          >
            <FiArrowLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next skill groups"
            className="border-rule text-ink-muted hover:border-rule-strong hover:text-ink grid h-8 w-8 place-items-center rounded-full border transition-colors disabled:opacity-30"
          >
            <FiArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Native scroll-snap: every group stays in the DOM and reachable by
          touch, trackpad and keyboard, with the buttons as an affordance. */}
      <ul
        ref={trackRef}
        onScroll={syncEdges}
        tabIndex={0}
        className="border-rule mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto border-t pt-10 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {skillGroups.map((group) => (
          <li
            key={group.label}
            className="border-rule hover:border-rule-strong w-60 shrink-0 snap-start rounded-sm border p-6 transition-colors"
          >
            <h3 className="text-ink font-display text-xl">{group.label}</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-ink-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
