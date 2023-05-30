/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import { FC } from 'react'
import Headings from '@/components/storyBook/Typography/Headings'
import Content from '@/components/storyBook/Typography/Content'
import Component from '@/components/storyBook/Typography/Component'

const className = {
  typographyContainer:
    'bg-primary-light w-64 rounded-lg p-1 m-7  flex flex-col place-items-start justify-start',
  title: 'p-3 text-xs text-black italic self-start',
}

const Typography: FC = () => {
  return (
    <div className="flex">
      <div className={className.typographyContainer}>
        <p className={className.title}>Headings</p>
        <Headings />
      </div>
      <div className={className.typographyContainer}>
        <p className={className.title}>Content</p>
        <Content />
      </div>
      <div className={className.typographyContainer}>
        <p className={className.title}>Component</p>
        <Component />
      </div>
    </div>
  )
}

export default Typography
