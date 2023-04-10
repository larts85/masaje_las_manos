import { FC } from 'react'
import useTranslations from '../../hooks/useTraslations'
import LangButtons from '../LangButtons'

const Header: FC = () => {
  return (
    <header>
      <LangButtons />
      <nav>
        <ul>
          <li>{useTranslations().translations.navLinks.home}</li>
          <li>{useTranslations().translations.navLinks.anchorTitle}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
