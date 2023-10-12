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
    <footer className="relative">
      <div className="absolute top-[272.5vw] z-10">
        <FooterLineOne />
      </div>
      <div className="absolute top-[255vw] z-10">
        <FooterLineTwo />
      </div>
      <div className="absolute top-[265vw] z-10">
        <FooterLineThree />
      </div>
      <div className="absolute top-[295vw] right-[2vw] z-10">
        <FooterWhatsapp />
      </div>
      <div className="absolute top-[274vw] z-5">
        <FooterBackground />
        <div className=" w-[100vw] bg-secondary-darker h-[7vw] flex items-center justify-center">
          <p className="text-secondary-lighter text-[2vw] text-center ">
            {translations.footerHomePage.Copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
