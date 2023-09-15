import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
import { RadioButtonProps } from './radioButton.types'
import className from './radioButton.style'
import { VARIANT_STATES_RADIO_BUTTONS } from '@/types/globals.types'

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
