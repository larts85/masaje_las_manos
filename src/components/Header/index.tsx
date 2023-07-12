import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'

import {
  header,
  mobileLogoButton,
  languageButton,
  li,
  nav,
  ul,
  mobilelanguageButton,
} from './headStyle'

const Header: FC = () => {
  const { translations } = useTranslations()
  const { currentLang } = useTranslations()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={`lg:flex lg:${header} `}>
      <div className={mobileLogoButton}>
        <div>
          <div className="sm:hidden">
            <Logo variant={VARIANT.PRIMARY} text={false} />
          </div>
          <div className="hidden sm:block">
            <Logo variant={VARIANT.PRIMARY} />
          </div>
        </div>
        <div className={mobilelanguageButton} onClick={handleClick}>
          <div className="text-secondary-darker font-semibold text-xl pb-0.5">
            {currentLang?.split('-')[0].toUpperCase()}
          </div>
          <div className={showMenu ? 'rotate-180' : ''}>
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-1"
                x2="10.0673"
                y2="-1"
                transform="matrix(0.795531 -0.605913 0.893422 0.449218 2.61621 12.1742)"
                stroke="#785825"
                strokeWidth="2"
              />
              <line
                y1="-1"
                x2="10.0923"
                y2="-1"
                transform="matrix(-0.798598 -0.601865 0.891506 -0.453009 10.6758 6.07422)"
                stroke="#785825"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        {showMenu && <LangButtons mobile={true} />}
      </div>
      <div className="hidden lg:block">
        <Logo variant={VARIANT.PRIMARY} />
      </div>
      <nav className={nav}>
        <ul className={ul}>
          <li className={li}>{translations.navLinks.home}</li>
          <li className={li}>{translations.navLinks.services}</li>
          <li className={li}>{translations.navLinks.contact}</li>
          <li className={li}>{translations.navLinks.aboutUs}</li>
        </ul>
      </nav>
      <div className={`hidden lg:${languageButton}`} onClick={handleClick}>
        <div>
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 13.9303C25.25 20.774 19.7585 26.3093 13 26.3093C6.24148 26.3093 0.75 20.774 0.75 13.9303C0.75 7.08655 6.24148 1.55127 13 1.55127C19.7585 1.55127 25.25 7.08655 25.25 13.9303Z"
              stroke="#785825"
              strokeWidth="1.5"
            />
            <path
              d="M20.1106 13.9303C20.1106 17.4435 19.2565 20.5878 17.9148 22.8287C16.5641 25.0847 14.803 26.3093 13.0001 26.3093C11.1973 26.3093 9.43614 25.0847 8.08541 22.8287C6.74377 20.5878 5.88965 17.4435 5.88965 13.9303C5.88965 10.4171 6.74377 7.27283 8.08541 5.03193C9.43614 2.77586 11.1973 1.55127 13.0001 1.55127C14.803 1.55127 16.5641 2.77586 17.9148 5.03193C19.2565 7.27283 20.1106 10.4171 20.1106 13.9303Z"
              stroke="#785825"
              strokeWidth="1.5"
            />
            <line
              y1="14.1409"
              x2="26"
              y2="14.1409"
              stroke="#785825"
              strokeWidth="1.5"
            />
            <line
              y1="-0.75"
              x2="25.9398"
              y2="-0.75"
              transform="matrix(0.011655 0.999932 -0.999915 0.0130753 12.3953 1.12146)"
              stroke="#785825"
              strokeWidth="1.5"
            />
            <path
              d="M3.7334 5.80627C13.2473 8.88194 16.7856 7.41367 22.425 5.49693"
              stroke="#785825"
              strokeWidth="1.5"
            />
            <path
              d="M23.1294 21.6882C14.4064 19.7566 10.129 20.2929 3.65307 22.0809"
              stroke="#785825"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="text-secondary-darker font-semibold font-jost">
          {currentLang?.split('-')[0].toUpperCase()}
        </div>
        <div className={showMenu ? 'rotate-180' : ''}>
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-1"
              x2="10.0673"
              y2="-1"
              transform="matrix(0.605913 0.795531 -0.449218 0.893422 0.558838 2.05737)"
              stroke="#785825"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="10.0923"
              y2="-1"
              transform="matrix(0.601865 -0.798598 0.453009 0.891506 6.65894 10.1169)"
              stroke="#785825"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className="hidden lg:flex">
          <LangButtons />
        </div>
      )}
    </header>
  )
}

Header.displayName = 'Header'

export default Header
