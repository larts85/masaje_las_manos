import useTranslations from '../../hooks/useTranslations'
import className from './navbarStyles'

const Navbar = () => {
  const { nav, ul, li } = className
  const { translations } = useTranslations()

  return (
    <nav className={nav}>
      <ul className={ul}>
        <li className={li}>{translations.navLinks.home}</li>
        <li className={li}>{translations.navLinks.services}</li>
        <li className={li}>{translations.navLinks.contact}</li>
        <li className={li}>{translations.navLinks.aboutUs}</li>
      </ul>
    </nav>
  )
}
export default Navbar
