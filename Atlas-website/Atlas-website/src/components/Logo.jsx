/**
 * components/Logo.jsx
 * ------------------------------------------------------------------
 * The Atlas logo: a white "A" with an orbit ring around it, like a
 * planet's ring. The back of the ring passes behind the A and the
 * front passes over it, which gives the mark some depth.
 *
 * Usage:
 *   <Logo />                  → mark + "Atlas" wordmark
 *   <Logo showText={false} /> → just the mark
 *   <Logo className="h-12 w-12" showText={false} />  → bigger mark
 *
 * public/favicon.svg is the same drawing, used for the browser tab icon.
 */
import { useId } from 'react'
import { TEAM } from '../utils/teamInfo'

export function LogoMark({ className = 'h-8 w-8' }) {
  // useId gives each logo on the page unique gradient IDs, so two logos
  // (navbar + footer) don't clash.
  const id = useId()
  const bg = `${id}-bg`
  const front = `${id}-front`

  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
        {/* Only the bottom half of the ring is drawn in front of the A */}
        <clipPath id={front}>
          <rect x="0" y="33" width="64" height="31" />
        </clipPath>
      </defs>

      <rect width="64" height="64" rx="15" fill={`url(#${bg})`} />
      {/* Back of the orbit ring (faded, behind the A) */}
      <g transform="rotate(-16 32 33)">
        <ellipse cx="32" cy="33" rx="23" ry="7" fill="none" stroke="#7dd3fc" strokeWidth="2.4" opacity=".45" />
      </g>
      {/* The "A" */}
      <path
        d="M19 48.5 L32 15.5 L45 48.5"
        fill="none"
        stroke="#fff"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front of the orbit ring + a small "satellite" */}
      <g transform="rotate(-16 32 33)">
        <ellipse
          cx="32"
          cy="33"
          rx="23"
          ry="7"
          fill="none"
          stroke="#a5f3fc"
          strokeWidth="2.4"
          clipPath={`url(#${front})`}
        />
        <circle cx="50" cy="37.4" r="2.9" fill="#67e8f9" stroke="#1e3a8a" strokeWidth="1.2" />
      </g>
    </svg>
  )
}

export default function Logo({ className = 'h-8 w-8', showText = true }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={className} />
      {showText && (
        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{TEAM.siteName}</span>
      )}
    </span>
  )
}
