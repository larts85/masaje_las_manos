import RadioButtons from '@/components/RadioButtons'
import { VARIANT } from '@/types/type'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-28 h-200px border-2 border-dashed border-purple-600 flex p-5 m-5',
}
const StoryRadioButtons: FC = () => {
  const options = ['opcion1', 'opcion2', 'option3']
  return (
    <div className="flex">
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.SECONDARY} options={options} />
      </div>
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.PRIMARY} options={options} />
      </div>
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.NEUTRAL} options={options} />
      </div>
    </div>
  )
}
export default StoryRadioButtons
