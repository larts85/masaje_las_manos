import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'
import useTranslations from '@/hooks/useTranslations'

const HomeBoddy: FC = () => {
  const { translations } = useTranslations()
  return (
    <div id="contentContainer" className="relative">
      <div
        id="contentCotainer"
        className="z-20 h-[100vh] w-[100vw] items-center flex flex-col"
      >
        <div
          id="sesionOne"
          className=" font-jost text-right font-normal leading-tight relative top-[22vw] right-[15vw] text-[9px] w-[200px] sm:text-[12px] sm:w-[300px] sm:top-[30vw] md:text-[15px] md:w-[400px] lg:text-[20px] lg:w-[600px] xl:text-[25px] xl:w-[700px]"
        >
          {translations.contentHomePage.sesionOne.map((sesion) => (
            <p key={sesion}>
              {sesion}
              <br></br>
              <br></br>
            </p>
          ))}
        </div>
        <div
          id="sesionTwo"
          className="relative left-[20vw] top-[57vw] sm:top-[80vw]"
        >
          <p
            id="title"
            className="flex flex-col font-jost text-left font-bold pb-[4vw] text-[12px] w-[150px] leading-[15px] sm:text-[15px] sm:w-[200px] sm:leading-[20px] md:text-[18px] md:w-[250px] md:leading-[25px] lg:text-[21px] lg:w-[350px] lg:leading-[35px] xl:text-[25px] xl:w-[400px] xl:leading-[45px] "
          >
            {translations.contentHomePage.sesionTwoTitle}
          </p>
          <ul
            id="list"
            className="flex-shrink-0 text-left font-normal leading-tight overflow-hidden text-ellipsis text-[9px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[25px]"
          >
            {translations.contentHomePage.sesionTwoContent.map(
              (vantagem, index) => (
                <li key={index}>{vantagem}</li>
              ),
            )}
          </ul>
        </div>
        <div
          id="sesionThree"
          className="relative top-[92vw] sm:top-[130vw] md:top-[135vw] right-[15vw]"
        >
          <div className="flex-shrink-0 font-jost text-left font-normal leading-tight text-[9px] w-[160px] sm:text-[12px] sm:w-[255px] md:text-[15px] md:w-[300px] lg:text-[20px] lg:w-[400px] xl:text-[25px] xl:w-[550px]">
            {translations.contentHomePage.sesionThree.map((sesion) => (
              <p key={sesion}>
                {sesion}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>

      <ContentImageOne />
      <ContentImageTwo />
      <ContentImageThree />
      <ContentBackground />
    </div>
  )
}

export default HomeBoddy
