const menuSize = {
  movile: 'rounded-[7px] pb-[2px] h-[45px]',
  sm: 'sm:rounded-[10px] sm:h-[67px] sm:pb-[3px]',
  md: 'md:rounded-[13px] md:h-[80px] md:pb-[5px]',
  lg: 'lg:rounded-[15px] lg:h-[95px] lg:pb-[7px]',
  xl: 'xl:rounded-[17px] xl:h-[120px] xl:pb-[10px]',
}
const linkMenuSize = {
  movile: 'text-[5px] leading-[9px]',
  sm: 'sm:text-[7px] sm:leading-[15px]',
  md: 'md:text-[9px] md:leading-[17px] ',
  lg: 'lg:text-[10px] lg:leading-[20px]',
  xl: 'xl:text-[15px] xl:leading-[25px]',
}
const className = {
  menu: `bg-primary-light flex justify-around items-end ${menuSize.movile} ${menuSize.sm} ${menuSize.md} ${menuSize.lg} ${menuSize.xl}`,
  liMenu: 'flex items-center justify-start gap-[1px]',
  linkMenu: `font-jost font-medium tracking-tighter text-[5px] ${linkMenuSize.movile} ${linkMenuSize.sm} ${linkMenuSize.md} ${linkMenuSize.lg} ${linkMenuSize.xl}`,
}

export default className
