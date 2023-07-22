import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuArrowDown from './MenuArrowDown'
import MenuArrowNext from './MenuArrowNext'
import MenuCheck from './MenuCheck'
import Orbe from './Orbe'

describe('Images Components', () => {
  it('should render MenuArrowDown component', () => {
    const { container } = render(<MenuArrowDown />)
    expect(container).toBeTruthy()
  })
  it('should render MenuArrowNext component', () => {
    const { container } = render(<MenuArrowNext />)
    expect(container).toBeTruthy()
  })
  it('should render MenuCheck component', () => {
    const { container } = render(<MenuCheck />)
    expect(container).toBeTruthy()
  })
  it('should render Orbe component', () => {
    const { container } = render(<Orbe />)
    expect(container).toBeTruthy()
  })
})
