/**
 * pages/NotFound.jsx
 * Shown for any URL that doesn't match a route.
 */
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <p className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-7xl font-extrabold text-transparent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">That page doesn&apos;t exist (yet).</p>
      <Link to="/" className="mt-6 font-medium text-brand-600 hover:underline">
        ← Back home
      </Link>
    </section>
  )
}
