import { FC } from 'react'

import Typografy from '@/components/storyBook/typografy'
import StoryBookButtons from '@/components/storyBook/Button'
import RadioButtons from '@/components/storyBook/RadioButtons'

const StoryBook: FC = () => {
  return (
    <>
      <Typografy />
      <StoryBookButtons />
      <RadioButtons />
    </>
  )
}
export default StoryBook
