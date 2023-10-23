import { FC, useState } from 'react'
import className from './languagesButtonStyles'
import useTranslations from '@/hooks/useTranslations'
import Arrow from './IconsComponents/Arrow'
import LanguagesMenu from './LanguagesMenu'
import { LanguagesButtonsProps } from './languagesButton.types'
import Orbe from './IconsComponents/Orbe'

const {
  containerLanguageButtonsMenu,
  languageButton,
  languageText,
  languageButtonMenu,
} = className

const LanguagesButton: FC<LanguagesButtonsProps> = () => {
  const { currentLang } = useTranslations()

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <div data-testid="languagesButton">
      {
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
      }
    </div>
  )
}

export default LanguagesButton
