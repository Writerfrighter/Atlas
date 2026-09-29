/**
 * pages/ComingSoon.jsx
 * Temporary stand-in for pages we haven't built yet (Chat, Q&A).
 */
export default function ComingSoon({ title, phase }) {
  return (
    <section className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Coming in {phase}.</p>
    </section>
  )
}
