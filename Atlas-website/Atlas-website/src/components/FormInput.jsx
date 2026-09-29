/**
 * components/FormInput.jsx
 * A labeled text input. Any extra props (type, value, onChange, ...)
 * are passed straight through to the <input>.
 */
export default function FormInput({ label, id, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        {...inputProps}
      />
    </div>
  )
}
