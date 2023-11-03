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
    content,
    titleAndSlogan,
    slogan,
    backgound,
    rectangleBackGround,
  } = className

  return (
    <section className={bannerContainer}>
      <div className={content}>
        <ImageOne />
        <h1 className={titleAndSlogan}>
          {translations.bannerHomePage.title}
          <p className={slogan}>{translations.bannerHomePage.slogan}</p>
        </h1>
        <ImageTwo />
      </div>
      <div className={backgound}>
        <div className={rectangleBackGround}></div>
        <Background />
        <LineOne />
        <LineTwo />
      </div>
    </section>
  )
}

export default Banner
