import Logo from '@/components/Logo'
import { VARIANT } from '@/types/type'
import { FC } from 'react'

const StoryBookLogo: FC = () => {
  return (
    <div className="flex p-2">
      <Logo variant={VARIANT.PRIMARY} />
      <Logo variant={VARIANT.SECONDARY} />
      <Logo variant={VARIANT.NEUTRAL} />
    </div>
  )
}
export default StoryBookLogo
