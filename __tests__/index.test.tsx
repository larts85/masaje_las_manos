import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../src/pages'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello world!/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
