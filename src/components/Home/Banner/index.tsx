import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'
import useTranslations from '@/hooks/useTranslations'
import className from './banner.styles'

const Banner: FC = () => {
  const { translations } = useTranslations()
  const {
    bannerContainer,
    sessionContent,
    content,
    imageContent,
    titleAndSlogan,
    slogan,
    backgound,
    rectangleBackGround,
  } = className

  return (
    <div className={bannerContainer}>
      <section className={sessionContent}>
        <div className={content}>
          <h2 className={titleAndSlogan}>
            {translations.bannerHomePage.title}
          </h2>
          <p className={slogan}>{translations.bannerHomePage.slogan}</p>
          <div className={imageContent}>
            <ImageOne />
            <ImageTwo />
          </div>
        </div>
        <div className={backgound}>
          <div className={rectangleBackGround}></div>
          <Background />
          <LineOne />
          <LineTwo />
        </div>
      </section>
    </div>
  )
}

export default Banner
