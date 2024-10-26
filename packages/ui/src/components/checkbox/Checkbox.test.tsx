import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Checkbox from './Checkbox'

describe('Checkbox component', () => {
  it('renders with default props', () => {
    render(<Checkbox label="Default Checkbox" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('renders with defaultChecked when uncontrolled', () => {
    render(<Checkbox label="Uncontrolled Checkbox" defaultChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  it('renders controlled and calls onChange with updated checked state', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox
        label="Controlled Checkbox"
        checked={true}
        onChange={handleChange}
      />
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false) // NOTE: 부모 컴포넌트가 onChange 호출을 통해 checked 상태를 변경할 것이라는 가정을 반영!!
  })

  it('does not change state when controlled with checked prop', () => {
    const handleChange = vi.fn()
    render(
      <Checkbox label="Always Checked" checked={true} onChange={handleChange} />
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked() // NOTE: onChange가 호출되어도 checked 상태가 변하지 않도록 설정!!
  })

  it('changes state when uncontrolled', () => {
    render(<Checkbox label="Uncontrolled Checkbox" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('renders in disabled state', () => {
    render(<Checkbox label="Disabled Checkbox" disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })

  it('renders custom icons for checked and unchecked states', () => {
    const checkedIcon = <span data-testid="checked-icon">✔️</span>
    const uncheckedIcon = <span data-testid="unchecked-icon">✖️</span>
    render(
      <Checkbox
        label="Custom Icon Checkbox"
        checkedIcon={checkedIcon}
        icon={uncheckedIcon}
      />
    )

    const uncheckedIconElement = screen.getByTestId('unchecked-icon')
    expect(uncheckedIconElement).toBeInTheDocument()

    fireEvent.click(screen.getByRole('checkbox'))
    const checkedIconElement = screen.getByTestId('checked-icon')
    expect(checkedIconElement).toBeInTheDocument()
  })
})
