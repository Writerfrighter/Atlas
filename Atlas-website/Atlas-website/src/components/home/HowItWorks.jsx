/**
 * components/home/HowItWorks.jsx
 * Three numbered steps explaining how to use the site.
 */
import Icon from '../Icon'
import SectionHeading from './SectionHeading'

const STEPS = [
  { icon: 'user', title: 'Create a free account', description: 'Sign up with email or Google in a few seconds.' },
  { icon: 'chat', title: 'Ask your question', description: 'Type it the way you would ask a teammate or mentor.' },
  {
    icon: 'history',
    title: 'Come back anytime',
    description: 'Your conversations are saved, so you can pick up where you left off.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-slate-200/70 bg-white px-4 py-16 sm:py-24 dark:border-white/5 dark:bg-white/[0.02]">
      <SectionHeading eyebrow="How it works" title="Get answers in three steps" />
      <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="text-center">
            <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
              <Icon name={step.icon} className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-accent-400 text-xs font-bold text-brand-950 ring-4 ring-white dark:ring-slate-950">
                {index + 1}
              </span>
            </div>
            <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
