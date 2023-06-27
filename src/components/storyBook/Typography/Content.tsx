import 'tailwindcss/tailwind.css'
import { FC } from 'react'

export const className = {
  categoryDiv: 'bg-Primary-lighter w-72 rounded-lg mb-4',
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
const Content: FC = () => (
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
)

Content.displayName = 'Content'

export default Content
