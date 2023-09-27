import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'

const Banner: FC = () => {
  return (
    <div className="relative">
      <div id="lineOne" className="absolute z-50 top-[4vh]">
        <LineOne />
      </div>
      <div id="lineTwo" className="absolute z-50 top-[15vh]">
        <LineTwo />
      </div>
      <div id="imageOne" className="absolute z-50 top-[5vh] left-[1vw]">
        <ImageOne />
      </div>
      <div className="absolute z-50 top-[10vw] right-[2vw]">
        <ImageTwo />
      </div>
      <div className="absolute z-100">
        <Background />
      </div>
      <div
        id="titleAndSlogan"
        className="flex flex-col items-center justify-centerfont-cormorant text-[16px] text-neutral-darker whitespace-nowrap  sm:text-[20px]  lg:text-[25px] xl:text-[33px] absolute top-[4vh] left-[50vW]  transform -translate-x-1/2"
      >
        THE HANDS MASSAGE
        <i className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1 items-center whitespace-nowrap text-[7px] sm:text-[15px] lg:text-[20px] xl:text:[25px] mt-1">
          YOUR WELL-BEING IN OUR HANDS
        </i>
      </div>
    </div>
  )
}

export default Banner
