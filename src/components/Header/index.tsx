import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'

import { header, languageButton, li, nav, ul } from './headStyle'

const Header: FC = () => {
  const { translations } = useTranslations()

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={header}>
      <nav className={nav}>
        <Logo variant={VARIANT.PRIMARY} />
        <ul className={ul}>
          <li className={li}>{translations.navLinks.home}</li>
          <li className={li}>{translations.navLinks.services}</li>
          <li className={li}>{translations.navLinks.contact}</li>
          <li className={li}>{translations.navLinks.aboutUs}</li>
        </ul>
        <button className={languageButton} onClick={handleClick} />
      </nav>
      {showMenu && <LangButtons />}
    </header>
  )
}

Header.displayName = 'Header'

export default Header
