const sesionOneSize = {
  movile: 'text-[6.6px] w-[175px]',
  sm: 'sm:text-[12px] sm:w-[350px] sm:top-[30vw]',
  md: 'md:text-[15px] md:w-[400px]',
  lg: 'lg:text-[20px] lg:w-[600px]',
  xl: 'xl:text-[25px] xl:w-[700px]',
  xxl: 'xxl:text-[32px] xxl:w-[850px]',
}
const titleSize = {
  movile: 'text-[8.7px] w-[135px] leading-[15px]',
  sm: 'sm:text-[15px] sm:w-[220px] sm:leading-[20px]',
  md: 'md:text-[18px] md:w-[260px] md:leading-[25px]',
  lg: 'lg:text-[21px] lg:w-[350px] lg:leading-[35px]',
  xl: 'xl:text-[35px] xl:w-[500px] xl:leading-[45px]',
  xxl: 'xxl:text-[48px] xxl:w-[700px] xxl:leading-[56px]',
}
const listSize = {
  movile: 'text-[6.6px] left-[6.1vw]',
  sm: 'sm:text-[12px] left-[2.1vw]',
  md: 'md:text-[15px] md:left-[4vw]',
  lg: 'lg:text-[20px] lg:left-[]',
  xl: 'xl:text-[25px]',
  xxl: 'xxl:text[32px]',
}
const sesionTreeSize = {
  movile: 'text-[6.6px] w-[150px]',
  sm: 'sm:top-[130vw] sm:text-[12px] sm:w-[255px]',
  md: 'md:text-[15px] md:w-[320px]',
  lg: 'lg:text-[20px] lg:w-[450px]',
  xl: 'xl:text-[25px] xl:w-[550px]',
  xxl: 'xxl:text[32px]',
}
const contentPosition = {
  movile: 'top-[-22vw]',
  sm: 'sm:top-[-20vw]',
  md: 'md:top-[-18vw]',
  lg: 'lg:top-[-16vw]',
  xl: 'xl:top-[-17vw]',
  xxl: 'xxl:top-[-19vw]',
}
const className = {
  content: `relative ${contentPosition.movile} ${contentPosition.sm} ${contentPosition.md} ${contentPosition.lg} ${contentPosition.xl} ${contentPosition.xxl}`,
  contentCotainer: 'z-20 h-[100vh] w-[100vw] items-center flex flex-col',
  sesionOne: `font-jost text-right font-normal leading-tight relative top-[31vw] right-[15vw] ${sesionOneSize.movile} ${sesionOneSize.sm} ${sesionOneSize.md} ${sesionOneSize.lg} ${sesionOneSize.xl} ${sesionOneSize.xxl}`,
  sesionTwo: `relative left-[15vw] top-[80vw]`,
  title: `flex flex-col font-jost text-center font-bold pb-[7vw] ${titleSize.movile} ${titleSize.sm} ${titleSize.md} ${titleSize.lg} ${titleSize.xl} ${titleSize.xxl}`,
  list: `flex-shrink-0 relative text-left font-normal leading-tight overflow-hidden text-ellipsis ${listSize.movile} ${listSize.sm} ${listSize.md} ${listSize.lg} ${listSize.xl} ${listSize.xxl}`,
  sesionThree: `relative top-[125vw]  md:top-[135vw] right-[15vw] flex-shrink-0 font-jost text-left font-normal leading-tight ${sesionTreeSize.movile} ${sesionTreeSize.sm} ${sesionTreeSize.md} ${sesionTreeSize.lg} ${sesionTreeSize.xl}`,
}

export default className
