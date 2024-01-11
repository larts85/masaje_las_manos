const copyrightSize = {
  movile: 'text-6px',
  sm: 'sm:text-8px',
  md: 'md:text-10px',
  lg: 'lg:text-12px',
  xl: 'xl:text-15px',
  xxl: 'xxl:text-20px',
}

const className = {
  lineContainer: 'relative w-full max-w-1440px',
  copyrightContainer:
    'bg-secondary-darker w-100vw h-3vh flex items-center justify-center max-w-1440px max-h-[100.8px]',
  copyright: `text-secondary-lighter text-center ${copyrightSize.movile} ${copyrightSize.sm} ${copyrightSize.md} ${copyrightSize.lg} ${copyrightSize.xl} ${copyrightSize.xxl}`,
}

export default className
