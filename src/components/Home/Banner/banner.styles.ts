const titleAndSloganSize = {
  movile: 'text-[15px]',
  sm: 'sm:text-[30px]',
  md: 'md:text-[35px] ',
  lg: 'lg:text-[40px]',
  xl: 'xl:text-[55px]',
}
const sloganSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[11px]',
  md: 'md:text-[14px]',
  lg: 'lg:text-[22px]',
  xl: 'xl:text-[24px]',
}

const className = {
  bannerContainer: 'relative flex flex-col',
  content: 'flex relative z-20 justify-around',
  titleAndSlogan: `absolute inset-0 top-[-23vw] flex flex-col items-center justify-center font-cormorant text-neutral-darker whitespace-nowrap ${titleAndSloganSize.movile} ${titleAndSloganSize.sm} ${titleAndSloganSize.md} ${titleAndSloganSize.lg} ${titleAndSloganSize.xl}`,
  slogan: `font-jost border-[1px] font-normal border-neutral-darker border-r p-1.5 items-center whitespace-nowrap mt-[1vw] ${sloganSize.movile} ${sloganSize.sm} ${sloganSize.md} ${sloganSize.lg} ${sloganSize.xl}`,
  backgound: 'flex flex-col absolute top-0 z-10',
  rectangleBackGround: ' flex bg-secondary-lighter w-[100vw] h-[45vw] relative',
}

export default className
