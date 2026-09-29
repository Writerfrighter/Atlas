/**
 * App.jsx
 * ------------------------------------------------------------------
 * Defines every URL in the site. All pages render inside <Layout>
 * (navbar + footer). Wrap a page in <ProtectedRoute> to require login.
 */
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import PublicOnlyRoute from './components/PublicOnlyRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<ComingSoon title="Q&A" phase="Phase 5" />} />

        {/* Only for logged-OUT users */}
        <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />

        {/* Only for logged-IN users */}
        <Route path="/chat" element={<ProtectedRoute><ComingSoon title="Chatbot" phase="Phase 4" /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* Anything else */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
