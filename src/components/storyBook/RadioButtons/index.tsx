import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
export const className = {
  buttonContainer:
    'w-20 h-92px border-2 border-dashed border-purple-600 flex p-5 m-5',
  radioButons:
    'appearance-none w-6 h-6 rounded-full border-2 border-secondary-base absolute cursor-pointer ',
  radioButtonsSelect:
    'bg-secondary-base w-4 h-4 rounded-full block absolute left-2 top-2',
}

const RadioButtons: FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className={className.buttonContainer}>
      <label className="relative m-1 p-1 block">
        <input
          type="radio"
          className={className.radioButons}
          onClick={handleSubmit}
        />
        <div
          className={isChecked ? className.radioButtonsSelect : 'hidden'}
        ></div>
      </label>
    </div>
  )
}

export default RadioButtons
