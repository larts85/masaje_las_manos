import { FC } from 'react'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'
import className from './head.styles'
import Navbar from '@/components/Navbar/index'
import LanguagesButton from '../LanguagesButton'

const {
  mobileLogoButton,
  mobileLanguageButton,
  mobileNavbar,
  logoImageTextLg,
  containerLogoNavButton,
  navbar,
  languagesButton,
} = className

const Header: FC = () => {
  return (
    <header>
      <div className={mobileLogoButton}>
        <Logo variant={VARIANT.PRIMARY} />
        <div
          className={mobileLanguageButton}
          data-testid="mobile-language-button-header"
        >
          <LanguagesButton isMobile={true} />
        </div>
      </div>
      <div className={mobileNavbar} data-testid="mobile-navbar">
        <Navbar />
      </div>
      <div className={containerLogoNavButton}>
        <div data-testid="logoImageTextLg" className={logoImageTextLg}>
          <Logo variant={VARIANT.PRIMARY} />
        </div>
        <div className={navbar} data-testid="navbar">
          <Navbar />
        </div>
        <div className={languagesButton} data-testid="language-button">
          <LanguagesButton />
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
