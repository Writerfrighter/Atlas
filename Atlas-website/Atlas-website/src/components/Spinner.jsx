/**
 * components/Spinner.jsx
 * A simple spinning circle. `className` lets callers change the size.
 */
export default function Spinner({ className = 'h-6 w-6' }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    />
  )
}
