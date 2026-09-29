/**
 * main.jsx — the entry point.
 * ------------------------------------------------------------------
 * Wraps <App /> in the "providers" every page needs:
 *  - BrowserRouter  → page URLs / navigation
 *  - AuthProvider   → who is logged in
 *  - ThemeProvider  → light/dark mode (inside AuthProvider so it can
 *                     read/save the user's Firestore preference)
 *  - Toaster        → pop-up toast notifications
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider'
import ThemeProvider from './context/ThemeProvider'
import App from './App'
import SetupNotice from './components/SetupNotice'
import { isFirebaseConfigured } from './firebase/config'
import './index.css'

const root = createRoot(document.getElementById('root'))

if (!isFirebaseConfigured) {
  // No keys yet → show setup instructions instead of crashing.
  root.render(<SetupNotice />)
} else {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <App />
            <Toaster position="top-center" />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}
