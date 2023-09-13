import { FC, useState } from 'react'
import className from './languagesButtonStyles'
import useTranslations from '@/hooks/useTranslations'
import MenuArrowNext from '../ImagesComponents/MenuArrowNext'
import LanguagesMenu from './LanguagesMenu'
import { LanguagesButtonsProps } from './languagesButton.types'
import Orbe from '../ImagesComponents/Orbe'
import MenuArrowDown from '../ImagesComponents/MenuArrowDown'

const {
  containerMobileLanguageButtonMenu,
  mobilelanguageButton,
  mobileLanguagetext,
  containerLanguageButtons,
  languageButton,
  languageText,
  languageButtonMenu,
} = className

const LanguagesButton: FC<LanguagesButtonsProps> = ({ isMobile = false }) => {
  const { currentLang } = useTranslations()

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <div data-testid="languagesButton">
      {isMobile && (
        <div className={containerMobileLanguageButtonMenu}>
          <div
            onClick={handleClick}
            data-testid="mobile-language-button"
            className={`mobileLanguageButton ${mobilelanguageButton} 
            `}
          >
            <div className={mobileLanguagetext}>
              {currentLang?.split('-')[0].toUpperCase()}
            </div>
            <div className={isOpenMenu ? 'rotate-180' : ''}>
              <MenuArrowNext />
            </div>
          </div>
          <div
            data-testid="lange-buttons-menu"
            className={`${languageButtonMenu} ${
              isOpenMenu ? `opacity-100` : `opacity-0`
            }`}
          >
            <LanguagesMenu isMobile />
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={containerLanguageButtons}>
          <div
            data-testid="language-button-lg"
            className={`languageButton lg:${languageButton}`}
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
            data-testid="language-button-menu"
            className={`${languageButtonMenu} ${
              isOpenMenu ? `opacity-100` : `opacity-0`
            }`}
          >
            <LanguagesMenu />
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguagesButton
