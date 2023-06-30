import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'

import { header, languageButton, li, nav, ul, orbe } from './headStyle'

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
        {/* <button className={languageButton} onClick={handleClick}/> */}
        <button className={languageButton} onClick={handleClick}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={orbe}
          >
            <path
              d="M43.2585 22.4748C43.2585 34.2748 33.7894 43.8237 22.1293 43.8237C10.4692 43.8237 1 34.2748 1 22.4748C1 10.6748 10.4692 1.12592 22.1293 1.12592C33.7894 1.12592 43.2585 10.6748 43.2585 22.4748Z"
              stroke="#785825"
              stroke-width="2"
            />
            <path
              d="M34.5098 22.4748C34.5098 28.4966 33.0464 33.8998 30.7327 37.7642C28.407 41.6488 25.3339 43.8237 22.1293 43.8237C18.9247 43.8237 15.8516 41.6488 13.5258 37.7642C11.2122 33.8998 9.74878 28.4966 9.74878 22.4748C9.74878 16.453 11.2122 11.0498 13.5258 7.18544C15.8516 3.30083 18.9247 1.12592 22.1293 1.12592C25.3339 1.12592 28.407 3.30083 30.7327 7.18544C33.0464 11.0498 34.5098 16.453 34.5098 22.4748Z"
              stroke="#785825"
              stroke-width="2"
            />
            <line
              y1="23.1101"
              x2="44.2585"
              y2="23.1101"
              stroke="#785825"
              stroke-width="2"
            />
            <line
              y1="-1"
              x2="44.1561"
              y2="-1"
              transform="matrix(0.011655 0.999932 -0.999915 0.0130753 21.0999 0.670959)"
              stroke="#785825"
              stroke-width="2"
            />
            <path
              d="M6.35498 8.64569C22.55 13.8812 28.5731 11.3819 38.1728 8.11911"
              stroke="#785825"
              stroke-width="2"
            />
            <path
              d="M39.3719 35.6808C24.5233 32.3927 17.242 33.3057 6.21834 36.3493"
              stroke="#785825"
              stroke-width="2"
            />
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-1"
              x2="14.1047"
              y2="-1"
              transform="matrix(0.605913 0.795531 -0.449218 0.893422 0.943359 2.00006)"
              stroke="#785825"
              stroke-width="2"
            />
            <line
              y1="-1"
              x2="14.1398"
              y2="-1"
              transform="matrix(0.601865 -0.798598 0.453009 0.891506 9.48975 13.2919)"
              stroke="#785825"
              stroke-width="2"
            />
          </svg>
        </button>
      </nav>
      {showMenu && <LangButtons />}
    </header>
  )
}

Header.displayName = 'Header'

export default Header
