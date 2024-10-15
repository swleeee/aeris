import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button'

describe('Button component', () => {
  it('renders the button with children text', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders with the correct variant', () => {
    render(
      <Button variant="outlined" color="blue">
        Outlined Button
      </Button>
    )
    const buttonElement = screen.getByRole('button', {
      name: /outlined button/i,
    })
    expect(buttonElement).toHaveStyle('border: 2px solid #3b82f6;') // 스타일 속성으로 확인
  })

  it('renders left icon when provided', () => {
    const leftIcon = <svg data-testid="left-icon" />
    render(<Button leftIcon={leftIcon}>With Icon</Button>)
    const iconElement = screen.getByTestId('left-icon')
    expect(iconElement).toBeInTheDocument()
  })

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const buttonElement = screen.getByRole('button', {
      name: /disabled button/i,
    })
    expect(buttonElement).toBeDisabled()
  })
})
