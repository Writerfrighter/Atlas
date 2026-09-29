/**
 * utils/teamInfo.js
 * ------------------------------------------------------------------
 * ONE place for your team's details. The navbar, landing page and
 * footer all read from here, so you never have to hunt through
 * components to change your team name or links.
 *
 * TODO: Replace the placeholder values below with your real team info.
 * Leave a social link as '' to hide it.
 */
export const TEAM = {
  siteName: 'Atlas',
  teamName: 'Your Team Name', // TODO
  teamNumber: '00000', // TODO
  location: 'City, State', // TODO
  tagline: 'An FTC robotics team building tools that help other teams learn.',
  email: '', // TODO e.g. 'team@example.com'

  social: {
    instagram: '', // TODO e.g. 'https://instagram.com/yourteam'
    youtube: '',
    github: 'https://github.com/fireariac/FTC-Chatbot-website',
  },
}

/** Official FIRST links shown in the footer. */
export const FTC_RESOURCES = [
  { label: 'FIRST Tech Challenge', href: 'https://www.firstinspires.org/robotics/ftc' },
  { label: 'Game & Season Info', href: 'https://www.firstinspires.org/resource-library/ftc/game-and-season-info' },
  { label: 'FTC Events', href: 'https://ftc-events.firstinspires.org' },
  { label: 'FTCScout', href: 'https://ftcscout.org' },
]
