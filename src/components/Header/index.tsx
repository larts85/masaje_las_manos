import { FC } from 'react'
import Logo from './Logo'
import { VARIANT } from '@/types/globals.types'
import className from './head.styles'
import Navbar from '@/components/Header/Navbar/index'
import LanguagesButton from '../LanguagesButton'
import { headProp } from './head.types'

const { hederContainer, navAndButton } = className

const Header: FC<headProp> = ({ transparent }) => {
  return (
    <header
      className={`${hederContainer}  ${
        transparent ? 'bg-white' : `bg-secondary-lighter`
      }`}
    >
      <Logo variant={VARIANT.PRIMARY} data-testid="logo-component" />
      <div className={navAndButton}>
        <Navbar data-testid="navbar-component" />
        <LanguagesButton data-testid="languages-button-component" />
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
