import { FC } from 'react'
import FooterBackground from './FooterBackground'
import FooterLineOne from './FooterLineOne'
import FooterLineTwo from './FooterLineTwo'
import FooterWhatsapp from './FooterWhatsapp'
import FooterLineThree from './FooterLineThree'
import useTranslations from '@/hooks/useTranslations'
import className from './footer.styles'

const Footer: FC = () => {
  const { translations } = useTranslations()
  return (
    <footer className={className.footerContainer}>
      <FooterBackground />
      <FooterLineOne />
      <FooterLineTwo />
      <FooterLineThree />
      <FooterWhatsapp />
      <div className={className.copyrightContainer}>
        <p className={className.copyright}>
          {translations.footerHomePage.Copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
