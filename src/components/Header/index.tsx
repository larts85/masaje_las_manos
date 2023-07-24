import { FC } from 'react'
import Logo from '../Logo'
import { VARIANT } from '@/types/globals.types'
import className from './headStyles'
import Navbar from '@/components/Navbar/index'
import LanguagesButton from '../LanguagesButton'

const {
  header,
  mobileHeader,
  mobileLogoButton,
  logoImage,
  logoImageTextSm,
  logoImageTextLg,
} = className

const Header: FC = () => {
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
        <LanguagesButton isMobile={true} />
      </div>
      <div data-testid="logoImageTextLg" className={logoImageTextLg}>
        <Logo variant={VARIANT.PRIMARY} />
      </div>
      <div className="relative flex items-center justify-around">
        <Navbar />

        <div className="hideen lg:flex">
          <LanguagesButton />
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
