/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const Services: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div>
      <Head>
        <title>{translations.services.pageTitle}</title>
        <meta
          name="description"
          content={translations.services.metaDescription}
        />
      </Head>
      <header>
        <Header />
      </header>
      <div data-testid="services-page">{translations.services.pageTitle}</div>
    </div>
  )
}

Services.displayName = 'services'
export default Services
