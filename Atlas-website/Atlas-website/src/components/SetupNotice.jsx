/**
 * components/SetupNotice.jsx
 * ------------------------------------------------------------------
 * Shown instead of the app when the Firebase keys in .env.local are
 * missing, so you get instructions rather than a blank page.
 */
export default function SetupNotice() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-bold">Almost there: connect Firebase</h1>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          <li>
            Copy <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">.env.example</code> to{' '}
            <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">.env.local</code>
          </li>
          <li>Paste in your keys from Firebase Console → Project settings → Your apps</li>
          <li>
            Restart <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">npm run dev</code>
          </li>
        </ol>
      </div>
    </div>
  )
}
