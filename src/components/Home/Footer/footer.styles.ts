const footerContainerSize = {
  movile: 'top-[0vw]',
  sm: 'sm:top-[140vw]',
  md: 'md:top-[vw]',
  lg: 'lg:top-[115vw]',
  xl: 'xl:top-[114vw]',
  xxl: 'xxl:top-[125vw]',
  xlg: 'xlg:top-[450px]',
}
const copyrightSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[8px]',
  md: 'md:text-[10px]',
  lg: 'lg:text-[12px]',
  xl: 'xl:text-[15px]',
  xxl: 'xxl:text-[20px]',
}

const className = {
  footerContainer: `relative flex ${footerContainerSize.movile} ${footerContainerSize.sm} ${footerContainerSize.md} ${footerContainerSize.lg} ${footerContainerSize.xl} ${footerContainerSize.xxl}
  ${footerContainerSize.xlg}`,
  copyrightContainer:
    'relative top-[30vw] bg-secondary-darker w-[100vw] h-[7vw] flex items-center justify-center max-w-[1440px]',
  copyright: `text-secondary-lighter text-center ${copyrightSize.movile} ${copyrightSize.sm} ${copyrightSize.md} ${copyrightSize.lg} ${copyrightSize.xl} ${copyrightSize.xxl}`,
}

export default className
