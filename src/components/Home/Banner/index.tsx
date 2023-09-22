import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'

const Banner: FC = () => {
  return (
    <div className="absolute top-0 z-10 left-0 ">
      <div className=" relative">
        <Background />
        <div className="flex flex-col items-center justify-centerfont-cormorant text-[15px] text-neutral-darker whitespace-nowrap  sm:text-[20px]  lg:text-[25px] xl:text-[33px] absolute top-[15%] left-[50vW]  transform -translate-x-1/2">
          THE HANDS MASSAGE
          <i className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1 items-center whitespace-nowrap text-[8px] sm:text-[15px] lg:text-[20px] xl:text:[25px] mt-1">
            YOUR WELL-BEING IN OUR HANDS
          </i>
        </div>
        <div className=" absolute top-[1%]">
          <LineOne />
        </div>
        <div className=" absolute top-[48%]">
          <LineTwo />
        </div>
      </div>

      <div className=" absolute z-100 top-[25%] left-0 ">
        <ImageOne />
      </div>

      <div className=" absolute z-100 top-[2%] right-[1%]">
        <ImageTwo />
      </div>
    </div>
  )
}

export default Banner
