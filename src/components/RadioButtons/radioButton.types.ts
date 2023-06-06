import { VARIANT } from '@/types/globals.types'

export interface ClassName {
  [key: string]: {
    [key: string]: string
  }
}

export interface RadioButtonProps {
  variant: VARIANT
  options: Array<string>
}
