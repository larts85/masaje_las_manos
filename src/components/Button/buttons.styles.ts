import { VARIANT, VARIANT_STATES } from '@/types/globals.types'
import { className as typographyClassName } from '@/components/storyBook/Typography/Component'
import { ClassName } from './button.types'

export const className: ClassName = {
  [VARIANT.NEUTRAL]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-neutral-base text-neutral-darker rounded-md shadow-predetermined text-${typographyClassName.component.textButton} uppercase
      hover:bg-neutral-darker hover:text-neutral-light hover:shadow-button-hover active:shadow-button-active active:bg-neutral-darker active:text-neutral-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-neutral-light text-neutral-base rounded-md text-${typographyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.PRIMARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-primary-base text-neutral-lighter rounded-md text-${typographyClassName.component.textButton} hover:bg-primary-darker hover:text-primary-light hover:shadow-button-primary-hover active:shadow-button-active active:text-primary-light uppercase active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-primary-light text-neutral-base rounded-md text-${typographyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.SECONDARY]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px bg-secondary-base text-neutral-darker rounded-md shadow-predetermined text-${typographyClassName.component.textButton} uppercase
      hover:bg-secondary-darker hover:text-secondary-light hover:shadow-button-hover active:shadow-button-active active:bg-secondary-darker active:text-secondary-light active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px bg-secondary-light text-neutral-base rounded-md text-${typographyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
  [VARIANT.TRANSPARENT]: {
    [VARIANT_STATES.NORMAL]: `w-175px h-52px cursor-auto text-secondary-base rounded-md text-${typographyClassName.component.textButton} uppercase hover:shadow-button-hover active:shadow-button-primary-active active:scale-95`,
    [VARIANT_STATES.DISABLE]: `w-175px h-52px text-neutral-light rounded-md text-${typographyClassName.component.textButton} uppercase cursor-not-allowed`,
  },
}
