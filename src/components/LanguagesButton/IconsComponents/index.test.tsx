import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuArrow from './Arrow'
import MenuCheck from './MenuCheck'
import Orbe from './Orbe'

describe('Images Components', () => {
  it('should render MenuArrowNext component', () => {
    const { container } = render(<MenuArrow />)
    expect(container).toBeInTheDocument()
  })
  it('should render MenuCheck component', () => {
    const { container } = render(<MenuCheck />)
    expect(container).toBeInTheDocument()
  })
  it('should render Orbe component', () => {
    const { container } = render(<Orbe />)
    expect(container).toBeInTheDocument()
  })
})
