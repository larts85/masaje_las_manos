import 'tailwindcss/tailwind.css'
import { FC } from 'react'

export const className = {
  buttonContainer:
    'w-28 h-92px border-2 border-dashed border-purple-600 gap-5 flex p-5 m-5',
}

const RadioButtons: FC = () => {
  return (
    <>
      <div className={className.buttonContainer}>
        <label>
          <input type="radio" />
        </label>
        <label>
          <input type="radio" />
        </label>
      </div>
    </>
  )
}

export default RadioButtons
