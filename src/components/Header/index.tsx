import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'
import className from './headStyles'
import MenuArrowNext from '@/components/ImagesComponents/MenuArrowNext'
import MenuArrowDown from '@/components/ImagesComponents/MenuArrowDown'
import Orbe from '@/components/ImagesComponents/Orbe'
import Navbar from '@/components/Navbar/index'

const {
  header,
  mobileHeader,
  mobileLogoButton,
  languageButton,
  mobileMenuHeder,
  menuHeader,
  containerMobileLanguageButton,
  mobilelanguageButton,
  mobileLanguagetext,
  containerLanguageButtons,
  languageText,
  logoImage,
  logoImageTextSm,
  logoImageTextLg,
} = className

const Header: FC = () => {
  const { currentLang } = useTranslations()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
    setIsClicked(true)
    setAnimationKey(animationKey + 1)
  }

  return (
    <header className={`${mobileHeader} ${header} `}>
      <div className={mobileLogoButton}>
        <div>
          <div data-testid="logoImage" className={logoImage}>
            <Logo variant={VARIANT.PRIMARY} text={false} />
          </div>
          <div data-testid="logoImageTextSm" className={logoImageTextSm}>
            <Logo variant={VARIANT.PRIMARY} />
          </div>
        </div>
        <div className={containerMobileLanguageButton}>
          <div
            onClick={handleClick}
            data-testid="mobileLanguageButton"
            key={animationKey}
            className={`mobileLanguageButton ${mobilelanguageButton} ${
              isClicked ? 'animate-pulse-once' : ''
            }`}
          >
            <div className={mobileLanguagetext}>
              {currentLang?.split('-')[0].toUpperCase()}
            </div>
            <div className={isOpenMenu ? 'rotate-180' : ''}>
              <MenuArrowNext />
            </div>
          </div>
          <div
            className={`mobilelanguageButton
              ${isOpenMenu} ? ${mobileMenuHeder} animate-pulse-once : ''`}
          >
            {isOpenMenu && <LangButtons isMobile={true} />}
          </div>
        </div>
      </div>
      <div data-testid="logoImageTextLg" className={logoImageTextLg}>
        <Logo variant={VARIANT.PRIMARY} />
      </div>
      <div className="relative flex items-center justify-around">
        <Navbar />
        <div className={containerLanguageButtons}>
          <div
            key={animationKey}
            className={`hidden lg:${languageButton} ${
              isClicked ? 'animate-pulse-once' : ''
            }`}
            onClick={handleClick}
          >
            <div>
              <Orbe />
            </div>
            <div className={languageText}>
              {currentLang?.split('-')[0].toUpperCase()}
            </div>
            <div className={isOpenMenu ? 'rotate-180' : ''}>
              <MenuArrowDown />
            </div>
          </div>
          <div
            data-testid="languageButton"
            className={`languageButton
              ${isOpenMenu}
                ? hidden lg:flex lg:${menuHeader} animate-pulse-once
                : ''`}
          >
            {isOpenMenu && <LangButtons />}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
