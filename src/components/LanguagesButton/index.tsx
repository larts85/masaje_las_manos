import { FC, useState } from 'react'
import className from './languagesButtonStyles'
import useTranslations from '@/hooks/useTranslations'
import MenuArrowNext from '../ImagesComponents/MenuArrowNext'
import LanguageMenu from './LanguagesMenu'
import { LanguagesButtonsProps } from './languagesButton.types'
import Orbe from '../ImagesComponents/Orbe'
import MenuArrowDown from '../ImagesComponents/MenuArrowDown'

const {
  containerMobileLanguageButton,
  mobilelanguageButton,
  mobileLanguagetext,
  mobileMenuHeder,
  containerLanguageButtons,
  languageButton,
  languageText,
  menuHeader,
} = className

const LanguagesButton: FC<LanguagesButtonsProps> = ({ isMobile = false }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const { currentLang } = useTranslations()

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
    setIsClicked(true)
    setAnimationKey(animationKey + 1)
  }

  return (
    <div>
      {isMobile && (
        <div className={containerMobileLanguageButton}>
          <div
            onClick={handleClick}
            data-testid="mobileLanguageButton"
            key={animationKey}
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
            className={`mobilelanguageButton
      ${isOpenMenu} ? ${mobileMenuHeder} : ''`}
          >
            {isOpenMenu && <LanguageMenu isMobile={true} />}
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={containerLanguageButtons}>
          <div
            key={animationKey}
            className={`hidden lg:${languageButton} ${
              isClicked ? 'transition-opacity duration-300 ease-in-out' : ''
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
                ? hidden lg:flex lg:${menuHeader} animate-fadeIn
                : ''`}
          >
            {isOpenMenu && <LanguageMenu />}
          </div>
        </div>
      )}
    </div>
  )
}
export default LanguagesButton
