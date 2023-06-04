import { FC } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'

const Header: FC = () => {
  const { translations } = useTranslations()
  return (
    <header>
      <LangButtons />
      <nav>
        <ul>
          <li>{translations.navLinks.home}</li>
          <li>{translations.navLinks.anchorTitle}</li>
        </ul>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
