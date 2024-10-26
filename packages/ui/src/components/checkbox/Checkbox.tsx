import { forwardRef } from 'react'
import { BaseCheckbox } from '@aeris/core'

import {
  getCheckboxStyles,
  getLabelStyles,
  getCheckmarkIconStyles,
  getCheckboxWrapperStyles,
  getCustomIconStyles,
} from './Checkbox.style'
import { CheckboxProps } from './Checkbox.type'

const DefaultIndeterminateIcon = ({
  size,
}: {
  size: CheckboxProps['size']
}) => (
  <svg
    width={size === 'sm' ? '12' : size === 'lg' ? '18' : '16'}
    height={size === 'sm' ? '12' : size === 'lg' ? '18' : '16'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12h14v2H5z" fill="currentColor" />
  </svg>
)

const DefaultCheckIcon = ({ size }: { size: CheckboxProps['size'] }) => (
  <svg
    width={size === 'sm' ? '12' : size === 'lg' ? '18' : '16'}
    height={size === 'sm' ? '12' : size === 'lg' ? '18' : '16'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12l5 5L20 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
      label,
      color = 'blue',
      size = 'md',
      indeterminate = false,
      indeterminateIcon,
      icon,
      checkedIcon,
      borderRadius = 'md',
      ...props
    },
    ref
  ) => {
    const hasCustomIcon = !!icon && !!checkedIcon
    const checkboxStyles = getCheckboxStyles({
      hasCustomIcon,
      color,
      size,
      disabled,
      borderRadius,
    })
    const labelStyles = getLabelStyles(size)
    const wrapperStyles = getCheckboxWrapperStyles(size)
    const checkmarkIconStyles = getCheckmarkIconStyles(size)
    const customIconStyles = getCustomIconStyles(size)

    return (
      <label css={labelStyles}>
        <div css={wrapperStyles}>
          <BaseCheckbox
            ref={ref}
            aria-checked={indeterminate ? 'mixed' : checked ? 'true' : 'false'}
            aria-labelledby={label ? `${id}-label` : undefined}
            tabIndex={disabled ? -1 : 0}
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            css={checkboxStyles}
            {...(checked === undefined
              ? { defaultChecked }
              : { checked, onChange })}
            {...props}
          >
            {({ isDefaultChecked }) =>
              hasCustomIcon && (
                <span css={customIconStyles}>
                  {isDefaultChecked ? checkedIcon : icon}
                </span>
              )
            }
          </BaseCheckbox>
          <span css={checkmarkIconStyles}>
            {indeterminate ? (
              indeterminateIcon || <DefaultIndeterminateIcon size={size} />
            ) : (
              <DefaultCheckIcon size={size} />
            )}
          </span>
        </div>
        {label && <span id={`${id}-label`}>{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
