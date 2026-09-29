/**
 * context/AuthContext.js
 * ------------------------------------------------------------------
 * The React Context object that holds auth state. It's kept in its own
 * file (separate from AuthProvider) so React Fast Refresh keeps working.
 * Read it with the `useAuth()` hook from /hooks.
 */
import { createContext } from 'react'

export const AuthContext = createContext(null)
