import { VARIANT } from '@/types'

export interface ClassName {
  [key: string]: {
    [key: string]: string
  }
}

export interface RadioButtonVariants {
  variant: VARIANT
  options: Array<string>
}
