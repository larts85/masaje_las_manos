/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import { FC } from 'react'
const Typografy: FC = () => {
  const className = {
    divContainer:
      'bg-Primary-light w-96 rounded-lg p-2 m-16  flex flex-col items-center justify-center',
    title: 'text-xs text-black italic self-start',
    categoryDiv: 'bg-Primary-lighter w-72 rounded-lg mb-4',
    headings: {
      head1: 'font-jost font-normal text-7xl leading-64px text-black',
      head2: 'font-jost font-semibold text-5xl leading-56px text-black',
      head3: 'font-jost font-medium text-40px leading-56px text-black',
      head4: 'font-jost font-normal text-32px leading-10 text-black',
      head5: 'font-jost font-normal text-xl leading-7 text-black',
      head6: 'font-jost font-semibold text-base leading-6 text-black',
    },
    component: {
      textButton:
        'font-jost font-medium text-xl leading-7 tracking-tighter text-black  ',
      button: 'font-jost font-medium text-sm leading-5 capitalize text-black ',
      textField: 'font-jost font-medium text-sm leading-6 text-black',
      textField2: 'font-jost font-medium text-xs leading-4 text-black ',
    },

    content: {
      subtitle: 'font-jost font-normal text-base leading-6 text-black',
      body: 'font-jost font-light text-base leading-6 text-black',
      detail: 'font-jost font-light text-sm leading-5 text-black',
      small: 'font-jost font-normal text-xs leading-4 text-black',
      extraSmall: 'font-jost font-medium text-10px leading-14px text-black',
      eyebrow:
        'font-jost font-light text-sm leading-5 tracking-wider uppercase text-black',
    },
  }

  return (
    <div className={className.divContainer}>
      <p className={className.title}>Typografy</p>
      <div className={className.categoryDiv}>
        <ul>
          <li className={className.component.textButton}>TextButton</li>
          <li className={className.component.button}>Button</li>
          <li className={className.component.textField}>TextField</li>
          <li className={className.component.textField2}>TextField2</li>
          <li className={className.content.subtitle}>Subtitle</li>
          <li className={className.content.subtitle}>Body</li>
        </ul>
      </div>
      <div className={className.categoryDiv}>
        <ul>
          <li className={className.content.subtitle}>Subtitle</li>
          <li className={className.content.subtitle}>Body</li>
          <li className={className.content.detail}>Detail</li>
          <li className={className.content.small}>Small</li>
          <li className={className.content.extraSmall}>extraSmall</li>
          <li className={className.content.eyebrow}>Eyebrow</li>
        </ul>
      </div>
      <div className={className.categoryDiv}>
        <ul>
          <li className={className.headings.head1}> Head1</li>
          <li className={className.headings.head2}> Head2</li>
          <li className={className.headings.head3}> Head3</li>
          <li className={className.headings.head4}> Head4</li>
          <li className={className.headings.head5}> Head5</li>
          <li className={className.headings.head6}> Head6</li>
        </ul>
      </div>
    </div>
  )
}

export default Typografy
