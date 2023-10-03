import { FC, useState } from 'react'
import className from './languagesButtonStyles'
import useTranslations from '@/hooks/useTranslations'
import Arrow from './IconsComponents/Arrow'
import LanguagesMenu from './LanguagesMenu'
import { LanguagesButtonsProps } from './languagesButton.types'
import Orbe from './IconsComponents/Orbe'

const {
  containerMobileLanguageButtonMenu,
  mobilelanguageButton,
  mobileLanguagetext,
  containerLanguageButtonsMenu,
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
            className={mobilelanguageButton}
          >
            <p className={mobileLanguagetext}>
              {currentLang?.split('-')[0].toUpperCase()}
            </p>
            <div id="arrow" className={isOpenMenu ? 'rotate-180' : ''}>
              <Arrow />
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
        <div className={containerLanguageButtonsMenu}>
          <div
            data-testid="language-button-lg"
            className={languageButton}
            onClick={handleClick}
          >
            <Orbe />
            <div className={languageText}>
              {currentLang?.split('-')[0].toUpperCase()}
            </div>
            <div className={isOpenMenu ? '-rotate-90' : 'rotate-90'}>
              <Arrow />
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
