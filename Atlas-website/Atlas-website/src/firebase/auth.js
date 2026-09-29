/**
 * firebase/auth.js
 * ------------------------------------------------------------------
 * Small wrapper functions around Firebase Authentication.
 * Pages call these instead of talking to Firebase directly, which keeps
 * the UI code simple and puts all auth logic in one place.
 */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth, googleProvider } from './config'
import { createUserProfileIfMissing } from './users'

/** Create a new account, set its display name, and create the Firestore profile. */
export async function signUpWithEmail({ name, email, password }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(user, { displayName: name })
  await createUserProfileIfMissing(user, { name })
  return user
}

/** Log in an existing user with email + password. */
export async function logInWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  // Safety net for accounts created outside the app (e.g. Firebase Console).
  await createUserProfileIfMissing(user)
  return user
}

/** Log in (or sign up) with a Google account via a popup window. */
export async function logInWithGoogle() {
  const { user } = await signInWithPopup(auth, googleProvider)
  // First-time Google users won't have a Firestore profile yet.
  await createUserProfileIfMissing(user)
  return user
}

/** Send a "reset your password" email. */
export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email)
}

/** Log the current user out. */
export function logOut() {
  return signOut(auth)
}
