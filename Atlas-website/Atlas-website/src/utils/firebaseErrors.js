/**
 * utils/firebaseErrors.js
 * ------------------------------------------------------------------
 * Firebase errors look like "auth/invalid-credential". This turns those
 * codes into messages a normal person can understand.
 */
const MESSAGES = {
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/wrong-password': 'Incorrect email or password.',
  'auth/user-not-found': 'No account found with that email.',
  'auth/email-already-in-use': 'An account with that email already exists.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
  'auth/network-request-failed': 'Network error. Check your internet connection.',
  'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
  'auth/popup-blocked': 'Your browser blocked the sign-in popup. Please allow popups.',
  'auth/invalid-api-key': 'Firebase is not configured yet. Check your .env.local file.',
  'auth/api-key-not-valid.-please-pass-a-valid-api-key.':
    'Firebase is not configured yet. Check your .env.local file.',
}

export function getFriendlyErrorMessage(error) {
  return MESSAGES[error?.code] || 'Something went wrong. Please try again.'
}
