import 'tailwindcss/tailwind.css'
import { FC } from 'react'

import { VARIANT_STATES } from '@/types/globals.types'
import { ButtonProps } from './button.types'
import { className } from './buttons.styles'

const Button: FC<ButtonProps> = ({
  variant,
  isDisable,
  text,
  handleOnClick,
}) => {
  const currentVariant = isDisable
    ? VARIANT_STATES.DISABLE
    : VARIANT_STATES.NORMAL

  return (
    <button
      className={className[variant][currentVariant]}
      disabled={isDisable}
      onClick={handleOnClick}
    >
      {text}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
