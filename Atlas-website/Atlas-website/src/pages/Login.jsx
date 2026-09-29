/**
 * pages/Login.jsx
 * ------------------------------------------------------------------
 * Email/password login + Google sign-in + "forgot password".
 * After logging in, users go back to the page they originally wanted
 * (ProtectedRoute saved it in location.state.from), or /chat by default.
 */
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { logInWithEmail, logInWithGoogle, resetPassword } from '../firebase/auth'
import { getFriendlyErrorMessage } from '../utils/firebaseErrors'
import AuthCard from '../components/AuthCard'
import FormInput from '../components/FormInput'
import GoogleButton from '../components/GoogleButton'
import Spinner from '../components/Spinner'
import Divider from '../components/Divider'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname || '/chat'

  /** Shared wrapper: shows loading state, success/error toasts, then redirects. */
  async function runAuth(action) {
    setSubmitting(true)
    try {
      await action()
      toast.success('Welcome back!')
      navigate(redirectTo, { replace: true })
    } catch (error) {
      toast.error(getFriendlyErrorMessage(error))
    } finally {
      setSubmitting(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page
    runAuth(() => logInWithEmail({ email, password }))
  }

  async function handleForgotPassword() {
    if (!email) {
      toast.error('Enter your email above first.')
      return
    }
    try {
      await resetPassword(email)
      toast.success('Password reset email sent.')
    } catch (error) {
      toast.error(getFriendlyErrorMessage(error))
    }
  }

  return (
    <AuthCard
      title="Log in"
      subtitle="Welcome back! Log in to chat with Atlas."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-600 hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-right">
          <button type="button" onClick={handleForgotPassword} className="text-sm text-brand-600 hover:underline">
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-500 disabled:opacity-60"
        >
          {submitting && <Spinner className="h-4 w-4" />}
          Log in
        </button>
      </form>

      <Divider />
      <GoogleButton disabled={submitting} onClick={() => runAuth(logInWithGoogle)} />
    </AuthCard>
  )
}

