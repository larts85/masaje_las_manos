import { VARIANT } from '@/types'

export interface StyleVariants {
  [key: string]: {
    [key: string]: string
  }
}

export interface Variants {
  variant: VARIANT
}
