import { VARIANT } from '@/types/globals.types'

export interface StyleVariants {
  [key: string]: {
    [key: string]: string
  }
}

export interface Variants {
  variant: VARIANT
}
