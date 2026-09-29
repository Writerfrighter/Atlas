/**
 * firebase/config.js
 * ------------------------------------------------------------------
 * Initializes Firebase ONCE and exports the services the rest of the
 * app uses. Every other file imports `auth` / `db` from here instead
 * of calling initializeApp() itself.
 *
 * Keys come from environment variables (see .env.example) so they are
 * never hardcoded or committed to git.
 */
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// True once every value in .env.local has been filled in.
// main.jsx shows a setup screen instead of the app when this is false.
const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key)
export const isFirebaseConfigured = missing.length === 0

if (!isFirebaseConfigured) {
  console.warn(
    `[firebase] Missing config values: ${missing.join(', ')}. ` +
      'Copy .env.example to .env.local and fill in your Firebase keys.',
  )
}

// Only start Firebase when it's configured (it throws without an API key).
export const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null
export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
export const googleProvider = new GoogleAuthProvider()
