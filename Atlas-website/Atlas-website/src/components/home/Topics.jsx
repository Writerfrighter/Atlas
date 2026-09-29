/**
 * components/home/Topics.jsx
 * ------------------------------------------------------------------
 * "What can I ask?" — the four question categories. These match the
 * Q&A categories planned for Phase 5.
 */
import Icon from '../Icon'
import SectionHeading from './SectionHeading'

const TOPICS = [
  {
    icon: 'book',
    title: 'Game Rules',
    description: 'Robot constraints, field elements, match play and what counts as a penalty.',
  },
  {
    icon: 'trophy',
    title: 'Scoring',
    description: 'How points work in autonomous, driver-controlled and endgame periods.',
  },
  {
    icon: 'clipboard',
    title: 'Registration',
    description: 'Starting a team, registering for the season and signing up for events.',
  },
  {
    icon: 'link',
    title: 'Resources',
    description: 'Where to find manuals, programming guides, awards info and more.',
  },
]

export default function Topics() {
  return (
    <section id="topics" className="scroll-mt-20 px-4 py-16 sm:py-24">
      <SectionHeading
        eyebrow="What can I ask?"
        title="Everything FTC, in one place"
        description="Whether you're a rookie team or a veteran, Atlas can help with the questions that come up every season."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TOPICS.map((topic) => (
          <div
            key={topic.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/30 transition group-hover:scale-110">
              <Icon name={topic.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">{topic.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
