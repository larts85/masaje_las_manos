import { FC } from 'react'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'
import className from './headStyles'
import Navbar from '@/components/Navbar/index'
import LanguagesButton from '../LanguagesButton'

const {
  mobileLogoButton,
  mobileLanguageButton,
  mobileNavbar,
  logoImage,
  logoImageTextSm,
  logoImageTextLg,
  containerLogoNavButton,
  navbar,
  languagesButton,
} = className

const Header: FC = () => {
  return (
    <header>
      <div className={mobileLogoButton}>
        <div className="logo justify-start">
          <div data-testid="logoImage" className={logoImage}>
            <Logo variant={VARIANT.PRIMARY} text={false} />
          </div>
          <div data-testid="logoImageTextSm" className={logoImageTextSm}>
            <Logo variant={VARIANT.PRIMARY} />
          </div>
        </div>
        <div className={mobileLanguageButton}>
          <LanguagesButton isMobile={true} />
        </div>
      </div>
      <div className={mobileNavbar}>
        <Navbar />
      </div>
      <div className={containerLogoNavButton}>
        <div className={logoImageTextLg}>
          <Logo variant={VARIANT.PRIMARY} />
        </div>
        <div className={navbar}>
          <Navbar />
        </div>
        <div className={languagesButton}>
          <LanguagesButton />
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
