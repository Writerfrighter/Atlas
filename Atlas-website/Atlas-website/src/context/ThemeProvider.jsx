/**
 * context/ThemeProvider.jsx
 * ------------------------------------------------------------------
 * Manages light/dark mode.
 *
 * Where the preference is stored:
 *  - localStorage → works for everyone, even logged-out visitors
 *  - Firestore (users/{uid}.preferences.theme) → follows a logged-in
 *    user across devices
 *
 * How it's applied: we add/remove the `dark` class on <html>, and
 * Tailwind's `dark:` utilities react to it (see index.css).
 */
import { useCallback, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { useAuth } from '../hooks/useAuth'
import { updateUserPreferences } from '../firebase/users'

/** Initial theme: saved choice → OS setting → light. */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage can be unavailable (e.g. private mode) — ignore.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeProvider({ children }) {
  const { user, profile } = useAuth()
  const [theme, setTheme] = useState(getInitialTheme)

  // When a user logs in, adopt the theme saved in their Firestore profile.
  // (React's recommended "adjust state when a value changes" pattern:
  // compare with the previous value during render instead of in an effect.)
  const savedTheme = profile?.preferences?.theme
  const [lastSavedTheme, setLastSavedTheme] = useState(savedTheme)
  if (savedTheme !== lastSavedTheme) {
    setLastSavedTheme(savedTheme)
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
  }

  // Whenever the theme changes, update <html> and localStorage.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    // Save to Firestore in the background for logged-in users.
    if (user) {
      updateUserPreferences(user.uid, { theme: next }).catch((error) =>
        console.error('Could not save theme preference:', error),
      )
    }
  }, [theme, user])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
