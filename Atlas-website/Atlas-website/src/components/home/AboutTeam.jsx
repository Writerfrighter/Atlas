/**
 * components/home/AboutTeam.jsx
 * ------------------------------------------------------------------
 * Short "who built this" section. Content comes from utils/teamInfo.js.
 */
import { TEAM } from '../../utils/teamInfo'
import SectionHeading from './SectionHeading'

export default function AboutTeam() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 sm:py-24">
      <SectionHeading
        eyebrow="About us"
        title={`Built by FTC Team #${TEAM.teamNumber}`}
        description={`We're ${TEAM.teamName} from ${TEAM.location}. ${TEAM.tagline}`}
      />
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500 dark:text-slate-400">
        Atlas is a student project and isn&apos;t an official FIRST resource. Always double-check important
        rulings against the official game manual.
      </p>
    </section>
  )
}
