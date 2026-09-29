/**
 * firebase/users.js
 * ------------------------------------------------------------------
 * Everything related to the `users` collection in Firestore.
 *
 * Document shape — users/{uid}:
 *   {
 *     name:        string,
 *     email:       string,
 *     joinedAt:    Timestamp (set by the server),
 *     preferences: { theme: 'light' | 'dark' }
 *   }
 */
import { doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db } from './config'

/** Returns a reference to one user's profile document. */
const userRef = (uid) => doc(db, 'users', uid)

/**
 * Creates the profile the first time a user signs in.
 * Safe to call on every login — if the profile already exists we leave it alone.
 */
export async function createUserProfileIfMissing(user, extra = {}) {
  const ref = userRef(user.uid)
  const snapshot = await getDoc(ref)
  if (snapshot.exists()) return snapshot.data()

  const profile = {
    name: extra.name || user.displayName || '',
    email: user.email,
    joinedAt: serverTimestamp(),
    // Start with whatever theme is on screen right now.
    preferences: { theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' },
  }
  await setDoc(ref, profile)
  return profile
}

/**
 * Calls `onChange(profile)` now and every time the profile changes.
 * `profile` is null if the document doesn't exist yet.
 * Returns an unsubscribe function.
 */
export function subscribeToUserProfile(uid, onChange, onError) {
  return onSnapshot(
    userRef(uid),
    (snapshot) => onChange(snapshot.exists() ? snapshot.data() : null),
    onError,
  )
}

/** Reads a user's profile once. Returns null if it doesn't exist. */
export async function getUserProfile(uid) {
  const snapshot = await getDoc(userRef(uid))
  return snapshot.exists() ? snapshot.data() : null
}

/**
 * Updates one or more preferences without overwriting the others.
 * Example: updateUserPreferences(uid, { theme: 'dark' })
 */
export async function updateUserPreferences(uid, preferences) {
  // Dot-notation ("preferences.theme") updates just that nested field.
  const updates = Object.fromEntries(
    Object.entries(preferences).map(([key, value]) => [`preferences.${key}`, value]),
  )
  await updateDoc(userRef(uid), updates)
}
