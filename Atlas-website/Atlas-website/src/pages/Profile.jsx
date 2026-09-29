/**
 * pages/Profile.jsx
 * ------------------------------------------------------------------
 * Protected page that shows the Firestore profile — a quick way to
 * confirm sign-up saved everything correctly.
 */
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/useTheme'

export default function Profile() {
  const { user, profile } = useAuth()
  const { theme } = useTheme()
  // joinedAt is a Firestore Timestamp; right after sign-up it may still be pending.
  const joined = profile?.joinedAt?.toDate?.()

  const rows = [
    ['Name', profile?.name || user.displayName || '—'],
    ['Email', user.email],
    ['Joined', joined ? joined.toLocaleDateString() : 'Just now'],
    ['Theme', theme],
  ]

  return (
    <section className="mx-auto w-full max-w-xl flex-1 px-4 py-12">
      <h1 className="text-2xl font-bold">Your profile</h1>
      <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 px-5 py-4 text-sm">
            <dt className="font-medium text-slate-500 dark:text-slate-400">{label}</dt>
            <dd className="truncate">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
