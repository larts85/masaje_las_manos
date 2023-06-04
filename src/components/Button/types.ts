import { VARIANT, VARIANT_STATES } from '@/types'

export type ClassName = Record<VARIANT, Record<VARIANT_STATES, string>>

export interface ButtonVariants {
  variant: VARIANT
  isDisable?: boolean
}
