const className = {
  header: 'grid grid-col-1',
  nav: 'flex gap-2 p-1 h-[100px] pl-6 ',
  ul: 'flex space-x-4 gap-4',
  li: 'font-jost font-normal font-400 text-32 leading-46 flex items-center uppercase text-neutral-darker mix-blend-normal',
  languageButton:
    'w-[134px] h-[45px]  hover:cursor-pointer bg-primary-base flex items-center justify-around rounded-[100px] pr-2 absolute z-10 invisible',
  languageButtonMobile:
    'w-[60px] h-[50px] bg-primary-base hover:cursor-pointer rounded-[100px] absolute z-10 left-[150px] flex items-center justify-around px-1',
}

export const { header, nav, ul, li, languageButton, languageButtonMobile } =
  className
