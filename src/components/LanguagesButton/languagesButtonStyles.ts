const containerSize = {
  movile: 'w-[34px]',
  sm: 'sm:w-[42px]',
  md: 'md:w-[65px]',
  lg: 'lg:w-[70px]',
  xl: 'xl:w-[85px]',
}
const languageButtonSize = {
  movile: 'h-[10px]',
  sm: 'sm:h-[15px]',
  md: ' md:h-[20px]',
  lg: 'lg:h-[22px]',
  xl: 'xl:h-[25px]',
}
const languageTextsize = {
  movile: 'text-[5px]',
  sm: 'sm:text-[7px]',
  md: 'md:text-[9px]',
  xl: 'xl:text-[12px]',
}

const className = {
  containerLanguageButtonsMenu: `relative top-0 right-[1vw] ${containerSize.movile} ${containerSize.sm} ${containerSize.md} ${containerSize.lg} ${containerSize.xl}`,
  languageButton: `flex justify-around items-center bg-primary-base rounded-[100px] relative top-[0px] z-30 w-full hover:cursor-pointer ${languageButtonSize.movile} ${languageButtonSize.sm} ${languageButtonSize.md} ${languageButtonSize.lg} ${languageButtonSize.xl}`,
  languageText: `text-secondary-darker font-semibold font-jost ${languageTextsize.movile} ${languageTextsize.sm} ${languageTextsize.md} ${languageTextsize.xl}`,
  languageButtonMenu:
    'absolute top-0 z-20 transition-opacity duration-1000 ease-in-out w-full',
}

export default className
