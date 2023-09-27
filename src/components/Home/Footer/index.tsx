import { FC } from 'react'
import FooterBackground from './FooterBackground'
import FooterLineOne from './FooterLineOne'
import FooterLineTwo from './FooterLineTwo'
import FooterWhatsapp from './FooterWhatsapp'
import FooterLineThree from './FooterLineThree'

const Footer: FC = () => {
  return (
    <footer className="relative">
      <div className="absolute top-[180vh] z-10">
        <FooterLineOne />
      </div>
      <div className="absolute top-[168.2vh] z-10">
        <FooterLineTwo />
      </div>
      <div className="absolute top-[175vh] z-10">
        <FooterLineThree />
      </div>
      <div className="absolute top-[195vh] right-[2vw] z-10">
        <FooterWhatsapp />
      </div>
      <div className="absolute top-[181.5vh] z-5">
        <FooterBackground />
        <div className=" w-[100vw] bg-secondary-darker h-[7vw] flex items-center justify-center">
          <p className="text-secondary-lighter text-[7px] text-center ">
            The Hands Massage 2023, Todos los derechos reservados, Desarrollado
            por lucesitaliss e imadev
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
