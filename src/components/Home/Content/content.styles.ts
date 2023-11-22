const sesionOneTextSize = {
  movile: 'text-[6.6px] w-[175px]',
  sm: 'sm:text-[12px] sm:w-[350px] sm:top-[30vw]',
  md: 'md:text-[15px] md:w-[400px]',
  lg: 'lg:text-[20px] lg:w-[600px]',
  xl: 'xl:text-[25px] xl:w-[700px]',
  xxl: 'xxl:text-[32px] xxl:w-[850px]',
  xlg: 'xlg:top-[550px] xlg:right-[150px]',
}

const titleSize = {
  movile: 'text-[8.7px] w-[135px] leading-[15px]',
  sm: 'sm:text-[15px] sm:w-[220px] sm:leading-[20px]',
  md: 'md:text-[18px] md:w-[260px] md:leading-[25px]',
  lg: 'lg:text-[21px] lg:w-[300px] lg:leading-[35px]',
  xl: 'xl:text-[35px] xl:w-[500px] xl:leading-[45px]',
  xxl: 'xxl:text-[48px] xxl:w-[700px] xxl:leading-[56px]',
  xlg: 'xlg:pb-[100px]',
}
const listSize = {
  movile: 'text-[6.6px] ',
  sm: 'sm:text-[12px] ',
  md: 'md:text-[15px] ',
  lg: 'lg:text-[20px] ',
  xl: 'xl:text-[25px] ',
  xxl: 'xxl:text[32px] ',
}
const sesionTreeTextSize = {
  movile: 'text-[6.6px] w-[150px]',
  sm: 'sm:top-[130vw] sm:text-[12px] sm:w-[255px]',
  md: 'md:text-[15px] md:w-[320px]',
  lg: 'lg:text-[20px] lg:w-[450px]',
  xl: 'xl:text-[25px] xl:w-[550px]',
  xxl: 'xxl:text[32px]',
  xlg: 'xlg:top-[1900px]',
}

const className = {
  mainConter: 'flex flex-col items-center',
  contentCotainer: 'max-w-[1440px]',
  sessionOne: `flex w-[100vw] items-center justify-around max-w-[1440px]  h-[55vw] max-h-[1008px]`,
  textsesionOne: `font-jost text-right font-normal leading-tight  ${sesionOneTextSize.movile} ${sesionOneTextSize.sm} ${sesionOneTextSize.md} ${sesionOneTextSize.lg} ${sesionOneTextSize.xl} ${sesionOneTextSize.xxl} ${sesionOneTextSize.xlg}`,
  sesionTwo: `flex items-center justify-start max-h-[1512px]  h-[105vw]`,
  sesionTwoText: 'flex flex-col items-end w-[55vw]',
  sesionTwoTitle: `flex flex-col font-jost text-center font-bold pb-[7vw] ${titleSize.movile} ${titleSize.sm} ${titleSize.md} ${titleSize.lg} ${titleSize.xl} ${titleSize.xxl} ${titleSize.xlg}`,
  sesionTwoList: ` text-left font-normal leading-tight overflow-hidden text-ellipsis ${listSize.movile} ${listSize.sm} ${listSize.md} ${listSize.lg} ${listSize.xl} ${listSize.xxl}`,
  sesionThree: `flex justify-center items-stretch max-h-[936px] h-[62vw]`,
  sesionThreeText: `font-jost text-left font-normal leading-tight pt-[5vh] ${sesionTreeTextSize.movile} ${sesionTreeTextSize.sm} ${sesionTreeTextSize.md} ${sesionTreeTextSize.lg} ${sesionTreeTextSize.xl} ${sesionTreeTextSize.xxl} ${sesionTreeTextSize.xlg}`,
}

export default className
