import { FC, useState } from 'react'
import useTranslations from '../../hooks/useTranslations'
import LangButtons from '@/components/LangButtons'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'
import className from './headStyles'
import MenuArrowNext from '@/components/MenuArrowNext'
import MenuArrowDown from '@/components/MenuArrowDown'
import Orbe from '@/components/Orbe'
import Navbar from '@/components/Navbar/index'

const {
  header,
  mobileHeader,
  mobileLogoButton,
  languageButton,
  mobileMenuHeder,
  menuHeader,
  mobilelanguageButton,
  mobileLanguagetext,
  languageText,
} = className

const Header: FC = () => {
  const { currentLang } = useTranslations()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header className={`${mobileHeader} ${header} `}>
      <div className={mobileLogoButton}>
        <div>
          <div className="sm:hidden">
            <Logo variant={VARIANT.PRIMARY} text={false} />
          </div>
          <div className="hidden sm:block">
            <Logo variant={VARIANT.PRIMARY} />
          </div>
        </div>
        <div className="flex relative pl-5">
          <div className={mobilelanguageButton} onClick={handleClick}>
            <div className={mobileLanguagetext}>
              {currentLang?.split('-')[0].toUpperCase()}
            </div>
            <div className={isOpenMenu ? 'rotate-180' : ''}>
              <MenuArrowNext />
            </div>
          </div>
          <div className={mobileMenuHeder}>
            {isOpenMenu && <LangButtons isMobile={true} />}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Logo variant={VARIANT.PRIMARY} />
      </div>
      <div className="relative flex items-center justify-around">
        <Navbar />
        <div className="flex relative pl-5 ">
          <div className={`hidden lg:${languageButton}`} onClick={handleClick}>
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
          <div className={`hidden lg:${menuHeader}`}>
            {isOpenMenu && <LangButtons />}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
