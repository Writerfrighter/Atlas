/**
 * components/ScrollToTop.jsx
 * ------------------------------------------------------------------
 * React Router keeps your scroll position when you change pages, so
 * clicking a footer link would open the new page scrolled to the bottom.
 * This scrolls back to the top whenever the URL path changes.
 * (It renders nothing — it only runs an effect.)
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
