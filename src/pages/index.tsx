/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslations from '../../hooks/useTraslations'
import Header from '../../components/Header/index'

const Home: NextPage = () => {
  const { translations } = useTranslations()
  return (
    <>
      <Head>
        <title>{translations.home.pageTitle}</title>
        <meta name="description" content={translations.home.metaDescription} />
        {/* <link rel="stylesheet" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <h1 className="text-1xl font-bold underline">
        {translations.home.greeting}
      </h1>
    </>
  )
}

export default Home
