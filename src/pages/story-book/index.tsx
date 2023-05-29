import { FC } from 'react'

import Typography from '@/components/storyBook/typography'
import StoryBookButtons from '@/components/storyBook/Button'
import StoryBookRadioButtons from '@/components/storyBook/RadioButtons'
import StoryBookLogo from '@/components/storyBook/Logo'

const StoryBook: FC = () => {
  return (
    <>
      <Typography />
      <StoryBookButtons />
      <StoryBookRadioButtons />
      <StoryBookLogo />
    </>
  )
}
export default StoryBook
