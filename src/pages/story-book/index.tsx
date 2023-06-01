import Typography from '@/components/storyBook/Typography'
import StoryBookButtons from '@/components/storyBook/Button'
import StoryBookRadioButtons from '@/components/storyBook/RadioButtons'
import StoryBookLogo from '@/components/storyBook/Logo'
import { NextPage } from 'next'

const StoryBook: NextPage = () => {
  return (
    <div className="p-1">
      <Typography />
      <div className="flex">
        <div>
          <StoryBookButtons />
        </div>
        <div>
          <StoryBookRadioButtons />
        </div>
        <div>
          <StoryBookLogo />
        </div>
      </div>
    </div>
  )
}
export default StoryBook
