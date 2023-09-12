/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const About: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div>
      <Header />
      <div data-testid="about">{translations.about.title}</div>
    </div>
  )
}

About.displayName = 'About'
export default About
