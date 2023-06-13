import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'
import { VARIANT } from '@/types/globals.types'

describe('Button Component', () => {
  it('should render correctly with the given name and variant', () => {
    render(
      <Button
        variant={VARIANT.PRIMARY}
        isDisable={false}
        name={VARIANT.PRIMARY}
      />,
    )
    const button = screen.getByText(VARIANT.PRIMARY)
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary-base')
  })

  it('should call handleOnClick function when clicked', () => {
    const handleOnClick = jest.fn()
    render(
      <Button
        variant={VARIANT.PRIMARY}
        isDisable={false}
        name={VARIANT.PRIMARY}
        handleOnClick={handleOnClick}
      />,
    )
    const button = screen.getByText(VARIANT.PRIMARY)
    fireEvent.click(button)
    expect(handleOnClick).toHaveBeenCalled()
  })

  it('should disable button when disable prop is false', () => {
    render(
      <Button
        variant={VARIANT.SECONDARY}
        isDisable={true}
        name={VARIANT.SECONDARY}
      />,
    )
    const button = screen.getByText(VARIANT.SECONDARY)
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-not-allowed')
  })
})
