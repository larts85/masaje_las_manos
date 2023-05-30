import 'tailwindcss/tailwind.css'
import { FC } from 'react'
import { className as typografyClassName } from '@/components/storyBook/Typography/Component'
import { VARIANT, VARIANT_STATES } from '@/types/type'

type ClassName = Record<VARIANT, Record<VARIANT_STATES, string>>

export const className: ClassName = {
  [VARIANT.NEUTRAL]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-nautral-base text-nautral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} uppercase
    hover:bg-nautral-darker hover:text-nautral-light hover:shadow-button-hover active:shadow-button-active active:bg-nautral-darker active:text-nautral-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-nautral-light text-nautral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-primary-base text-nautral-lighter rounded-md text-${typografyClassName.component.textButton} hover:bg-primary-darker hover:text-primary-light hover:shadow-button-primary-hover active:shadow-button-active active:text-primary-light uppercase active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-primary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} uppercase
    hover:bg-secondary-darker hover:text-secondary-light hover:shadow-button-hover active:shadow-button-active active:bg-secondary-darker active:text-secondary-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-secondary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.TRANSPARENT]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px cursor-auto text-secondary-base rounded-md  text-${typografyClassName.component.textButton} uppercase hover:shadow-button-hover active:shadow-button-primary-active active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px  text-nautral-light rounded-md text-${typografyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
}

interface Variants {
  variant: VARIANT
  isDisable?: boolean
}

const Button: FC<Variants> = ({ variant, isDisable }) => {
  const currentVariant = isDisable
    ? VARIANT_STATES.DISABLE
    : VARIANT_STATES.NORMAL

  return (
    <>
      <button
        className={className[variant][currentVariant]}
        disabled={isDisable}
      >
        {variant}
      </button>
    </>
  )
}

export default Button
