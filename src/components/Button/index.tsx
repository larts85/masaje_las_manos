import 'tailwindcss/tailwind.css'
import { FC } from 'react'
import { className as typografyClassName } from '@/components/storyBook/typografy'
import { VARIANT } from '@/types/type'

enum VARIANT_STATES {
  NORMAL = 'normal',
  DISABLE = 'disable',
}

type ClassName = Record<VARIANT, Record<VARIANT_STATES, string>>

export const className: ClassName = {
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-primary-base text-nautral-lighter rounded-md text-${typografyClassName.component.textButton} hover:bg-primary-darker hover:text-primary-light hover:shadow-buttonPrimaryHover active:shadow-buttonPrimaryActive active:text-primary-light uppercase`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-primary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton} uppercase`,
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-secondary-base text-nautral-darker rounded-md shadow-predetermined text-${typografyClassName.component.textButton} uppercase
    hover:bg-secondary-darker hover:text-secondary-light hover:shadow-buttonSecondaryHover active:shadow-buttonSecondaryActive active:bg-secondary-darker active:text-secondary-light`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-secondary-light text-nautral-base rounded-md text-${typografyClassName.component.textButton} uppercase`,
  },
  [VARIANT.TRANSPARENT]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px active:shadow-buttonTransparent cursor-auto text-secondary-base rounded-md  text-${typografyClassName.component.textButton} uppercase hover:border-1px hover:border-secondary-base filter-dropShadow`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px  text-nautral-light rounded-md text-${typografyClassName.component.textButton}  uppercase cursor-not-allowed`,
  },
}

interface Variants {
  variant: VARIANT
  isDisable?: boolean
}

const Button: FC<Variants> = ({ variant, isDisable }) => {
  return (
    <>
      <button
        className={
          isDisable
            ? className[variant][VARIANT_STATES.DISABLE]
            : className[variant][VARIANT_STATES.NORMAL]
        }
        disabled={isDisable}
      >
        {variant}
      </button>
    </>
  )
}

export default Button
