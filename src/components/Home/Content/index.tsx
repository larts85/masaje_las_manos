import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'
import useTranslations from '@/hooks/useTranslations'

const HomeBoddy: FC = () => {
  const { translations } = useTranslations()
  return (
    <div className="relative">
      <div className="absolute top-[40vw] z-0">
        <ContentBackground />
      </div>
      <div className="absolute z-10 top-[67vw] right-[0.5vw]">
        <ContentImageOne />
      </div>
      <div className="absolute z-10 top-[70vw] left-[3vw] w-[65vw] font-jost text-right text-[2.2vw] font-normal leading-tight">
        {translations.contentHomePage.sesionOne.map((sesion) => (
          <p key={sesion}>
            {sesion}
            <br></br>
            <br></br>
          </p>
        ))}
      </div>

      <div className="absolute z-10 top-[150vw] left-[5vw]">
        <ContentImageTwo />
      </div>
      <p className="absolute z-10 top-[130vw] right-[2vw] w-[55vw] flex flex-col font-jost text-left text-[3.2vw] font-bold leading-[3vw]] ">
        {translations.contentHomePage.sesionTwoTitle}
      </p>
      <ul className="absolute z-10 top-[145vw] left-[45vw] flex-shrink-0 text-left text-[2.2vw] font-normal leading-tight overflow-hidden text-ellipsis">
        {translations.contentHomePage.sesionTwoContent.map(
          (vantagem, index) => (
            <li key={index}>{vantagem}</li>
          ),
        )}
      </ul>
      <div className="absolute z-10 top-[253vw] right-[1vw]">
        <ContentImageThree />
      </div>
      <div className="absolute z-10 top-[230vw] left-[7vw] w-[55vw] flex-shrink-0 font-jost text-left text-[2.2vw] font-normal leading-tight">
        {translations.contentHomePage.sesionThree.map((sesion) => (
          <p key={sesion}>
            {sesion}
            <br />
          </p>
        ))}
      </div>
    </div>
  )
}

export default HomeBoddy
