/**
 * components/home/Hero.jsx
 * ------------------------------------------------------------------
 * The first thing visitors see: headline, what Atlas does, and buttons
 * to get started. Stacks vertically on phones, side by side on large
 * screens (lg:).
 */
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Icon from '../Icon'
import ChatPreview from './ChatPreview'

export default function Hero() {
  const { user } = useAuth()

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background: faint grid that fades out, plus two blue glows */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-600/25" />
      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/10" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Built by FTC students, for FTC students
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Your FTC questions,{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-accent-300">
              answered.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Meet <strong className="font-semibold text-slate-900 dark:text-white">Atlas</strong>, your guide to FIRST Tech
            Challenge. Ask about game rules, scoring, registration and resources, and get a clear answer in seconds instead
            of digging through the game manual mid-season.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to={user ? '/chat' : '/signup'}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500"
            >
              {user ? 'Ask Atlas' : 'Get started for free'}
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-6 py-3 font-semibold text-slate-700 backdrop-blur transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/50 dark:hover:text-white"
            >
              Browse Q&amp;A
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ChatPreview />
        </div>
      </div>
    </section>
  )
}
