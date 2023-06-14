import RadioButtons from '@/components/RadioButtons'
import { VARIANT } from '@/types/globals.types'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-10 h-89px border-2 border-dashed border-neutral-base flex ml-5 mt-5 mb-5 justify-center items-center p-1',
}

const options = [{ option: 'opcion1' }, { option: 'opcion2' }]

const handleOnClick = (optionValue: string) => {
  console.info(`The selected option corresponds to:${optionValue}`)
}

const StoryRadioButtons: FC = () => (
  <div>
    <div className={className.buttonContainer}>
      <RadioButtons
        variant={VARIANT.PRIMARY}
        options={options}
        handleOnClick={handleOnClick}
      />
    </div>
    <div className={className.buttonContainer}>
      <RadioButtons
        variant={VARIANT.SECONDARY}
        options={options}
        handleOnClick={handleOnClick}
      />
    </div>
    <div className={className.buttonContainer}>
      <RadioButtons
        variant={VARIANT.NEUTRAL}
        options={options}
        handleOnClick={handleOnClick}
      />
    </div>
  </div>
)

StoryRadioButtons.displayName = 'StoryRadioButtons'

export default StoryRadioButtons
