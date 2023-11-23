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
      <div className="relative w-full max-w-[1440px] top-[-6vw] xlg:top-[-100px]">
        <FooterBackground />
      </div>

      <div className="relative w-full max-w-[1440px]">
        <FooterLineOne />
        <FooterLineTwo />
        <FooterLineThree />
      </div>

      <div className={className.content}>
        <div className=" pr-[3vw] pb-[3vw] xlg:pr-[40px] xlg:pb-[20px]">
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
