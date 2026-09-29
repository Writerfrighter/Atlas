/**
 * components/home/SectionHeading.jsx
 * Small label + title + description used at the top of each landing section.
 */
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  )
}
