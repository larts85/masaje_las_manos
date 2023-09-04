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
  mobileLanguageButtonMenu,
  containerLanguageButtons,
  languageButton,
  languageText,
  languageButtonMenu,
} = className

const LanguagesButton: FC<LanguagesButtonsProps> = ({ isMobile = false }) => {
  const [animationKey, setAnimationKey] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(0)

  const { currentLang } = useTranslations()

  const handleClick = () => {
    setAnimationKey(animationKey + 1)
    setIsClicked((prevState) => {
      if (prevState === 0 || prevState === 2) {
        return 1
      } else {
        return 2
      }
    })
    setIsOpenMenu(!isOpenMenu)
  }

  const handleAnimationEnd = () => {
    if (isClicked === 2) {
      setIsClicked(0)
    }
  }
  return (
    <div data-testid="languagesButton">
      {isMobile && (
        <div className={containerMobileLanguageButtonMenu}>
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
            className={`
            ${isClicked === 0 ? ` hidden` : ''}
           ${
             isClicked === 1
               ? `  ${mobileLanguageButtonMenu} animate-fadeIn`
               : ''
           }
           ${
             isClicked === 2
               ? `${mobileLanguageButtonMenu} animate-fadeOut`
               : ''
           }
         `}
            onAnimationEnd={handleAnimationEnd}
          >
            <LanguagesMenu isMobile={true} />
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={containerLanguageButtons}>
          <div
            data-testid="languageButtonlg"
            key={animationKey}
            className={`languageButtonlg hidden lg:flex lg:${languageButton}`}
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
            data-testid="languageButtonMenu"
            className={`hidden
              ${
                isClicked === 1
                  ? ` lg:flex lg:${languageButtonMenu} lg:animate-fadeIn`
                  : ''
              }
              ${
                isClicked === 2
                  ? ` lg:flex lg:${languageButtonMenu} lg:animate-fadeOut`
                  : ''
              }
            `}
            onAnimationEnd={handleAnimationEnd}
          >
            <LanguagesMenu />
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguagesButton
