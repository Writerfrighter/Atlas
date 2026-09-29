/**
 * context/AuthProvider.jsx
 * ------------------------------------------------------------------
 * Wraps the whole app and keeps track of who is logged in.
 *
 * Firebase calls `onAuthStateChanged` whenever the user logs in, logs out,
 * or when the page first loads (it remembers sessions automatically).
 * We store the Firebase user + their Firestore profile in state and share
 * them with every component through AuthContext.
 *
 * The profile uses a *real-time listener*, so when anything changes it
 * (e.g. toggling dark mode) every component sees the update instantly.
 * Profiles are CREATED in firebase/auth.js during sign-up / login.
 */
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import { subscribeToUserProfile } from '../firebase/users'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // Firebase Auth user (or null)
  const [profile, setProfile] = useState(null) // Firestore users/{uid} data
  const [loading, setLoading] = useState(true) // true until Firebase answers

  // 1) Listen for login/logout. Firebase also fires this once on page load
  //    (it remembers sessions automatically).
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      if (!firebaseUser) {
        setProfile(null)
        setLoading(false)
      }
    })
    return unsubscribe // stop listening when the component unmounts
  }, [])

  // 2) While someone is logged in, keep their Firestore profile in sync.
  const uid = user?.uid
  useEffect(() => {
    if (!uid) return
    return subscribeToUserProfile(
      uid,
      (data) => {
        setProfile(data)
        setLoading(false)
      },
      (error) => {
        console.error('Could not load user profile:', error)
        setLoading(false)
      },
    )
  }, [uid])

  const value = { user, profile, loading }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
