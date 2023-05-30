import Button from '@/components/Button'
import { VARIANT } from '@/types/type'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-400px h-89px border-2 border-dashed border-purple-600 gap-2 flex p-2 m-5 justify-center items-center',
}

const StoryBookButtons: FC = () => {
  return (
    <>
      <div className={className.buttonContainer}>
        <Button variant={VARIANT.PRIMARY} isDisable={false} />
        <Button variant={VARIANT.PRIMARY} isDisable={true} />
      </div>
      <div className={className.buttonContainer}>
        <Button variant={VARIANT.SECONDARY} isDisable={false} />
        <Button variant={VARIANT.SECONDARY} isDisable={true} />
      </div>
      <div className={className.buttonContainer}>
        <Button variant={VARIANT.NEUTRAL} isDisable={false} />
        <Button variant={VARIANT.NEUTRAL} isDisable={true} />
      </div>
      <div className={className.buttonContainer}>
        <Button variant={VARIANT.TRANSPARENT} isDisable={false} />
        <Button variant={VARIANT.TRANSPARENT} isDisable={true} />
      </div>
    </>
  )
}
export default StoryBookButtons
