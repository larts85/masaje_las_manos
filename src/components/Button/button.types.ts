import { VARIANT, VARIANT_STATES } from '@/types/globals.types'

export type ClassName = Record<VARIANT, Record<VARIANT_STATES, string>>

export interface ButtonProps {
  variant: VARIANT
  isDisable?: boolean
  name: string
  handleOnClick?: () => void
}
