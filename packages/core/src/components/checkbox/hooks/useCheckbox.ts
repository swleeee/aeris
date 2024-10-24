import { useState } from 'react'

import { CheckboxProps } from '../Checkbox.type'

export const useCheckbox = ({
  checked,
  defaultChecked,
  onChange,
}: CheckboxProps) => {
  const [checkedState, setCheckedState] = useState(defaultChecked ?? false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked
    if (onChange) onChange(newChecked)
    if (checked === undefined) setCheckedState(newChecked)
  }

  const resolvedChecked = checked !== undefined ? checked : checkedState

  return { checked: resolvedChecked, handleChange }
}
