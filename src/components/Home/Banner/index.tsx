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
    <div className="flex justify-center">
      <section className={bannerContainer}>
        <div className={content}>
          <h2 className={titleAndSlogan}>
            {translations.bannerHomePage.title}
          </h2>
          <p className={slogan}>{translations.bannerHomePage.slogan}</p>
          <div className="relative top-[-9vw] flex  items-start xlg:top-[0vw]">
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
