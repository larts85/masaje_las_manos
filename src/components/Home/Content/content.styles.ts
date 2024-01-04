const sesionOneTextSize = {
  movile: 'text-[6.6px] w-44',
  sm: 'sm:text-12px sm:w-350px',
  md: 'md:text-15px md:w-400px',
  lg: 'lg:text-20px lg:w-600px',
  xl: 'xl:text-25px xl:w-700px',
  xxl: 'xxl:text-32px xxl:w-850px',
  xlg: 'xlg:top-550px xlg:right-150px',
}

const titleSize = {
  movile: 'text-[9.7px] w-135px leading-4',
  sm: 'sm:text-15px sm:w-220px sm:leading-5',
  md: 'md:text-18px md:w-260px md:leading-6',
  lg: 'lg:text-[27px] lg:w-400px lg:leading-9',
  xl: 'xl:text-35px xl:w-500px xl:leading-45px',
  xxl: 'xxl:text-48px xxl:w-700px xxl:leading-56px',
  xlg: 'xlg:pb-52',
}
const listSize = {
  movile: 'text-[6.4px] pl-[3vw] ',
  sm: 'sm:text-12px ',
  md: 'md:text-15px',
  lg: 'lg:text-20px ',
  xl: 'xl:text-25px xl:pl-[4vw]',
  xxl: 'xxl:text-32px xxl:pl-[6vw]',
  xlg: 'xlg:pl-40',
}
const sesionTreeTextSize = {
  movile: 'text-[6.6px] w-[130px]',
  sm: 'sm:text-12px sm:w-64',
  md: 'md:text-15px md:w-80',
  lg: 'lg:text-20px lg:w-450px',
  xl: 'xl:text-25px xl:w-550px',
  xxl: 'xxl:text-32px xxl:w-700px',
  xlg: 'xlg:mt-0',
}

const className = {
  mainConter: 'flex flex-col items-center',
  contentBackground:
    'relative w-full xlg:top-[-110px] top-[-10vh] max-w-1440px',
  contentCotainer: 'max-w-1440px',
  textsesionOne: `flex flex-col justify-center font-jost text-right font-normal leading-tight ${sesionOneTextSize.movile} ${sesionOneTextSize.sm} ${sesionOneTextSize.md} ${sesionOneTextSize.lg} ${sesionOneTextSize.xl} ${sesionOneTextSize.xxl} ${sesionOneTextSize.xlg}`,
  sesionTwoText: 'flex flex-col justify-start',
  sesionTwoTitle: `font-jost text-center font-bold pb-[7vw] ${titleSize.movile} ${titleSize.sm} ${titleSize.md} ${titleSize.lg} ${titleSize.xl} ${titleSize.xxl} ${titleSize.xlg}`,
  sesionTwoList: ` text-left font-normal leading-tight overflow-hidden text-ellipsis ${listSize.movile} ${listSize.sm} ${listSize.md} ${listSize.lg} ${listSize.xl} ${listSize.xxl} ${listSize.xlg}`,
  sesionThree: 'flex justify-around mb-[5vh]',
  sesionThreeText: 'flex flex-col items-end justify-center',
  sesionThreeParagraph: `font-jost text-left font-normal leading-tight ml-6 ${sesionTreeTextSize.movile} ${sesionTreeTextSize.sm} ${sesionTreeTextSize.md} ${sesionTreeTextSize.lg} ${sesionTreeTextSize.xl} ${sesionTreeTextSize.xxl} ${sesionTreeTextSize.xlg}`,
  sesionThreeImage: 'flex flex-col justify-end items-start',
}

export default className
