import { FC } from 'react'
import FooterBackground from './FooterBackground'
import FooterLineOne from './FooterLineOne'
import FooterLineTwo from './FooterLineTwo'
import FooterWhatsapp from './FooterWhatsapp'

const Footer: FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[277vw] z-10">
        <FooterLineOne />
      </div>
      <div className="absolute top-[260vw] z-10">
        <FooterLineTwo />
      </div>
      <div className="absolute top-[300vw] right-[2vw] z-10">
        <FooterWhatsapp />
      </div>
      <div className="absolute top-[280vw] z-5">
        <FooterBackground />
        <div className=" w-[100vw] bg-secondary-darker h-[7vw] flex items-center justify-center">
          <p className="text-secondary-lighter text-[7px] text-center ">
            The Hands Massage 2023, Todos los derechos reservados, Desarrollado
            por Imadev
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
