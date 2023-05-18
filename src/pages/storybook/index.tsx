import { FC } from 'react'

import Typografy from '@/components/storyBook/Typografy'
import Buttons from '@/components/storyBook/Button'
import RadioButtons from '@/components/storyBook/RadioButtons'

const StoryBook: FC = () => {
  return (
    <>
      <Typografy />
      <Buttons />
      <RadioButtons />
    </>
  )
}
export default StoryBook
