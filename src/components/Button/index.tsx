import 'tailwindcss/tailwind.css'
import { FC } from 'react'
import { className as typografyClassName } from '@/components/storyBook/Typography/Component'
import { VARIANT, VARIANT_STATES } from '@/types/globals.types'
import { ClassName, ButtonProps } from './button.types'

export const className: ClassName = {
  [VARIANT.NEUTRAL]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-neutral-base text-neutral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} uppercase
    hover:bg-neutral-darker hover:text-neutral-light hover:shadow-button-hover active:shadow-button-active active:bg-neutral-darker active:text-neutral-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-neutral-light text-neutral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-primary-base text-neutral-lighter rounded-md text-${typografyClassName.component.textButton} hover:bg-primary-darker hover:text-primary-light hover:shadow-button-primary-hover active:shadow-button-active active:text-primary-light uppercase active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-primary-light text-neutral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-secondary-base text-neutral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} uppercase
    hover:bg-secondary-darker hover:text-secondary-light hover:shadow-button-hover active:shadow-button-active active:bg-secondary-darker active:text-secondary-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-secondary-light text-neutral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.TRANSPARENT]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px cursor-auto text-secondary-base rounded-md  text-${typografyClassName.component.textButton} uppercase hover:shadow-button-hover active:shadow-button-primary-active active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px  text-neutral-light rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
}

const Button: FC<ButtonProps> = ({
  variant,
  isDisable,
  name,
  handleOnClick,
}) => {
  const currentVariant = isDisable
    ? VARIANT_STATES.DISABLE
    : VARIANT_STATES.NORMAL

  return (
    <button
      className={className[variant][currentVariant]}
      disabled={isDisable}
      onClick={handleOnClick}
    >
      {name}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
