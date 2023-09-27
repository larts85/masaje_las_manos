import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'

const HomeBoddy: FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[27vh] z-200">
        <ContentBackground />
      </div>
      <div className="absolute z-10 top-[45vh] right-[0.5vw]">
        <ContentImageOne />
      </div>
      <p className="absolute z-10 top-[45vh] left-[3vw] w-[205px] font-jost text-right text-[8px] font-normal leading-tight">
        Bienvenidos a The Hands Massage, donde le brindamos un profesional
        servicio de masaje que puede ser en local y a domicilio, segun su
        preferencia.
        <br />
        <br />
        Ofrecemos una amplia variedad de tratamientos de masaje diseñados para
        satisfacer sus necesidades.
      </p>
      <div className="absolute z-10 top-[100vh] left-[5vw]">
        <ContentImageTwo />
      </div>
      <p className="absolute z-10 top-[88vh] right-[2vw] w-[170px] h-[200px] flex flex-col font-jost text-left text-[11px] font-bold leading-4 ">
        ¿Por qué es importante tener una rutina de masaje?
      </p>
      <p className="absolute z-10 top-[100vh] right-[2vw] w-[170px] h-[200px] flex-shrink-0 font-jost text-left text-[8px] font-normal leading-tight overflow-hidden text-ellipsis">
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
      <div className="absolute z-10 top-[167vh] right-[1vw]">
        <ContentImageThree />
      </div>
      <p className="absolute z-10 top-[152vh] left-[5vw] w-[170px] flex-shrink-0 font-jost text-left text-[8px] font-normal leading-tight">
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