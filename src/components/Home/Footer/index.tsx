import { FC } from 'react'
import FooterBackground from './FooterBackground'
import FooterLineOne from './FooterLineOne'
import FooterLineTwo from './FooterLineTwo'
import FooterWhatsapp from './FooterWhatsapp'
import FooterLineThree from './FooterLineThree'
import useTranslations from '@/hooks/useTranslations'

const Footer: FC = () => {
  const { translations } = useTranslations()
  return (
    <footer className="absolute top-[257vw]">
      <FooterBackground />
      <FooterLineOne />
      <FooterLineTwo />
      <FooterLineThree />
      <FooterWhatsapp />

      <div className="relative top-[30vw] w-[100vw] bg-secondary-darker h-[7vw] flex items-center justify-center">
        <p className="text-secondary-lighter text-[6px] sm:text-[8px] md:text-[10px] lg:text-12px] xl:text-[14px] text-center ">
          {translations.footerHomePage.Copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
