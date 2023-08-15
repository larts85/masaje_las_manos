import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const Contact: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div data-testid="contact">
      <Header />
      <div>{translations.contact.title}</div>
    </div>
  )
}

Contact.displayName = 'About'
export default Contact
