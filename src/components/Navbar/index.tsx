import useTranslations from '../../hooks/useTranslations'
import className from './navbarStyles'
import Link from 'next/link'

const Navbar = () => {
  const { nav, ul, li } = className
  const { translations } = useTranslations()

  return (
    <nav className={nav}>
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
