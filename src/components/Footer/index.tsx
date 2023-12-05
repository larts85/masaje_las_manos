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
      <div className={className.background}>
        <FooterBackground />
      </div>

      <div className={className.lineContainer}>
        <FooterLineOne />
        <FooterLineTwo />
        <FooterLineThree />
      </div>

      <div className={className.content}>
        <div className={className.whatsapp}>
          <FooterWhatsapp />
        </div>
        <div className={className.copyrightContainer}>
          <p className={className.copyright}>
            {translations.footerHomePage.Copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
