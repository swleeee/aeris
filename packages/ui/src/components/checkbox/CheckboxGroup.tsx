import { useState, createContext, useContext } from 'react'

import Checkbox from './Checkbox'
import {
  CheckboxGroupOptionProps,
  CheckboxGroupProps,
} from './CheckboxGroup.type'
import { groupContainerStyle } from './CheckboxGroup.style'

interface CheckboxGroupContextProps {
  values: string[]
  toggleValue: (value: string) => void
  disabled?: boolean
}

const CheckboxGroupContext = createContext<CheckboxGroupContextProps | null>(
  null
)

const CheckboxGroup = ({
  options,
  value,
  defaultValue = [],
  onChange,
  disabled = false,
  direction = 'vertical',
  size = 'md',
  style,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    value ?? defaultValue
  )

  const toggleValue = (optionValue: string) => {
    const updatedValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((val) => val !== optionValue)
      : [...selectedValues, optionValue]

    setSelectedValues(updatedValues)
    onChange?.(updatedValues)
  }

  return (
    <CheckboxGroupContext.Provider
      value={{ values: selectedValues, toggleValue, disabled }}
    >
      <div css={groupContainerStyle(direction)} style={style}>
        {options.map((option) => (
          <CheckboxGroup.Option
            key={option.value}
            value={option.value}
            label={option.label}
            size={size}
          />
        ))}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

const Option = ({ value, label, size, ...props }: CheckboxGroupOptionProps) => {
  const context = useContext(CheckboxGroupContext)
  if (!context) {
    throw new Error('CheckboxGroup.Option must be used within a CheckboxGroup')
  }

  const { values, toggleValue, disabled } = context

  return (
    <Checkbox
      checked={values.includes(value)}
      disabled={disabled}
      label={label}
      size={size}
      onChange={() => toggleValue(value)}
      {...props}
    />
  )
}

CheckboxGroup.Option = Option

export default CheckboxGroup
