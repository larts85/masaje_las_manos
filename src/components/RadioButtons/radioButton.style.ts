import { VARIANT, VARIANT_STATES_RADIO_BUTTONS } from '@/types/globals.types'
import { ClassName } from './radioButton.types'

const className: ClassName = {
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-primary-base cursor-pointer',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      'bg-primary-base w-4 h-4 rounded-full block absolute left-1 top-1',
    [VARIANT_STATES_RADIO_BUTTONS.HOVER]:
      'absolute w-4 h-4 rounded-full bg-primary-base opacity-0 hover:opacity-60 left-1 top-1',
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-secondary-base cursor-pointer',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      ' bg-secondary-base w-4 h-4 rounded-full block absolute left-1 top-1',
    [VARIANT_STATES_RADIO_BUTTONS.HOVER]:
      'absolute w-4 h-4 rounded-full bg-secondary-base opacity-0 hover:opacity-60 left-1 top-1',
  },
  [VARIANT.NEUTRAL]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-neutral-base cursor-pointer ',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      'bg-neutral-base w-4 h-4 rounded-full block absolute left-1 top-1 ',
    [VARIANT_STATES_RADIO_BUTTONS.HOVER]:
      'absolute w-4 h-4 rounded-full bg-neutral-base opacity-0 hover:opacity-60 left-1 top-1',
  },
}
export default className
