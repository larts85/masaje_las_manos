import { FC } from 'react'
import ImageOne from './ImageOne'
import Background from './Background'
import ImageTwo from './ImageTwo'
import LineOne from './LineOne'
import LineTwo from './LineTwo'

const Banner: FC = () => {
  return (
    <div className="relative ">
      <div id="lineOne" className="absolute z-10 top-[8vw]">
        <LineOne />
      </div>
      <div id="lineTwo" className="absolute z-10 top-[25vw]">
        <LineTwo />
      </div>
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
        THE HANDS MASSAGE
        <p className="font-jost border-[1px] font-normal border-neutral-darker border-r p-1 items-center whitespace-nowrap text-[2.5vw] mt-1">
          YOUR WELL-BEING IN OUR HANDS
        </p>
      </div>
    </div>
  )
}

export default Banner
