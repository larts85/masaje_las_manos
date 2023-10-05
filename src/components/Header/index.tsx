import { FC } from 'react'
import Logo from './Logo'
import { VARIANT } from '@/types/globals.types'
import className from './head.styles'
import Navbar from '@/components/Header/Navbar/index'
import LanguagesButton from '../LanguagesButton'

const { hederContainer } = className

const Header: FC = () => {
  return (
    <header className={hederContainer}>
      <Logo variant={VARIANT.PRIMARY} data-testid="logo-component" />
      <Navbar data-testid="navbar-component" />
      <LanguagesButton data-testid="languages-button-component" />
    </header>
  )
}

Header.displayName = 'Header'

export default Header
