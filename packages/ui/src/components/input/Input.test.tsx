import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Input from './Input'

describe('Input component', () => {
  it('renders with label and placeholder', () => {
    render(
      <Input id="userName" label="Username" placeholder="Enter your username" />
    )
    const labelElement = screen.getByLabelText('Username')
    expect(labelElement).toBeInTheDocument()

    const inputElement = screen.getByPlaceholderText('Enter your username')
    expect(inputElement).toBeInTheDocument()
  })

  it('supports controlled input with onChange function', () => {
    const handleChange = vi.fn()
    render(<Input id="name" value="Hong gil dong" onChange={handleChange} />)

    const inputElement = screen.getByDisplayValue('Hong gil dong')
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: 'Kim gil dong' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('supports uncontrolled input with default value', () => {
    render(<Input id="value" defaultValue="Apple" />)

    const inputElement = screen.getByDisplayValue('Apple') as HTMLInputElement
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: 'Banana' } })
    expect(inputElement.value).toBe('Banana')
  })

  it('renders error message', () => {
    render(
      <Input
        id="email"
        label="Email"
        placeholder="Enter your email"
        error={{ status: 'error', message: 'Invalid email address' }}
      />
    )

    const errorMessage = screen.getByText('Invalid email address')
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders with disabled state', () => {
    render(<Input id="price" placeholder="Cannot modify" disabled />)

    const inputElement = screen.getByPlaceholderText('Cannot modify')
    expect(inputElement).toBeDisabled()
  })

  it('renders with readonly state', () => {
    render(
      <Input id="status" placeholder="Read only" readOnly value="deadline" />
    )

    const inputElement = screen.getByDisplayValue('deadline')
    expect(inputElement).toHaveAttribute('readOnly')
  })

  it('supports maxLength and shows character count', () => {
    render(<Input id="title" maxLength={20} value="asdf" showLength />)

    const inputElement = screen.getByDisplayValue('asdf')
    expect(inputElement).toBeInTheDocument()

    const charCountElement = screen.getByText('4/20')
    expect(charCountElement).toBeInTheDocument()
  })

  it('renders with prefix and suffix', () => {
    render(
      <Input id="idea" prefix="💡" suffix="✔" placeholder="write list to do" />
    )

    const prefixElement = screen.getByText('💡')
    const suffixElement = screen.getByText('✔')
    expect(prefixElement).toBeInTheDocument()
    expect(suffixElement).toBeInTheDocument()
  })
})
