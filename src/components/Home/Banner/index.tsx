import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'
import useTranslations from '@/hooks/useTranslations'

const Banner: FC = () => {
  const { translations } = useTranslations()
  return (
    <div id="container" className=" relative flex flex-col">
      <div id="content" className="flex relative z-10 justify-around">
        <ImageOne />
        <div
          id="titleAndSlogan"
          className="flex flex-col items-center justify-centerfont-cormorant text-neutral-darker whitespace-nowrap mt-[5vw] text-[10px] sm:text-[15px] sm:mt-[5vw] md:text-[17px] lg:text-[25px] xl:text-[1.8vw]"
        >
          {translations.bannerHomePage.title}
          <p className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1 items-center whitespace-nowrap mt-[1vw] text-[6px] sm:text-[8px]md:text-[9px] lg:text-[11px] xl:text[0.8vw]">
            {translations.bannerHomePage.slogan}
          </p>
        </div>
        <ImageTwo />
      </div>
      <div id="backgound" className="flex flex-col absolute top-0 z-0">
        <div
          id="rectangleBackGround"
          className=" flex bg-secondary-lighter w-[100vw] h-[20vw] relative"
        ></div>
        <Background />
        <LineOne />
        <LineTwo />
      </div>
    </div>
  )
}

export default Banner
