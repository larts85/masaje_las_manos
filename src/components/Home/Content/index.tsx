import { FC } from 'react'
import ContentBackground from './ContentBackground'
import ContentImageOne from './ContentImageOne'
import ContentImageTwo from './ContentImageTwo'
import ContentImageThree from './ContentImageThree'
import useTranslations from '@/hooks/useTranslations'
import className from './content.styles'

const HomeBoddy: FC = () => {
  const { translations } = useTranslations()
  return (
    <div className={className.content}>
      <div className={className.contentCotainer}>
        <div className={className.sesionOne}>
          {translations.contentHomePage.sesionOne.map((sesion) => (
            <p key={sesion}>
              {sesion}
              <br></br>
              <br></br>
            </p>
          ))}
        </div>
        <div className={className.sesionTwo}>
          <p className={className.title}>
            {translations.contentHomePage.sesionTwoTitle}
          </p>
          <ul className={className.list}>
            {translations.contentHomePage.sesionTwoContent.map(
              (vantagem, index) => (
                <li key={index}>{vantagem}</li>
              ),
            )}
          </ul>
        </div>
        <div className={className.sesionThree}>
          {translations.contentHomePage.sesionThree.map((sesion) => (
            <p key={sesion}>
              {sesion}
              <br />
            </p>
          ))}
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
