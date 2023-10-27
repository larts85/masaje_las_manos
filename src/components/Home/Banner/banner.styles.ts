const titleAndSloganSize = {
  movile: 'text-[15px]',
  sm: 'sm:text-[15px] sm:mt-[5vw]',
  md: 'md:text-[17px] ',
  lg: 'lg:text-[25px]',
  xl: ' xl:text-[1.8vw]',
}
const sloganSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[8px]',
  md: ' md:text-[9px]',
  lg: 'lg:text-[11px]',
  xl: ' xl:text-[0.8vw]',
}

const className = {
  bannerContainer: 'relative flex flex-col',
  content: 'flex relative z-20 justify-around',
  titleAndSlogan: `absolute inset-0 top-[-23vw] flex flex-col items-center justify-center font-cormorant text-neutral-darker whitespace-nowrap ${titleAndSloganSize.movile} `,
  slogan: `font-jost border-[1px] font-normal border-neutral-darker border-r p-1.5 items-center whitespace-nowrap mt-[1vw] ${sloganSize.movile}`,
  backgound: 'flex flex-col absolute top-0 z-10',
  rectangleBackGround: ' flex bg-secondary-lighter w-[100vw] h-[45vw] relative',
}

export default className
