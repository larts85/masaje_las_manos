/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslations from '@/hooks/useTranslations'
import Header from '../components/Header'
import Banner from '@/components/Home/Banner'
import Content from '@/components/Home/Content'
import Footer from '@/components/Home/Footer'

const Home: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div>
      <Head>
        <title>{translations.home.pageTitle}</title>
        <meta name="description" content={translations.home.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center">
        <Header />
        <main>
          <Banner />
          <Content />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
