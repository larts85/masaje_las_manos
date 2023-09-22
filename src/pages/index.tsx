/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslations from '@/hooks/useTranslations'
import Header from '../components/Header'
import Banner from '@/components/Home/Banner'
import HomeBoddy from '@components/Home/Boddy'

const Home: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div className="min-w-[400px] max-h-[3229px]">
      <Head>
        <title>{translations.home.pageTitle}</title>
        <meta name="description" content={translations.home.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="relative">
        <Banner />
        <HomeBoddy />
      </main>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
