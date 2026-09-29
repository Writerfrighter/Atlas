/**
 * components/home/ChatPreview.jsx
 * ------------------------------------------------------------------
 * A static, non-interactive mock of the chat window for the hero section,
 * so visitors can picture how Atlas works before signing up.
 */
import { LogoMark } from '../Logo'

const EXAMPLE_MESSAGES = [
  { from: 'user', text: 'Where do I find the rules for this season?' },
  {
    from: 'bot',
    text: 'Each season’s rules are in the official game manual on the FIRST website. Want me to explain a specific section?',
  },
  { from: 'user', text: 'Yes, how does autonomous scoring work?' },
]

export default function ChatPreview() {
  return (
    <div aria-hidden="true" className="relative w-full max-w-md">
      {/* Glow behind the card */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-accent-400/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-2xl shadow-brand-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
        {/* Window header */}
        <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-white/10">
          <LogoMark className="h-8 w-8" />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Atlas</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 p-4">
          {EXAMPLE_MESSAGES.map((message, index) => (
            <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  message.from === 'user'
                    ? 'rounded-br-md bg-gradient-to-br from-brand-500 to-brand-700 text-white'
                    : 'rounded-bl-md bg-slate-100 text-slate-800 dark:bg-white/5 dark:text-slate-100'
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}

          {/* "Typing" dots */}
          <div className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 dark:bg-white/5">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="h-2 w-2 animate-bounce rounded-full bg-brand-400"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Fake input */}
        <div className="flex gap-2 border-t border-slate-200/80 p-3 dark:border-white/10">
          <div className="flex-1 rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-400 dark:bg-white/5">
            Ask Atlas anything about FTC…
          </div>
          <div className="grid place-items-center rounded-xl bg-brand-600 px-3 text-white">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  )
}

/** Paper-plane "send" icon. */
function Icon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}
