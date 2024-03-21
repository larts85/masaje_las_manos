import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'
import useTranslations from '@/hooks/useTranslations'
import className from './content.styles'
import style from './content.module.css'

const Content: FC = () => {
  const { translations } = useTranslations()

  return (
    <div className="flex flex-col items-center">
      <div className={`mt-[-12%]  xxl:mt-[-200px] ${style.content} `}>
        <section className={style.sectionOne}>
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
        </section>

        <section className={style.sectionTwo}>
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
        </section>

        <section className={style.sectionThree}>
          <div className={className.sesionThreeText}>
            {translations.contentHomePage.sesionThree.map((sesion) => (
              <p key={sesion} className={className.sesionThreeParagraph}>
                {sesion}
                <br />
              </p>
            ))}
          </div>
          <div className={className.sesionThreeImage}>
            <ContentImageThree />
          </div>
        </section>
        <ContentBackground />
      </div>
    </div>
  )
}

export default Content
