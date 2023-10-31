const copyrightSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[8px]',
  md: 'md:text-[10px]',
  lg: 'lg:text-[12px]',
  xl: 'xl:text-[14px]',
}

const className = {
  copyrightContainer:
    'relative top-[30vw] w-[100vw] bg-secondary-darker h-[7vw] flex items-center justify-center',
  copyright: `text-secondary-lighter text-center ${copyrightSize.movile} ${copyrightSize.sm} ${copyrightSize.md} ${copyrightSize.lg} ${copyrightSize.xl}`,
}

export default className
