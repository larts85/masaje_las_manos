const titleSize = {
  movile: 'text-15px',
  sm: 'sm:text-30px ',
  md: 'md:text-35px ',
  lg: 'lg:text-40px ',
  xl: 'xl:text-60px ',
  xxl: 'xxl:text-75px  xxl:pt-6',
}
const sloganSize = {
  movile: 'text-7px border-[0.5px] p-0.5',
  sm: 'sm:text-12px sm:border-1px sm:p-2',
  md: 'md:text-15px md:border-1.5px md:p-2.5',
  lg: 'lg:text-20px lg:border-2 lg:p-2',
  xl: 'xl:text-28px xl:border-2.5px xl:p-4',
  xxl: 'xxl:text-32px xxl:p-5',
}

const className = {
  bannerContainer: 'flex justify-center',
  sessionContent: '  max-w-1440px',
  content: 'z-20 flex flex-col items-center justify-end bg-secondary-lighter',
  imageContent: 'flex w-full justify-around',
  title: `font-cormorant font-light text-neutral-darker whitespace-nowrap ${titleSize.movile} ${titleSize.sm} ${titleSize.md} ${titleSize.lg} ${titleSize.xl} ${titleSize.xxl}`,
  slogan: `text-center font-jost font-normal border-neutral-darker whitespace-nowrap ${sloganSize.movile} ${sloganSize.sm} ${sloganSize.md} ${sloganSize.lg} ${sloganSize.xl} ${sloganSize.xxl}`,
  backgound: 'flex flex-col items-center z-30',
}

export default className
