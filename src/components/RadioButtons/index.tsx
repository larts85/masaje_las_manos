import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
import { VARIANT, VARIANT_STATES_RADIO_BUTTONS } from '@/types/globals.types'
import { ClassName, RadioButtonProps } from './radioButton.types'

export const className: ClassName = {
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

const RadioButtons: FC<RadioButtonProps> = ({
  variant,
  options,
  handleOnClick,
}) => {
  const [selectOption, setSelectOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectOption(event.target.name)
  }

  return (
    <div>
      {options.map((option) => {
        const optionName = Object.keys(option)[0]
        return (
          <label key={option[optionName]} className="relative block">
            <input
              type="radio"
              name={option[optionName]}
              className={
                className[variant][VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]
              }
              checked={selectOption === option[optionName]}
              onChange={handleOptionChange}
              value={option[optionName]}
              onClick={() =>
                handleOnClick && handleOnClick(option[optionName] as string)
              }
            />
            <div
              className={className[variant][VARIANT_STATES_RADIO_BUTTONS.HOVER]}
              role="hover-radio"
            ></div>
            <div
              className={
                selectOption === option[optionName]
                  ? className[variant][VARIANT_STATES_RADIO_BUTTONS.CHECKED]
                  : 'hidden'
              }
            ></div>
          </label>
        )
      })}
    </div>
  )
}

RadioButtons.displayName = 'RadioButtons'

export default RadioButtons
