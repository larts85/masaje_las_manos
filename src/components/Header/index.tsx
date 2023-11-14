import { FC } from 'react'
import Logo from './Logo'
import { VARIANT } from '@/types/globals.types'
import className from './head.styles'
import Navbar from '@/components/Header/Navbar/index'
import LanguagesButton from '../LanguagesButton'
import { headProp } from './head.types'

const { headerContainer, navAndButton, headercontent } = className

const Header: FC<headProp> = ({ transparent }) => {
  return (
    // <header className="flex justify-center">
    <div
      className={`${headerContainer}  ${
        transparent ? 'bg-white' : `bg-secondary-lighter`
      }`}
    >
      <section className={headercontent}>
        <Logo variant={VARIANT.PRIMARY} data-testid="logo-component" />
        <div className={navAndButton}>
          <Navbar data-testid="navbar-component" />
          <LanguagesButton data-testid="languages-button-component" />
        </div>
      </section>
    </div>
    // </header>
  )
}

Header.displayName = 'Header'

export default Header
