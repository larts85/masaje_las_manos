import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Image from 'next/image'
// import { className as c } from './headStyle'
// import { header, nav } from './headStyle'
import { header, imageLogo, languageButton, li, nav, ul } from './headStyle'

const Header: FC = () => {
  const { translations } = useTranslations()

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={header}>
      <nav className={nav}>
        <Image
          src="/images/LogoPrimary.svg"
          alt="THE HANDS MASSAGE"
          width={414}
          height={46}
          className={imageLogo}
        />
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

export default Header
