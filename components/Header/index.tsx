import { FC } from 'react'
import useTranslations from '../../hooks/useTraslations'
import LangButtons from '../LangButtons'

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

export default Header
