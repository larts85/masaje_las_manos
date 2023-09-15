/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const About: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div>
      <Head>
        <title>{translations.about.pageTitle}</title>
        <meta name="description" content={translations.about.metaDescription} />
      </Head>
      <header>
        <Header />
      </header>
      <div data-testid="about-page">{translations.about.pageTitle}</div>
    </div>
  )
}

About.displayName = 'About'
export default About
