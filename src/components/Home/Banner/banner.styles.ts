const titleAndSloganSize = {
  movile: 'text-[15px] pt-4 pb-2',
  sm: 'sm:text-[30px] sm:p-5',
  md: 'md:text-[35px] md:p-6',
  lg: 'lg:text-[40px] lg:p-7',
  xl: 'xl:text-[60px] xl:p-8',
  xxl: 'xxl:text-[75px] xxl:top-[-330px] xxl:p-10',
}
const sloganSize = {
  movile: 'text-[7px] border-[0.5px] p-[2px]',
  sm: 'sm:text-[12px] sm:border-[1px] sm:p-[4px]',
  md: 'md:text-[13px] md:border-[1.5px] md:p-[5px]',
  lg: 'lg:text-[17px] lg:border-[2px] lg:p-2',
  xl: 'xl:text-[20px] xl:border-[2.5px] xl:p-4',
  xxl: 'xxl:text-[32px] xxl:p-5',
}

const className = {
  bannerContainer: 'relative flex flex-col',
  content: 'z-20 flex flex-col items-center justify-between',
  titleAndSlogan: `text-center font-cormorant font-light text-neutral-darker ${titleAndSloganSize.movile} ${titleAndSloganSize.sm} ${titleAndSloganSize.md} ${titleAndSloganSize.lg} ${titleAndSloganSize.xl} ${titleAndSloganSize.xxl}`,
  slogan: `text-center font-jost font-normal border-neutral-darker whitespace-nowrap ${sloganSize.movile} ${sloganSize.sm} ${sloganSize.md} ${sloganSize.lg} ${sloganSize.xl} ${sloganSize.xxl}`,
  backgound: 'flex flex-col absolute top-0 z-10',
  rectangleBackGround:
    ' flex bg-secondary-lighter w-[98.7vw] h-[45vw] relative',
}

export default className
