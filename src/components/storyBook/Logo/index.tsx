import Logo from '@/components/Logo'
import { VARIANT } from '@/types/type'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-22 h-89px border-2 border-dashed border-purple-600 gap-2 flex p-2 m-5 justify-center items-center',
}

const StoryBookLogo: FC = () => {
  return (
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
}
export default StoryBookLogo
