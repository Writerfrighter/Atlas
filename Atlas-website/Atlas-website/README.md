# Atlas — FTC Assistant Website

Atlas is our FIRST Tech Challenge team's website: a chatbot UI (ready to connect to our
AI model's API) plus an FTC Q&A section.

**Stack:** React + Vite · Tailwind CSS v4 · Firebase (Auth, Firestore, Hosting)

## Getting started

```bash
npm install
cp .env.example .env.local   # then paste in your Firebase keys
npm run dev                  # http://localhost:5173
```

If the keys are missing, the site shows a setup screen instead of the app.

### Firebase Console setup (one time)

1. Create a project at <https://console.firebase.google.com>.
2. **Add a Web app** (Project settings → Your apps) and copy its config into `.env.local`.
3. **Authentication → Sign-in method:** enable *Email/Password* and *Google*.
4. **Firestore Database:** create a database (production mode).
5. Put your project ID in `.firebaserc`, then deploy the security rules:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules
   ```

### Deploying

```bash
npm run build
firebase deploy --only hosting
```

## Scripts

| Command           | What it does                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start the dev server          |
| `npm run build`   | Production build into `dist/` |
| `npm run preview` | Preview the production build  |
| `npm run lint`    | Check code with oxlint        |

## Folder structure

```
src/
├── main.jsx            Entry point: wraps App in Router/Auth/Theme providers
├── App.jsx             All routes (public, logged-out only, protected)
├── index.css           Tailwind import, dark mode, blue brand colors + font
├── firebase/
│   ├── config.js       Initializes Firebase from .env variables
│   ├── auth.js         signUp / logIn / Google / logOut / resetPassword
│   └── users.js        Firestore `users/{uid}` profile helpers
├── context/            React Context + Providers (auth state, theme)
├── hooks/              useAuth(), useTheme()
├── components/         Logo, Navbar, Footer, ThemeToggle, ProtectedRoute, ...
│   └── home/           Landing page sections (Hero, Topics, HowItWorks, ...)
├── pages/              Home, Login, Signup, Profile, NotFound, ...
└── utils/
    ├── teamInfo.js     ✏️ Your team name, number, location and links
    └── firebaseErrors.js  Turns Firebase error codes into friendly messages
```

## Firestore data

`users/{uid}`

```js
{ name, email, joinedAt, preferences: { theme: 'light' | 'dark' } }
```

Security rules (`firestore.rules`) only let users read/write their own profile.

## Roadmap

- [x] Phase 1 – Project setup
- [x] Phase 2 – Authentication (email/password, Google, protected routes, profiles)
- [x] Phase 3 – Navbar, landing page, footer, dark/light mode, responsive layout
- [ ] Phase 4 – Chatbot UI shell with placeholder `getAIResponse()`
- [ ] Phase 5 – FAQ / Q&A section
- [ ] Phase 6 – Polish (skeletons, SEO, ...)
