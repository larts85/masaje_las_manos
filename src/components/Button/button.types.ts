import { VARIANT, VARIANT_STATES } from '@/types/globals.types'
import { ButtonHTMLAttributes } from 'react'

export type ClassName = Record<VARIANT, Record<VARIANT_STATES, string>>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VARIANT
  isDisable?: boolean
  text: string
  handleOnClick?: () => void
}
