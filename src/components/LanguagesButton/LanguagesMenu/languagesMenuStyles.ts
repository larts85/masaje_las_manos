const menuSize = {
  movile: 'rounded-[9px] pb-[2px] h-[50px]',
  sm: 'sm:rounded-[10px] sm:h-[65px] ',
  md: 'md:rounded-[15px] md:h-[85px]',
  lg: 'lg:rounded-[20px] lg:h-[110px]',
  xl: 'xl:rounded-t-[20px] xl:rounded-b-[30px] xl:h-[150px]',
  xxl: 'xxl:rounded-t-[30px] xxl:rounded-b-[40px] xxl:h-[174px]',
}
const ulMenuSize = {
  movile: 'mt-[20px]',
  sm: 'sm:mt-[25px]',
  md: 'md:mt-[32px]',
  lg: 'lg:mt-[43px]',
  xl: 'xl:mt-[60.77px]',
  xxl: 'xxl:mt-[70.77px]',
}
const liMenuSize = {
  movile: 'pb-[4px]',
  sm: 'sm:pb-[5px]',
  md: 'md:pb-[6px]',
  lg: 'lg:pb-[7px]',
  xl: 'xl:pb-[8px]',
  xxl: 'xxl:pb-[9px]',
}
const linkMenuSize = {
  movile: 'text-[5px]',
  sm: 'sm:text-[7px]',
  md: 'md:text-[10px]',
  lg: 'lg:text-[12px]',
  xl: 'xl:text-[17px]',
  xxl: 'xxl:text-[20px]',
}
const className = {
  menu: `bg-primary-light flex justify-around  ${menuSize.movile} ${menuSize.sm} ${menuSize.md} ${menuSize.lg} ${menuSize.xl} ${menuSize.xxl}`,
  ulMenu: `${ulMenuSize.movile} ${ulMenuSize.sm} ${ulMenuSize.md} ${ulMenuSize.lg} ${ulMenuSize.xl} ${ulMenuSize.xxl}`,
  liMenu: `flex items-center justify-start gap-[1px] ${liMenuSize.movile} ${liMenuSize.sm} ${liMenuSize.md} ${liMenuSize.lg} ${liMenuSize.xl} ${liMenuSize.xxl}`,
  linkMenu: `font-jost font-medium tracking-tighter  ${linkMenuSize.movile} ${linkMenuSize.sm} ${linkMenuSize.md} ${linkMenuSize.lg} ${linkMenuSize.xl} ${linkMenuSize.xxl}`,
}

export default className
