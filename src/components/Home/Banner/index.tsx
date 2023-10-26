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
    <div id="banerContainer" className=" relative flex flex-col">
      <div id="content" className="flex relative z-20 justify-around">
        <ImageOne />
        <div
          id="titleAndSlogan"
          className="flex flex-col items-center justify-center font-cormorant text-neutral-darker whitespace-nowrap text-[15px] sm:text-[15px] sm:mt-[5vw] md:text-[17px] lg:text-[25px] xl:text-[1.8vw] absolute inset-0 top-[-23vw]"
        >
          {translations.bannerHomePage.title}
          <p className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1.5 items-center whitespace-nowrap mt-[1vw] text-[6px] sm:text-[8px] md:text-[9px] lg:text-[11px] xl:text-[0.8vw]">
            {translations.bannerHomePage.slogan}
          </p>
        </div>
        <ImageTwo />
      </div>
      <div id="backgound" className="flex flex-col absolute top-0 z-10">
        <div
          id="rectangleBackGround"
          className=" flex bg-secondary-lighter w-[100vw] h-[45vw] relative"
        ></div>
        <Background />
        <LineOne />
        <LineTwo />
      </div>
    </div>
    // <div>
    //   <div className="bg-green-400 w-24 h-24 mx-auto">independiente</div>
    //   <div className="relative flex justify-around m-0 z-40">
    //     <div className="w-10 h-10 bg-blue-500">Hijo1</div>
    //     <div className="w-10 h-10 bg-red-600">Hijo2</div>
    //     <div className="w-10 h-10 bg-yellow-400">Hijo3</div>
    //   </div>
    // </div>
  )
}

export default Banner
