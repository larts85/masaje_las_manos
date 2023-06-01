import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
import { VARIANT, VARIANT_STATES_RADIO_BUTTONS } from '@/types/type'

type ClassName = Record<
  VARIANT,
  Record<VARIANT_STATES_RADIO_BUTTONS, string> | Record<string, never>
>

export const className: ClassName = {
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-primary-base  cursor-pointer',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      'bg-primary-base w-4 h-4 rounded-full block absolute left-1 top-1',
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-secondary-base  cursor-pointer',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      ' bg-secondary-base w-4 h-4 rounded-full block absolute left-1 top-1 hover:opacity-70',
  },
  [VARIANT.NEUTRAL]: {
    [VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]:
      'appearance-none w-6 h-6 rounded-full border-2 border-nautral-base  cursor-pointer ',
    [VARIANT_STATES_RADIO_BUTTONS.CHECKED]:
      'bg-nautral-base w-4 h-4 rounded-full block absolute left-1 top-1 hover:opacity-70',
  },
  [VARIANT.TRANSPARENT]: {},
}

interface Variants {
  variant: VARIANT
  options: Array<string>
}

const RadioButtons: FC<Variants> = ({ variant, options }) => {
  const [selectOption, setSelectOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectOption(event.target.name)
  }
  return (
    <div>
      {options.map((option) => (
        <label key={option} className="relative  block">
          <input
            type="radio"
            name={option}
            className={
              className[variant][VARIANT_STATES_RADIO_BUTTONS.NOT_CHECKED]
            }
            checked={selectOption === option}
            onChange={handleOptionChange}
          />
          <div
            className={
              selectOption === option
                ? className[variant][VARIANT_STATES_RADIO_BUTTONS.CHECKED]
                : 'hidden'
            }
          ></div>
        </label>
      ))}
    </div>
  )
}

export default RadioButtons
