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
        text={VARIANT.PRIMARY}
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
        text={VARIANT.PRIMARY}
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
        text={VARIANT.SECONDARY}
      />,
    )
    const button = screen.getByText(VARIANT.SECONDARY)
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-not-allowed')
  })
  it('should call HandleOnCLick function on click', () => {
    const handleClick = jest.fn()
    render(
      <Button
        variant={VARIANT.SECONDARY}
        isDisable={false}
        text={VARIANT.SECONDARY}
        handleOnClick={handleClick}
      />,
    )
    const button = screen.getByText(VARIANT.SECONDARY)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    if (handleClick) {
      expect(handleClick).toBeCalledTimes(1)
    }
  })
  it('should have all the functionality with the Neutral variant', () => {
    const handleClick = jest.fn()
    render(
      <Button
        variant={VARIANT.NEUTRAL}
        isDisable={false}
        text={VARIANT.NEUTRAL}
        handleOnClick={handleClick}
      />,
    )
    const button = screen.getByText(VARIANT.NEUTRAL)
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-neutral-base')

    fireEvent.click(button)

    if (handleClick) {
      expect(handleClick).toBeCalledTimes(1)
      fireEvent.click(button)
    }
  })
  it('should have all the functionality with the transparent variant', () => {
    const handleClick = jest.fn()
    render(
      <Button
        variant={VARIANT.TRANSPARENT}
        isDisable={false}
        text={VARIANT.TRANSPARENT}
        handleOnClick={handleClick}
      />,
    )
    const button = screen.getByText(VARIANT.TRANSPARENT)
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('rounded-md')

    fireEvent.click(button)

    if (handleClick) {
      expect(handleClick).toBeCalledTimes(1)
      fireEvent.click(button)
    }
  })
  it('does not call handleOnClick when the button is disabled', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(
      <Button
        variant={VARIANT.NEUTRAL}
        text={VARIANT.NEUTRAL}
        isDisable={true}
        handleOnClick={mockOnClick}
      />,
    )
    const button = getByText(VARIANT.NEUTRAL)

    fireEvent.click(button)
    expect(mockOnClick).not.toHaveBeenCalled()
  })
})
