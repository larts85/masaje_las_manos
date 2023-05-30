import RadioButtons from '@/components/RadioButtons'
import { VARIANT } from '@/types/type'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-10 h-89px border-2 border-dashed border-purple-600 flex m-5 justify-center items-center p-1',
}
const StoryRadioButtons: FC = () => {
  const options = ['opcion1', 'opcion2']
  return (
    <div>
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.PRIMARY} options={options} />
      </div>
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.SECONDARY} options={options} />
      </div>
      <div className={className.buttonContainer}>
        <RadioButtons variant={VARIANT.NEUTRAL} options={options} />
      </div>
    </div>
  )
}
export default StoryRadioButtons
