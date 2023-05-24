import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
export const className = {
  buttonContainer:
    'w-40 h-92px border-2 border-dashed border-purple-600 flex p-5 m-5',
  radioButons:
    'appearance-none w-6 h-6 rounded-full border-2 border-secondary-base absolute cursor-pointer ',
  radioButtonsSelect:
    'bg-secondary-base w-4 h-4 rounded-full block absolute left-2 top-2',
}

const RadioButtons: FC = () => {
  const emptyOptions = {
    option1: '',
    option2: '',
  }
  const [selectOption, setSelectOption] = useState(emptyOptions)

  const handleOptionChange = (option: keyof typeof selectOption) => {
    setSelectOption(() => ({ ...emptyOptions, [option]: option }))
  }
  return (
    <div className={className.buttonContainer}>
      <label className="relative m-3 p-1 block">
        <input
          type="radio"
          value="option1"
          className={className.radioButons}
          checked={selectOption.option1 === 'option1'}
          onChange={() => handleOptionChange('option1')}
        />
        <div
          className={
            selectOption.option1 ? className.radioButtonsSelect : 'hidden'
          }
        ></div>
      </label>
      <label className="relative m-3 p-1 block">
        <input
          type="radio"
          value="option2"
          className={className.radioButons}
          checked={selectOption.option2 === 'option2'}
          onChange={() => handleOptionChange('option2')}
        />
        <div
          className={
            selectOption.option2 ? className.radioButtonsSelect : 'hidden'
          }
        ></div>
      </label>
    </div>
  )
}

export default RadioButtons
