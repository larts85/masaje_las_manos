const footerContainerSize = {
  movile: 'top-[287vw]',
  sm: 'sm:top-[283vw]',
  lg: 'lg:top-[282.5vw]',
  xl: 'xl:top-[282vw]',
  xxl: 'xxl:top-[283.5vw]',
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
  footerContainer: `absolute ${footerContainerSize.movile} ${footerContainerSize.sm} ${footerContainerSize.lg} ${footerContainerSize.xl} ${footerContainerSize.xxl}`,
  copyrightContainer:
    'relative top-[30vw] bg-secondary-darker w-[98.7vw] h-[7vw] flex items-center justify-center',
  copyright: `text-secondary-lighter text-center ${copyrightSize.movile} ${copyrightSize.sm} ${copyrightSize.md} ${copyrightSize.lg} ${copyrightSize.xl} ${copyrightSize.xxl}`,
}

export default className
