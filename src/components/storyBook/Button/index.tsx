import Button from '@/components/Button'
import { VARIANT } from '@/types/globals.types'
import { FC } from 'react'

const className = {
  buttonContainer:
    'w-400px h-89px border-2 border-dashed border-stone-500 gap-4 flex p-2 ml-5 mt-5 mb-5 justify-center items-center',
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
          name={VARIANT.PRIMARY}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.PRIMARY}
          isDisable={true}
          name={VARIANT.PRIMARY}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.SECONDARY}
          isDisable={false}
          name={VARIANT.SECONDARY}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.SECONDARY}
          isDisable={true}
          name={VARIANT.SECONDARY}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.NEUTRAL}
          isDisable={false}
          name={VARIANT.NEUTRAL}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.NEUTRAL}
          isDisable={true}
          name={VARIANT.NEUTRAL}
        />
      </div>
      <div className={className.buttonContainer}>
        <Button
          variant={VARIANT.TRANSPARENT}
          isDisable={false}
          name={VARIANT.TRANSPARENT}
          handleOnClick={handleOnClick}
        />
        <Button
          variant={VARIANT.TRANSPARENT}
          isDisable={true}
          name={VARIANT.TRANSPARENT}
        />
      </div>
    </div>
  )
}

StoryBookButtons.displayName = 'StoryBookButtons'

export default StoryBookButtons
