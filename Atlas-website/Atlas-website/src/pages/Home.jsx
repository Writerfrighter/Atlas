/**
 * pages/Home.jsx
 * ------------------------------------------------------------------
 * The Atlas landing page. Each section is its own component in
 * components/home/, so you can reorder or remove sections here.
 */
import Hero from '../components/home/Hero'
import Topics from '../components/home/Topics'
import HowItWorks from '../components/home/HowItWorks'
import AboutTeam from '../components/home/AboutTeam'
import CallToAction from '../components/home/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Topics />
      <HowItWorks />
      <AboutTeam />
      <CallToAction />
    </>
  )
}
