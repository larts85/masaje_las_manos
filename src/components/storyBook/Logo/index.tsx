import Logo from '@/components/Logo'
import { VARIANT } from '@/types/globals.types'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-22 h-89px border-2 border-dashed border-neutral-base gap-2 flex p-2 ml-5 mt-5 mb-5 justify-center items-center',
}

const StoryBookLogo: FC = () => (
  <div>
    <div className={className.buttonContainer}>
      <Logo variant={VARIANT.PRIMARY} />
    </div>
    <div className={className.buttonContainer}>
      <Logo variant={VARIANT.SECONDARY} />
    </div>
    <div className={className.buttonContainer}>
      <Logo variant={VARIANT.NEUTRAL} />
    </div>
  </div>
)

StoryBookLogo.displayName = 'StoryBookLogo'

export default StoryBookLogo
