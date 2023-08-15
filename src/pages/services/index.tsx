import { NextPage } from 'next'
import useTranslations from '@/hooks/useTranslations'
import Header from '@/components/Header'

const Services: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <div data-testid="services">
      <Header />
      <div>{translations.services.title}</div>
    </div>
  )
}

Services.displayName = 'About'
export default Services
