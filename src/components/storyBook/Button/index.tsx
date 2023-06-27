import Button from '@/components/Button'
import { VARIANT } from '@/types/globals.types'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-400px h-89px border-2 border-dashed border-neutral-base gap-4 flex p-2 ml-5 mt-5 mb-5 justify-center items-center',
}

const StoryBookButtons: FC = () => {
  const handleOnClick = () => {
    alert('Heloooo')
  }
  return (
    <div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.PRIMARY}
          isDisable={false}
          text={VARIANT.PRIMARY}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.PRIMARY}
          isDisable={true}
          text={VARIANT.PRIMARY}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.SECONDARY}
          isDisable={false}
          text={VARIANT.SECONDARY}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.SECONDARY}
          isDisable={true}
          text={VARIANT.SECONDARY}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.NEUTRAL}
          isDisable={false}
          text={VARIANT.NEUTRAL}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.NEUTRAL}
          isDisable={true}
          text={VARIANT.NEUTRAL}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.TRANSPARENT}
          isDisable={false}
          text={VARIANT.TRANSPARENT}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.TRANSPARENT}
          isDisable={true}
          text={VARIANT.TRANSPARENT}
        />
      </div>
    </div>
  )
}

StoryBookButtons.displayName = 'StoryBookButtons'

export default StoryBookButtons
