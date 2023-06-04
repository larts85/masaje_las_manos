import Typography from '@/components/storyBook/Typography'
import StoryBookButtons from '@/components/storyBook/Button'
import StoryBookRadioButtons from '@/components/storyBook/RadioButtons'
import StoryBookLogo from '@/components/storyBook/Logo'
import { NextPage } from 'next'

const StoryBook: NextPage = () => (
  <div className="p-1">
    <Typography />
    <div className="flex">
      <StoryBookButtons />
      <StoryBookRadioButtons />
      <StoryBookLogo />
    </div>
  </div>
)

export default StoryBook
