import { useState } from 'react'

import { InputProps } from '../Input.type'

export const useInput = ({
  defaultValue,
  value,
  onChange,
}: Omit<InputProps, 'id'>) => {
  const [inputValue, setInputValue] = useState(defaultValue || '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value

    if (onChange) {
      onChange(e)
      return
    }

    setInputValue(updatedValue)
  }

  return {
    value: value === undefined ? inputValue : value,
    handleChange,
  }
}
