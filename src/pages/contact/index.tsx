/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const Contact: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div>
      <Head>
        <title>{translations.contact.pageTitle}</title>
        <meta
          name="description"
          content={translations.contact.metaDescription}
        />
      </Head>
      <header>
        <Header />
      </header>
      <div data-testid="contact-page">{translations.contact.pageTitle}</div>
    </div>
  )
}

Contact.displayName = 'contact'
export default Contact
