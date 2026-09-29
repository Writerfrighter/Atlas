/**
 * components/AuthCard.jsx
 * The centered card layout shared by the Login and Sign up pages.
 */
export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <div className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-4 py-12">
      {/* Soft blue glow behind the card */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-brand-900/5 backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
        <div className="mt-6">{children}</div>
        {footer && <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">{footer}</div>}
      </div>
    </div>
  )
}
