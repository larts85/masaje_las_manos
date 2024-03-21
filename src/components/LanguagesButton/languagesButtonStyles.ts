const containerSize = {
  movile: 'w-[36px]',
  sm: 'sm:w-[52px]',
  md: 'md:w-[65px]',
  lg: 'lg:w-[85px]',
  xl: 'xl:w-[115px]',
  xxl: 'xxl:w-[134px]',
}
const languageButtonSize = {
  movile: 'h-[15px]',
  sm: 'sm:h-[20px] ',
  md: 'md:h-[25px]',
  lg: 'lg:h-[33px]',
  xl: 'xl:h-[50px]',
  xxl: 'xxl:h-[60.3px]',
}
const languageTextsize = {
  movile: 'text-[5px]',
  sm: 'sm:text-[7px]',
  md: 'md:text-[9px]',
  lg: 'lg:text-[12px]',
  xl: 'xl:text-[17px]',
  xxl: 'xxl:text-[20px]',
}

const className = {
  containerLanguageButtonsMenu: `relative top-0 right-[1vw] ${containerSize.movile} ${containerSize.sm} ${containerSize.md} ${containerSize.lg} ${containerSize.xl} ${containerSize.xxl}`,
  languageButton: `flex justify-around items-center bg-primary-base rounded-[100px] relative top-[0px] z-30 w-full hover:cursor-pointer max-w-[134px] ${languageButtonSize.movile} ${languageButtonSize.sm} ${languageButtonSize.md} ${languageButtonSize.lg} ${languageButtonSize.xl} ${languageButtonSize.xxl}`,
  languageText: `text-secondary-darker font-semibold font-jost ${languageTextsize.movile} ${languageTextsize.sm} ${languageTextsize.md} ${languageTextsize.lg} ${languageTextsize.xl} ${languageTextsize.xxl}`,
  languageButtonMenu:
    'absolute top-0 z-20 transition-opacity duration-1000 ease-in-out w-full',
}

export default className
