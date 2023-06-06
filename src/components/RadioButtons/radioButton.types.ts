import { VARIANT } from '@/types/globals.types'

export interface ClassName {
  [key: string]: {
    [key: string]: string
  }
}
interface Opction {
  opcion: string
}

export interface RadioButtonProps {
  variant: VARIANT
  options: Opction[]
}
