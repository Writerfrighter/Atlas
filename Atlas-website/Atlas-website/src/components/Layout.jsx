/**
 * components/Layout.jsx
 * ------------------------------------------------------------------
 * The frame around every page: Navbar on top, the current page in the
 * middle (<Outlet /> is where React Router renders it), footer at the bottom.
 */
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
