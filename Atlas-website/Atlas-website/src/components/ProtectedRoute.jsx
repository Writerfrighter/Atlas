/**
 * components/ProtectedRoute.jsx
 * ------------------------------------------------------------------
 * Wrap any page that requires login:
 *   <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
 *
 * - While Firebase is still checking the session → show a spinner
 * - Not logged in → redirect to /login (and remember where they were going)
 * - Logged in → show the page
 */
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Spinner from './Spinner'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center py-20 text-brand-500">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!user) {
    // `state.from` lets the Login page send them back here afterwards.
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}
