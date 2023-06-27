import 'tailwindcss/tailwind.css'
import { FC } from 'react'

export const className = {
  categoryDiv: 'bg-Primary-lighter w-72 rounded-lg mb-4',
  headings: {
    head1: 'p-3 font-jost font-normal text-7xl leading-64px text-black',
    head2: ' p-3 font-jost font-semibold text-5xl leading-56px text-black',
    head3: ' p-3 font-jost font-medium text-40px leading-56px text-black',
    head4: 'p-3 font-jost font-normal text-32px leading-10 text-black',
    head5: ' p-3 font-jost font-normal text-xl leading-7 text-black',
    head6: ' p-3 font-jost font-semibold text-base leading-6 text-black',
  },
}

const Headings: FC = () => (
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
)

Headings.displayName = 'Headings'

export default Headings
