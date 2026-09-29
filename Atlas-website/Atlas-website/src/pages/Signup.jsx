/**
 * pages/Signup.jsx
 * ------------------------------------------------------------------
 * Create an account with name/email/password (or Google).
 * signUpWithEmail() also creates the user's Firestore profile.
 */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signUpWithEmail, logInWithGoogle } from '../firebase/auth'
import { getFriendlyErrorMessage } from '../utils/firebaseErrors'
import AuthCard from '../components/AuthCard'
import FormInput from '../components/FormInput'
import GoogleButton from '../components/GoogleButton'
import Spinner from '../components/Spinner'
import Divider from '../components/Divider'

export default function Signup() {
  // One state object for the whole form; `update` changes a single field.
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  async function runAuth(action) {
    setSubmitting(true)
    try {
      await action()
      toast.success('Account created — welcome!')
      navigate('/chat', { replace: true })
    } catch (error) {
      toast.error(getFriendlyErrorMessage(error))
    } finally {
      setSubmitting(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Check things we can catch before bothering Firebase.
    if (form.password !== form.confirm) {
      toast.error('Passwords do not match.')
      return
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters.')
      return
    }
    runAuth(() => signUpWithEmail({ name: form.name.trim(), email: form.email, password: form.password }))
  }

  return (
    <AuthCard
      title="Create an account"
      subtitle="Sign up to save your chat history and preferences."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-600 hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput id="name" label="Name" autoComplete="name" required value={form.name} onChange={update('name')} />
        <FormInput id="email" label="Email" type="email" autoComplete="email" required value={form.email} onChange={update('email')} />
        <FormInput id="password" label="Password" type="password" autoComplete="new-password" required minLength={6} value={form.password} onChange={update('password')} />
        <FormInput id="confirm" label="Confirm password" type="password" autoComplete="new-password" required value={form.confirm} onChange={update('confirm')} />
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-500 disabled:opacity-60"
        >
          {submitting && <Spinner className="h-4 w-4" />}
          Sign up
        </button>
      </form>

      <Divider />
      <GoogleButton disabled={submitting} onClick={() => runAuth(logInWithGoogle)} />
    </AuthCard>
  )
}
