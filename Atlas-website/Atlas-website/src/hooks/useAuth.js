/**
 * hooks/useAuth.js
 * ------------------------------------------------------------------
 * const { user, profile, loading } = useAuth()
 *
 * Gives any component access to the logged-in user.
 */
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside <AuthProvider>')
  return context
}
