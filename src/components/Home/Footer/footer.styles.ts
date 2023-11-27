const copyrightSize = {
  movile: 'text-[6px]',
  sm: 'sm:text-[8px]',
  md: 'md:text-[10px]',
  lg: 'lg:text-[12px]',
  xl: 'xl:text-[15px]',
  xxl: 'xxl:text-[20px]',
}

const className = {
  footerContainer: `flex flex-col items-center`,
  background: 'relative w-full max-w-[1440px] top-[-6vw] xxl:top-[-80px]',
  lineContainer: 'relative w-full max-w-[1440px]',
  content:
    'flex flex-col items-end justify-end  h-[29vw] lg:h-[25vw] xxl:h-[26vw] max-h-[471px] xlg:h-[385px]',
  whatsapp: 'pr-[3vw] pb-[3vw] xlg:pr-[40px] xlg:pb-[20px]',
  copyrightContainer:
    'bg-secondary-darker w-[100vw] h-[7vw] flex items-center justify-center max-w-[1440px] max-h-[100.8px]',
  copyright: `text-secondary-lighter text-center ${copyrightSize.movile} ${copyrightSize.sm} ${copyrightSize.md} ${copyrightSize.lg} ${copyrightSize.xl} ${copyrightSize.xxl}`,
}

export default className
