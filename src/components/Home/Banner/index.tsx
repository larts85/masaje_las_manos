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
    <div id="banerContainer" className={bannerContainer}>
      <div id="content" className={content}>
        <ImageOne />
        <div id="titleAndSlogan" className={titleAndSlogan}>
          {translations.bannerHomePage.title}
          <p className={slogan}>{translations.bannerHomePage.slogan}</p>
        </div>
        <ImageTwo />
      </div>
      <div id="backgound" className={backgound}>
        <div id="rectangleBackGround" className={rectangleBackGround}></div>
        <Background />
        <LineOne />
        <LineTwo />
      </div>
    </div>
  )
}

export default Banner
