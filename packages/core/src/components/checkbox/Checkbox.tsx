import { forwardRef } from 'react'
import { useCheckbox } from './hooks/useCheckbox'
import { CheckboxProps } from './Checkbox.type'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      value,
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const { checked: isChecked, handleChange } = useCheckbox({
      ...(checked !== undefined ? { checked, onChange } : { defaultChecked }),
    })

    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          aria-checked={isChecked}
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {typeof children === 'function' &&
          children({ isDefaultChecked: isChecked })}
      </>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
