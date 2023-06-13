import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RadioButton from '.'
import { VARIANT } from '@/types/globals.types'

const options = [{ option: 'option1' }, { option: 'option2' }]
describe('RadioButtons Component', () => {
  it('should process correctly with the given option and variable', () => {
    render(<RadioButton options={options} variant={VARIANT.PRIMARY} />)
    const radioButton = screen.getAllByRole('radio')
    expect(radioButton.length).toBe(options.length)
  })

  it('should appear selected only when clicking', () => {
    render(<RadioButton options={options} variant={VARIANT.PRIMARY} />)
    const radioButton = screen.getAllByRole('radio')
    radioButton.forEach((radioButton) => {
      expect(radioButton).not.toBeChecked()
    })
    fireEvent.click(radioButton[0])
    expect(radioButton[0]).toBeChecked()
    expect(radioButton[1]).not.toBeChecked()
    fireEvent.click(radioButton[1])
    expect(radioButton[0]).not.toBeChecked()
    expect(radioButton[1]).toBeChecked()
  })

  it('The style should match according to the variant', () => {
    render(<RadioButton options={options} variant={VARIANT.SECONDARY} />)
    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons[0]).toHaveClass('border-secondary-base')
    expect(radioButtons[1]).not.toHaveClass('border-primary-base')
  })
})
