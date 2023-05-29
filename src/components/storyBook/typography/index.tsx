/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import { FC } from 'react'

export const className = {
  typographyContainer:
    'bg-Primary-light w-96 rounded-lg p-2 m-16  flex flex-col items-center justify-center',
  title: 'p-3 text-xs text-black italic self-start',
  categoryDiv: 'bg-Primary-lighter w-72 rounded-lg mb-4',
  headings: {
    head1: 'p-3 font-jost font-normal text-7xl leading-64px text-black',
    head2: ' p-3 font-jost font-semibold text-5xl leading-56px text-black',
    head3: ' p-3 font-jost font-medium text-40px leading-56px text-black',
    head4: 'p-3 font-jost font-normal text-32px leading-10 text-black',
    head5: ' p-3 font-jost font-normal text-xl leading-7 text-black',
    head6: ' p-3 font-jost font-semibold text-base leading-6 text-black',
  },
  component: {
    textButton:
      'p-3 font-jost font-medium text-xl leading-7 tracking-tighter text-black  ',
    button:
      'p-3 font-jost font-medium text-sm leading-5 capitalize text-black ',
    textField: 'p-3 font-jost font-medium text-sm leading-6 text-black',
    textField2: 'p-3 font-jost font-medium text-xs leading-4 text-black ',
  },
  content: {
    subtitle: 'p-3 font-jost font-normal text-base leading-6 text-black',
    body: 'p-3 font-jost font-light text-base leading-6 text-black',
    detail: 'p-3 font-jost font-light text-sm leading-5 text-black',
    small: 'p-3 font-jost font-normal text-xs leading-4 text-black',
    extraSmall: 'p-3 font-jost font-medium text-10px leading-14px text-black',
    eyebrow:
      'p-3 font-jost font-light text-sm leading-5 tracking-wider uppercase text-black',
  },
}

const Typography: FC = () => {
  return (
    <div className={className.typographyContainer}>
      <p className={className.title}>Typographys</p>
      <div className={className.categoryDiv}>
        <ul>
          <li className={className.component.textButton}>TextButton</li>
          <li className={className.component.button}>Button</li>
          <li className={className.component.textField}>TextField</li>
          <li className={className.component.textField2}>TextField2</li>
        </ul>
      </div>
      <div className={className.categoryDiv}>
        <ul>
          <li className={className.content.subtitle}>Subtitle</li>
          <li className={className.content.subtitle}>Body</li>
          <li className={className.content.detail}>Detail</li>
          <li className={className.content.small}>Small</li>
          <li className={className.content.extraSmall}>ExtraSmall</li>
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

export default Typography
