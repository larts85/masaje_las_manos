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
    <div id=" content" className={className.content}>
      <div id="contentContainer" className={className.contentCotainer}>
        <div id="sesionOne" className={className.sesionOne}>
          {translations.contentHomePage.sesionOne.map((sesion) => (
            <p key={sesion}>
              {sesion}
              <br></br>
              <br></br>
            </p>
          ))}
        </div>
        <div id="sesionTwo" className={className.sesionTwo}>
          <p id="title" className={className.title}>
            {translations.contentHomePage.sesionTwoTitle}
          </p>
          <ul id="list" className={className.list}>
            {translations.contentHomePage.sesionTwoContent.map(
              (vantagem, index) => (
                <li key={index}>{vantagem}</li>
              ),
            )}
          </ul>
        </div>

        <div id="sesionThree" className={className.sesionThree}>
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
