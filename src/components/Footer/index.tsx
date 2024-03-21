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
    <div className="flex flex-col w-full h-auto items-center mt-[-9%]">
      <div className={`max-w-[1440px] w-full ${style.footer}`}>
        <FooterLineOne />
        <FooterLineTwo />
        <FooterLineThree />
        <FooterWhatsapp />
        <FooterBackground />
        <div
          className={`p-3 ${className.copyrightContainer} ${style.footerCopyright}`}
        >
          <p className={className.copyright}>
            {translations.footerHomePage.Copyright}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
