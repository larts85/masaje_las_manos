import 'tailwindcss/tailwind.css'
import { FC, useState } from 'react'
import { className as typografyClassName } from '@/components/storyBook/typografy'

export const className = {
  buttonContainer:
    'w-815px h-92px border-2 border-dashed border-purple-600 gap-5 flex p-5 m-5',
  transparent: {
    transparent: `w-175px h-52px bg-white text-secondary-base rounded-md shadow-predetermined text-${typografyClassName.component.textButton} hover:  text-nautral-base hover:border-0.5px hover:border-secondary-darker`,
    active: `w-175px h-52px bg-white text-secondary-base rounded-md shadow-transparentActive text-${typografyClassName.component.textButton} border-0.5px  border-secondary-base  hover:  text-nautral-base hover:border-0.5px hover:border-secondary-darker`,
    disable: `w-175px h-52px text-nautral-base rounded-md text-${typografyClassName.component.textButton} border-0.5px border-secondary-base`,
  },
  secondary: {
    secondary: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} 
    hover:bg-variations-secondaryHover`,
    active: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-active text-${typografyClassName.component.textButton}hover:bg-variations-secondaryHover`,
    disable: `w-175px h-52px bg-secondary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton}`,
  },
  primary: {
    primary: `w-175px h-52px bg-secondary-darker text-nautral-light rounded-md shadow-predetermined text-${typografyClassName.component.textButton} hover:bg-nautral-lighter hover:text-secondary-darker hover:border-secondary-darker hover:border-3px`,
    active: `w-175px h-52px bg-secondary-darker text-nautral-lighter rounded-md shadow-active text-${typografyClassName.component.textButton}hover:bg-nautral-lighter hover:text-secondary-darker hover:border-secondary-darker hover:border-3px`,
    disable: `w-175px h-52px bg-variations-primaryDisable text-nautral-lighter  rounded-md text-${typografyClassName.component.textButton} `,
  },
}
const Buttons: FC = () => {
  const [isActive, setIsActive] = useState({
    primary: false,
    secondary: false,
    transparent: false,
  })

  const handleSubmit = (buttonName: keyof typeof isActive) => {
    setIsActive(() => ({
      ...isActive,
      [buttonName]: !isActive[buttonName],
    }))
  }
  return (
    <>
      <div
        className={className.buttonContainer}
        onClick={() => handleSubmit('primary')}
      >
        <button
          className={
            isActive.primary
              ? className.primary.active
              : className.primary.primary
          }
          onClick={() => handleSubmit('primary')}
        >
          PRIMARY
        </button>
        <button className={className.primary.disable}>DISABLE</button>
      </div>
      <div className={className.buttonContainer}>
        <button
          className={
            isActive.secondary
              ? className.secondary.active
              : className.secondary.secondary
          }
          onClick={() => handleSubmit('secondary')}
        >
          SECONDARY
        </button>
        <button className={className.secondary.disable}> DISABLE</button>
      </div>
      <div className={className.buttonContainer}>
        <button
          className={
            isActive.transparent
              ? className.transparent.active
              : className.transparent.transparent
          }
          onClick={() => handleSubmit('transparent')}
        >
          TRANSPARENT
        </button>
        <button className={className.transparent.disable}> DISABLE</button>
      </div>
    </>
  )
}

export default Buttons
