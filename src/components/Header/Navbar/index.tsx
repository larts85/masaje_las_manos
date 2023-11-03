import className from './navbar.styles'
import Link from 'next/link'
import useTranslations from '../../../hooks/useTranslations'

const Navbar = () => {
  const { ul, li } = className
  const { translations } = useTranslations()

  return (
    <nav>
      <ul className={ul}>
        <Link href="/">
          <li className={li}>{translations.navLinks.home}</li>
        </Link>
        <Link href="/services">
          <li className={li}>{translations.navLinks.services}</li>
        </Link>
        <Link href="/contact">
          <li className={li}>{translations.navLinks.contact}</li>
        </Link>
        <Link href="/about">
          <li className={li}>{translations.navLinks.aboutUs}</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Navbar
