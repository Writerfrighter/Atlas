/**
 * components/PublicOnlyRoute.jsx
 * ------------------------------------------------------------------
 * The opposite of ProtectedRoute: for pages like Login/Sign up that a
 * logged-in user shouldn't see. Logged-in users are sent to /chat.
 */
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth()
  if (!loading && user) return <Navigate to="/chat" replace />
  return children
}
