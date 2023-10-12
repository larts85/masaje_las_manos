import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOneAnimate from './LineOneAnimate'
import LineTwo from './LineTwo'
import useTranslations from '@/hooks/useTranslations'

const Banner: FC = () => {
  const { translations } = useTranslations()
  return (
    <div className="relative ">
      <div id="lineOne" className="absolute z-10 top-[7vw]">
        {/* <LineOne /> */}
        <LineOneAnimate />
      </div>
      {/* <div id="lineTwo" className="absolute z-10 top-[25vw]">
        <LineTwo />
      </div> */}
      <div id="imageOne" className="absolute z-10 top-[8vw] left-[1vw]">
        <ImageOne />
      </div>
      <div className="absolute z-10 top-[10vw] right-[2vw]">
        <ImageTwo />
      </div>
      <div className="absolute z-0">
        <Background />
      </div>
      <div
        id="titleAndSlogan"
        className="flex flex-col items-center justify-centerfont-cormorant text-neutral-darker whitespace-nowrap text-[5vw] absolute top-[4vw] left-[50vW]  transform -translate-x-1/2"
      >
        {translations.bannerHomePage.title}
        <p className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1 items-center whitespace-nowrap text-[2.5vw] mt-1">
          {translations.bannerHomePage.slogan}
        </p>
      </div>
    </div>
  )
}

export default Banner
