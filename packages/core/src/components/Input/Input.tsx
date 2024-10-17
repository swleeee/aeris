import { forwardRef } from 'react'

import { useInput } from './hooks/useInput'
import { InputProps } from './Input.type'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, placeholder, disabled, value, defaultValue, onChange, ...props },
    ref
  ) => {
    const { value: inputValue, handleChange } = useInput({
      value,
      defaultValue,
      onChange,
    })

    return (
      <input
        id={id}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
