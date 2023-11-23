import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'
import useTranslations from '@/hooks/useTranslations'
import className from './content.styles'

const Content: FC = () => {
  const { translations } = useTranslations()

  return (
    <div className={className.mainConter}>
      <div className="relative w-full  xlg:top-0  top-[-17vw] max-w-[1440px]">
        <ContentBackground />
      </div>

      <div className={className.contentCotainer}>
        <div className={className.sessionOne}>
          <div className={className.textsesionOne}>
            {translations.contentHomePage.sesionOne.map((sesion) => (
              <p key={sesion}>
                {sesion}
                <br></br>
                <br></br>
              </p>
            ))}
          </div>
          <ContentImageOne />
        </div>
        <div className={className.sesionTwo}>
          <ContentImageTwo />
          <div className={className.sesionTwoText}>
            <p className={className.sesionTwoTitle}>
              {translations.contentHomePage.sesionTwoTitle}
            </p>
            <ul className={className.sesionTwoList}>
              {translations.contentHomePage.sesionTwoContent.map(
                (vantagem, index) => (
                  <li key={index}>{vantagem}</li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className={className.sesionThree}>
          <div className={className.sesionThreeText}>
            {translations.contentHomePage.sesionThree.map((sesion) => (
              <p key={sesion}>
                {sesion}
                <br />
              </p>
            ))}
          </div>
          <ContentImageThree />
        </div>
      </div>
    </div>
  )
}

export default Content
