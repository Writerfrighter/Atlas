/**
 * components/home/CallToAction.jsx
 * The orange banner at the bottom of the landing page.
 */
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function CallToAction() {
  const { user } = useAuth()

  return (
    <section className="px-4 pb-16 sm:pb-24">
      <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-950 px-6 py-14 text-center text-white shadow-2xl shadow-brand-900/30 sm:px-12">
        {/* Decorative glow + grid */}
        <div className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl" />
        <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to ask your first question?</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">
          Spend less time searching the manual and more time building your robot.
        </p>
        <Link
          to={user ? '/chat' : '/signup'}
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
        >
          {user ? 'Ask Atlas' : 'Create your free account'}
        </Link>
      </div>
    </section>
  )
}
