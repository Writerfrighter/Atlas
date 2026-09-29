/**
 * components/Divider.jsx
 * The "── or ──" line between a form and the Google button.
 */
export default function Divider({ label = 'or' }) {
  return (
    <div className="my-6 flex items-center gap-3 text-xs uppercase text-slate-400">
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      {label}
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
    </div>
  )
}
