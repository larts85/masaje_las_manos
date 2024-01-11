import { FC } from 'react'
import FooterBackground from './FooterBackground'
import FooterLineOne from './FooterLineOne'
import FooterLineTwo from './FooterLineTwo'
import FooterWhatsapp from './FooterWhatsapp'
import FooterLineThree from './FooterLineThree'
import useTranslations from '@/hooks/useTranslations'
import className from './footer.styles'
import style from './footer.module.css'

const Footer: FC = () => {
  const { translations } = useTranslations()
  return (
    <div className="flex flex-col items-center">
      <footer className={`${style.footer} mt-[-10%] xxl:mt-[-120px]`}>
        <FooterBackground />
        <FooterLineOne />
        <FooterLineTwo />
        <FooterLineThree />
        <FooterWhatsapp />
        <div
          className={`${className.copyrightContainer} ${style.footerCopyright}`}
        >
          <p className={className.copyright}>
            {translations.footerHomePage.Copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
