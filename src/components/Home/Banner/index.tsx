import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'
import useTranslations from '@/hooks/useTranslations'
import style from './banner.module.css'
import className from './banner.styles'

const Banner: FC = () => {
  const { translations } = useTranslations()

  return (
    <div className="flex flex-col items-center">
      <section className={style.banner}>
        <h2 className={`${style.title} ${className.title}`}>
          {translations.bannerHomePage.title}
        </h2>
        <p className={`${style.slogan} ${className.slogan}`}>
          {translations.bannerHomePage.slogan}
        </p>
        <ImageOne />
        <ImageTwo />
        <Background />
        <LineTwo />
        <LineOne />
      </section>
    </div>
  )
}

export default Banner
