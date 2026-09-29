/**
 * components/Navbar.jsx
 * ------------------------------------------------------------------
 * Top navigation bar: logo, page links, theme toggle, login/logout.
 * On small screens the links collapse into a hamburger menu.
 */
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import { logOut } from '../firebase/auth'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

// Add new pages here. `protected: true` hides the link from logged-out users.
const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/chat', label: 'Chatbot', protected: true },
  { to: '/faq', label: 'Q&A' },
]

/** Styles an active vs. inactive NavLink. */
const linkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
  }`

export default function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleLinks = NAV_LINKS.filter((link) => !link.protected || user)
  const closeMenu = () => setMenuOpen(false)

  async function handleLogout() {
    try {
      await logOut()
      toast.success('Logged out')
      closeMenu()
      navigate('/')
    } catch {
      toast.error('Could not log out. Please try again.')
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} aria-label="Atlas home">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {visibleLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side: theme toggle + auth button (+ hamburger on mobile) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <AuthButtons user={user} onLogout={handleLogout} onNavigate={closeMenu} />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-1">
            {visibleLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 border-t border-slate-200 pt-3 dark:border-slate-800">
            <AuthButtons user={user} onLogout={handleLogout} onNavigate={closeMenu} />
          </div>
        </div>
      )}
    </header>
  )
}

/** Login/Sign up buttons when logged out; name + Logout when logged in. */
function AuthButtons({ user, onLogout, onNavigate }) {
  if (user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          to="/profile"
          onClick={onNavigate}
          className="max-w-[10rem] truncate text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
        >
          {user.displayName || user.email}
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Log out
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        onClick={onNavigate}
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        onClick={onNavigate}
        className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-500"
      >
        Sign up
      </Link>
    </div>
  )
}
