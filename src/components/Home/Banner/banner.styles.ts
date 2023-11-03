const titleAndSloganSize = {
  movile: 'text-[15px]',
  sm: 'sm:text-[30px]',
  md: 'md:text-[35px] ',
  lg: 'lg:text-[40px]',
  xl: 'xl:text-[55px] ',
  xxl: 'xxl:text-[75px] ',
}
const sloganSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[11px]',
  md: 'md:text-[14px]',
  lg: 'lg:text-[22px]',
  xl: 'xl:text-[24px]',
  xxl: 'xxl:text-[32px]',
}

const className = {
  bannerContainer: 'relative flex flex-col',
  content: 'flex relative z-20 justify-around',
  titleAndSlogan: `absolute top-[-23vw] flex flex-col items-center justify-center inset-0 leading-[128px] font-cormorant font-light text-neutral-darker whitespace-nowrap ${titleAndSloganSize.movile} ${titleAndSloganSize.sm} ${titleAndSloganSize.md} ${titleAndSloganSize.lg} ${titleAndSloganSize.xl} ${titleAndSloganSize.xxl}`,
  slogan: `font-jost border-[1px] font-normal leading-10 text-center border-neutral-darker border-r p-1.5 whitespace-nowrap mt-[1vw] ${sloganSize.movile} ${sloganSize.sm} ${sloganSize.md} ${sloganSize.lg} ${sloganSize.xl} ${sloganSize.xxl}`,
  backgound: 'flex flex-col absolute top-0 z-10',
  rectangleBackGround: ' flex bg-secondary-lighter w-[100vw] h-[45vw] relative',
}

export default className
