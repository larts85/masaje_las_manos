import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '.'
import { VARIANT } from '@/types/globals.types'

describe('Logo Coponent', () => {
  it('should render correctly with the given name and variant', () => {
    render(<Logo variant={VARIANT.NEUTRAL} />)
    const logo = screen.getByRole('svg')
    expect(logo).toBeInTheDocument()
  })
  it('should match the styles according to the variant', () => {
    render(<Logo variant={VARIANT.SECONDARY} />)
    const svgElement = screen.getByRole('svg')
    const pathElements = svgElement.getElementsByTagName('path')
    expect(pathElements).toHaveLength(5)
    expect(pathElements[0]).toHaveAttribute('fill', '#FDEAC9')
  })
})
