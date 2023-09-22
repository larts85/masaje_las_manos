import { FC } from 'react'
import BoddyBackground from './BoddyBackground'
import BoddyImageOne from './BoddyImageOne'
import BoddyImageTwo from './BoddyImageTwo'
import BoddyImageThree from './BoddyImageThree'

const HomeBoddy: FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[20vw] z-0">
        <BoddyBackground />
      </div>
      <div className="absolute z-10 top-[50vw] right-[0.5vw]">
        <BoddyImageOne />
      </div>
      <p className="absolute z-10 top-[60vw] left-[5vw] w-[800px] h-[381px] flex-shrink-0 font-jost text-right text-[30px] font-normal leading-10">
        Bienvenidos a The Hands Massage, donde le brindamos un profesional
        servicio de masaje que puede ser en local y a domicilio, segun su
        preferencia.
        <br />
        <br />
        Ofrecemos una amplia variedad de tratamientos de masaje diseñados para
        satisfacer sus necesidades.
      </p>
      <div className="absolute z-10 top-[145vw] left-[0.5vw]">
        <BoddyImageTwo />
      </div>
      <p className="absolute z-10 top-[150vw] right-[1vw] w-[700px] h-[381px] flex-shrink-0 font-jost text-left text-[30px] font-normal leading-10">
        - Mejora la circulación sanguínea. <br />
        - Aumentar la flexibilidad. <br />
        - Mejora la movilidad de las articulaciones. <br />
        - Mejorar el sistema inmunológico. <br />
        - Promueve un mejor sueño. <br />
        -Reduce la tensión muscular. <br />
        -Se puede trataar lesiones deportivas.
        <br />
        - Mejora condiciones musculares crónicas. <br />
        - Aliviar dolor e inflamación. <br />- Mejorar la recuperación.
        <br />- Reduce el estrés.
      </p>
      <div className="absolute z-10 top-[260vw] right-[1vw]">
        <BoddyImageThree />
      </div>
      <p className="absolute z-10 top-[230vw] left-[5vw] w-[700px] h-[381px] flex-shrink-0 font-jost text-left text-[30px] font-normal leading-10">
        Nuestro equipo de terapeutas se encuentran altamente capacitados y
        listos para brindarle la atención personalizada que usted merece.
        <br /> Lo invitamos a descubrir todos los servicios y locales que
        tenemos y no dude en contactarnos para aclarar cualquier duda o para
        coordiral un turno.
      </p>
    </div>
  )
}

export default HomeBoddy
