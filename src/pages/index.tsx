/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslations from '@/hooks/useTranslations'
import Header from '../components/Header'

const Home: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <>
      <Head>
        <title>{translations.home.pageTitle}</title>
        <meta name="description" content={translations.home.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <h1>{translations.home.greeting}</h1>
      <button className="btn-primary">Save changes</button>
    </>
  )
}

Home.displayName = 'Home'

export default Home
