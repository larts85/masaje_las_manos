import 'tailwindcss/tailwind.css'
import { FC } from 'react'
import { className as typografyClassName } from '../typografy'

export const className = {
  buttonContainer:
    'w-815px h-92px border-2 border-dashed border-purple-600 gap-5 flex p-5 m-5',
  transparent: {
    transparent: `w-175px h-52px bg-white text-secondary-base rounded-md shadow-predetermined text-${typografyClassName.component.textButton}`,
    active: `w-175px h-52px bg-white text-secondary-base rounded-md shadow-transparentActive text-${typografyClassName.component.textButton} border-0.5px  border-secondary-base`,
    disable: `w-175px h-52px text-nautral-base rounded-md text-${typografyClassName.component.textButton} border-0.5px border-secondary-base`,
    hover: `w-175px h-52px text-nautral-darker rounded-md text-${typografyClassName.component.textButton} border-0.5px border-secondary-darker`,
  },
  secondary: {
    secondary: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton}`,
    active: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-active text-${typografyClassName.component.textButton} `,
    disable: `w-175px h-52px bg-secondary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton}`,
    hover: `w-175px h-52px bg-variations-secondaryHover text-nautral-darker rounded-md text-${typografyClassName.component.textButton}`,
  },
  primary: {
    primary: `w-175px h-52px bg-secondary-darker text-nautral-light rounded-md shadow-predetermined text-${typografyClassName.component.textButton}`,
    active: `w-175px h-52px bg-secondary-darker text-nautral-lighter rounded-md shadow-active text-${typografyClassName.component.textButton}`,
    disable: `w-175px h-52px bg-variations-primaryDisable text-nautral-lighter rounded-md text-${typografyClassName.component.textButton}`,
    hover: `w-175px h-52px bg-nautral-lighter text-secondary-darker rounded-md text-${typografyClassName.component.textButton} border-3px border-secondary-darker`,
  },
}
const Buttons: FC = () => {
  return (
    <>
      <div className={className.buttonContainer}>
        <button className={className.primary.primary}> PRYMARY</button>
        <button className={className.primary.active}> ACTIVE</button>
        <button className={className.primary.disable}> DISABLE</button>
        <button className={className.primary.hover}> HOVER</button>
      </div>
      <div className={className.buttonContainer}>
        <button className={className.secondary.secondary}> SECONDARY</button>
        <button className={className.secondary.active}> ACTIVE</button>
        <button className={className.secondary.disable}> DISABLE</button>
        <button className={className.secondary.hover}> HOVER</button>
      </div>
      <div className={className.buttonContainer}>
        <button className={className.transparent.transparent}>
          {' '}
          TRANSPARENT
        </button>
        <button className={className.transparent.active}> ACTIVE</button>
        <button className={className.transparent.disable}> DISABLE</button>
        <button className={className.transparent.hover}> HOVER</button>
      </div>
    </>
  )
}

export default Buttons
