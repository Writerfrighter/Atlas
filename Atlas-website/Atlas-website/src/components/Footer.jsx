/**
 * components/Footer.jsx
 * ------------------------------------------------------------------
 * Site footer: team info, site links, official FTC resources and
 * social links. All team details come from utils/teamInfo.js.
 * Columns stack on phones and sit side by side on wider screens.
 */
import { Link } from 'react-router-dom'
import { TEAM, FTC_RESOURCES } from '../utils/teamInfo'
import Icon from './Icon'
import Logo from './Logo'
import SocialIcon from './SocialIcon'

const SITE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/chat', label: 'Chatbot' },
  { to: '/faq', label: 'Q&A' },
  { to: '/profile', label: 'Your profile' },
]

const SOCIAL_LABELS = { instagram: 'Instagram', youtube: 'YouTube', github: 'GitHub' }

export default function Footer() {
  // Only show social links that have a URL filled in.
  const socials = Object.entries(TEAM.social).filter(([, url]) => url)

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Team info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" aria-label="Atlas home">
            <Logo />
          </Link>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Built by {TEAM.teamName}, FTC Team #{TEAM.teamNumber} from {TEAM.location}.
          </p>
          {TEAM.email && (
            <a
              href={`mailto:${TEAM.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 dark:hover:text-brand-300 dark:text-slate-400"
            >
              <Icon name="mail" className="h-4 w-4" />
              {TEAM.email}
            </a>
          )}
        </div>

        {/* Site links */}
        <FooterColumn title="Site">
          {SITE_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-brand-600 dark:hover:text-brand-300">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        {/* Official FTC resources (open in a new tab) */}
        <FooterColumn title="FTC Resources">
          {FTC_RESOURCES.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-300">
                {link.label}
                <Icon name="external" className="h-3 w-3" />
              </a>
            </li>
          ))}
        </FooterColumn>

        {/* Social links */}
        {socials.length > 0 && (
          <FooterColumn title="Follow us">
            <li className="flex gap-3">
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SOCIAL_LABELS[name]}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-brand-600 dark:hover:text-brand-300 dark:hover:bg-slate-800"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </li>
          </FooterColumn>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {TEAM.teamName}
          </p>
          <p>Not affiliated with or endorsed by FIRST®. FIRST Tech Challenge is a trademark of FIRST.</p>
        </div>
      </div>
    </footer>
  )
}

/** A titled list of links used for each footer column. */
function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">{children}</ul>
    </div>
  )
}
