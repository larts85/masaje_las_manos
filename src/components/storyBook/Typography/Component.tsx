import 'tailwindcss/tailwind.css'
import { FC } from 'react'

export const className = {
  categoryDiv: 'bg-Primary-lighter w-72 rounded-lg mb-4',
  component: {
    textButton:
      'p-3 font-jost font-medium text-xl leading-7 tracking-tighter text-black  ',
    button:
      'p-3 font-jost font-medium text-sm leading-5 capitalize text-black ',
    textField: 'p-3 font-jost font-medium text-sm leading-6 text-black',
    textField2: 'p-3 font-jost font-medium text-xs leading-4 text-black ',
  },
}

const Components: FC = () => (
  <div className={className.categoryDiv}>
    <ul>
      <li className={className.component.textButton}>TextButton</li>
      <li className={className.component.button}>Button</li>
      <li className={className.component.textField}>TextField</li>
      <li className={className.component.textField2}>TextField2</li>
    </ul>
  </div>
)

Components.displayName = 'Components'

export default Components
