import RadioButtons from '@/components/RadioButtons'
import { VARIANT } from '@/types'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-10 h-89px border-2 border-dashed border-stone-500 flex ml-5 mt-5 mb-5 justify-center items-center p-1',
}

const options = ['opcion1', 'opcion2']

const StoryRadioButtons: FC = () => (
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

StoryRadioButtons.displayName = 'StoryRadioButtons'

export default StoryRadioButtons
